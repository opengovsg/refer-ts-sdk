import jwt from "jsonwebtoken";

import { ReferralExchangeClient } from "../Client";
import { fetcherImpl } from "../core/fetcher/Fetcher";
import type { FetchFunction } from "../core/fetcher/Fetcher";

const JWT_TTL_SECONDS = 15;

export declare namespace ReferralExchangeJwtClient {
    export interface Options extends Omit<ReferralExchangeClient.Options, "fetcher" | "apiKey"> {
        privateKey: string;
        apiKeyName: string;
        subject?: string;
        tokenCache?: TokenCacheOptions;
    }

    export interface TokenCacheOptions {
        refreshBufferSeconds: number;
    }
}

export class ReferralExchangeJwtClient extends ReferralExchangeClient {
    constructor(options: ReferralExchangeJwtClient.Options) {
        const { privateKey, apiKeyName, subject, tokenCache, ...baseOptions } = options;
        const signer = new JwtSigner({ privateKey, issuer: apiKeyName, subject, tokenCache });
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
    subject?: string;
    tokenCache?: ReferralExchangeJwtClient.TokenCacheOptions;
}

class JwtSigner {
    private readonly privateKey: string;
    private readonly issuer: string;
    private readonly subject?: string;
    private readonly cacheEnabled: boolean;
    private readonly refreshBufferSeconds: number;
    private cachedToken: { token: string; expiresAtEpochSeconds: number } | undefined;

    constructor({ privateKey, issuer, subject, tokenCache }: JwtSignerConfig) {
        this.privateKey = privateKey;
        this.issuer = issuer;
        this.subject = subject;
        const cacheEnabled = tokenCache != null;
        this.cacheEnabled = cacheEnabled;
        this.refreshBufferSeconds = cacheEnabled ? clampRefreshBufferSeconds(tokenCache.refreshBufferSeconds) : 0;
    }

    public async getToken(): Promise<string> {
        if (!this.cacheEnabled) {
            return this.signToken().token;
        }

        const nowSeconds = Math.floor(Date.now() / 1000);
        if (
            this.cachedToken != null &&
            nowSeconds < this.cachedToken.expiresAtEpochSeconds - this.refreshBufferSeconds
        ) {
            return this.cachedToken.token;
        }

        const signedToken = this.signToken();
        this.cachedToken = signedToken;
        return signedToken.token;
    }

    private signToken(): { token: string; expiresAtEpochSeconds: number } {
        return createSignedJwt({
            privateKey: this.privateKey,
            issuer: this.issuer,
            subject: this.subject,
        });
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
    subject?: string;
}

function createSignedJwt({ privateKey, issuer, subject }: CreateSignedJwtArgs): {
    token: string;
    expiresAtEpochSeconds: number;
} {
    const issuedAt = Math.floor(Date.now() / 1000);
    const expiresAtEpochSeconds = issuedAt + JWT_TTL_SECONDS;
    const signOptions: jwt.SignOptions = {
        algorithm: "ES256",
        issuer,
        expiresIn: JWT_TTL_SECONDS,
    };

    // Only add the claim if a value is provided(not null or undefined) 
    if (subject != null) {
        signOptions.subject = subject;
    }

    const token = jwt.sign({}, privateKey, signOptions);

    return {
        token,
        expiresAtEpochSeconds,
    };
}

function clampRefreshBufferSeconds(refreshBufferSeconds: number): number {
    const lowerBound = 0;
    const upperBound = Math.max(JWT_TTL_SECONDS - 1, 0);
    return Math.min(Math.max(refreshBufferSeconds, lowerBound), upperBound);
}
