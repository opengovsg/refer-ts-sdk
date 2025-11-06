import jwt from "jsonwebtoken";

import { ReferralExchangeClient } from "../Client";
import { fetcherImpl } from "../core/fetcher/Fetcher";
import type { FetchFunction } from "../core/fetcher/Fetcher";

const JWT_TTL_SECONDS = 15;

export declare namespace ReferralExchangeJwtClient {
    export interface Options extends Omit<ReferralExchangeClient.Options, "fetcher" | "apiKey"> {
        privateKey: string;
        apiKeyName: string;
    }
}

export class ReferralExchangeJwtClient extends ReferralExchangeClient {
    constructor(options: ReferralExchangeJwtClient.Options) {
        const { privateKey, apiKeyName, ...baseOptions } = options;
        const signer = new JwtSigner({ privateKey, issuer: apiKeyName });
        const fetcher = createJwtFetcher(signer);
        super({
            ...baseOptions,
            fetcher,
        });
    }
}

interface JwtSignerConfig {
    privateKey: string;
    issuer: string;
}

class JwtSigner {
    private readonly privateKey: string;
    private readonly issuer: string;
    private cachedToken: { token: string; expiresAtEpochSeconds: number } | undefined;

    constructor({ privateKey, issuer }: JwtSignerConfig) {
        this.privateKey = privateKey;
        this.issuer = issuer;
    }

    public async getToken(): Promise<string> {
        const nowSeconds = Math.floor(Date.now() / 1000);
        if (this.cachedToken != null && nowSeconds < this.cachedToken.expiresAtEpochSeconds - 1) {
            return this.cachedToken.token;
        }

        const { token, expiresAtEpochSeconds } = createSignedJwt({
            privateKey: this.privateKey,
            issuer: this.issuer,
        });
        this.cachedToken = { token, expiresAtEpochSeconds };
        return token;
    }
}

function createJwtFetcher(signer: JwtSigner): FetchFunction {
    return async (args) => {
        const token = await signer.getToken();
        const headers = { ...(args.headers ?? {}) };
        headers.Authorization = `Bearer ${token}`;

        return fetcherImpl({
            ...args,
            headers,
        });
    };
}

interface CreateSignedJwtArgs {
    privateKey: string;
    issuer: string;
}

function createSignedJwt({ privateKey, issuer }: CreateSignedJwtArgs): {
    token: string;
    expiresAtEpochSeconds: number;
} {
    const issuedAt = Math.floor(Date.now() / 1000);
    const expiresAtEpochSeconds = issuedAt + JWT_TTL_SECONDS;

    const token = jwt.sign(
        {},
        privateKey,
        {
            algorithm: "ES256",
            issuer,
            expiresIn: JWT_TTL_SECONDS,
        },
    );

    return {
        token,
        expiresAtEpochSeconds,
    };
}
