jest.mock("../../../src/core/fetcher/Fetcher", () => ({
    fetcherImpl: jest.fn(),
}));

jest.mock("jsonwebtoken", () => ({
    __esModule: true,
    default: {
        sign: jest.fn(),
    },
}));

import jwt from "jsonwebtoken";

import { ReferralExchangeJwtClient } from "../../../src/wrapper/ReferralExchangeJwtClient";

const fetcherImplMock = jest.requireMock("../../../src/core/fetcher/Fetcher").fetcherImpl as jest.Mock;
const signMock = jwt.sign as jest.Mock<string, any[]>;

describe("ReferralExchangeJwtClient", () => {
    const requestArgs = { url: "https://refx.test/resource", method: "GET" };

    beforeEach(() => {
        fetcherImplMock.mockReset();
        fetcherImplMock.mockResolvedValue({ ok: true });
        signMock.mockReset();
    });

    it("signs a new token for every request when caching is disabled", async () => {
        signMock.mockReturnValueOnce("token-1").mockReturnValueOnce("token-2");

        const client = new ReferralExchangeJwtClient({
            privateKey: "fake-private-key",
            apiKeyName: "issuer",
        });

        const fetcher = ((client as any)._options.fetcher) as (args: typeof requestArgs) => Promise<unknown>;

        await fetcher(requestArgs);
        await fetcher(requestArgs);

        expect(signMock).toHaveBeenCalledTimes(2);
        expect(fetcherImplMock).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                headers: expect.objectContaining({
                    Authorization: "Bearer token-1",
                }),
            }),
        );
        expect(fetcherImplMock).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                headers: expect.objectContaining({
                    Authorization: "Bearer token-2",
                }),
            }),
        );
    });

    it("omits subject claim when not provided", async () => {
        signMock.mockReturnValue("token-1");

        const client = new ReferralExchangeJwtClient({
            privateKey: "fake-private-key",
            apiKeyName: "issuer",
        });

        const fetcher = ((client as any)._options.fetcher) as (args: typeof requestArgs) => Promise<unknown>;

        await fetcher(requestArgs);

        const [, , options] = signMock.mock.calls[0];
        expect(options).toEqual(
            expect.objectContaining({
                issuer: "issuer",
                algorithm: "ES256",
            }),
        );
        expect(options).not.toHaveProperty("subject");
    });

    it("includes subject claim when provided", async () => {
        signMock.mockReturnValue("token-1");

        const client = new ReferralExchangeJwtClient({
            privateKey: "fake-private-key",
            apiKeyName: "issuer",
            subject: "user-123",
        });

        const fetcher = ((client as any)._options.fetcher) as (args: typeof requestArgs) => Promise<unknown>;

        await fetcher(requestArgs);

        expect(signMock).toHaveBeenCalledWith(
            {},
            "fake-private-key",
            expect.objectContaining({
                issuer: "issuer",
                subject: "user-123",
            }),
        );
    });

    it("reuses cached tokens until the refresh buffer elapses", async () => {
        signMock.mockReturnValueOnce("token-1").mockReturnValueOnce("token-2");

        const client = new ReferralExchangeJwtClient({
            privateKey: "fake-private-key",
            apiKeyName: "issuer",
            tokenCache: { refreshBufferSeconds: 5 },
        });
        const fetcher = ((client as any)._options.fetcher) as (args: typeof requestArgs) => Promise<unknown>;

        let nowMs = 0;
        const dateSpy = jest.spyOn(Date, "now").mockImplementation(() => nowMs);

        nowMs = 0;
        await fetcher(requestArgs);
        nowMs = 2_000; // 2 seconds, still outside the 5 second refresh buffer window.
        await fetcher(requestArgs);
        nowMs = 11_000; // 11 seconds -> only 4 seconds remain before expiry, so refresh.
        await fetcher(requestArgs);

        expect(signMock).toHaveBeenCalledTimes(2);
        expect(fetcherImplMock).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                headers: expect.objectContaining({
                    Authorization: "Bearer token-1",
                }),
            }),
        );
        expect(fetcherImplMock).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                headers: expect.objectContaining({
                    Authorization: "Bearer token-1",
                }),
            }),
        );
        expect(fetcherImplMock).toHaveBeenNthCalledWith(
            3,
            expect.objectContaining({
                headers: expect.objectContaining({
                    Authorization: "Bearer token-2",
                }),
            }),
        );

        dateSpy.mockRestore();
    });

    it("clamps refresh buffer to the JWT lifetime", async () => {
        signMock.mockReturnValueOnce("token-1").mockReturnValueOnce("token-2");

        const client = new ReferralExchangeJwtClient({
            privateKey: "fake-private-key",
            apiKeyName: "issuer",
            tokenCache: { refreshBufferSeconds: 30 }, // larger than JWT_TTL_SECONDS
        });
        const fetcher = ((client as any)._options.fetcher) as (args: typeof requestArgs) => Promise<unknown>;

        let nowMs = 0;
        const dateSpy = jest.spyOn(Date, "now").mockImplementation(() => nowMs);

        nowMs = 0;
        await fetcher(requestArgs);
        nowMs = 500; // 0.5 seconds < (15s - 14s clamp) so the cached token is still valid
        await fetcher(requestArgs);
        nowMs = 1_500; // 1.5 seconds -> exceeds the clamped threshold, so a new token is signed
        await fetcher(requestArgs);

        expect(signMock).toHaveBeenCalledTimes(2);
        expect(fetcherImplMock).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                headers: expect.objectContaining({
                    Authorization: "Bearer token-1",
                }),
            }),
        );
        expect(fetcherImplMock).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                headers: expect.objectContaining({
                    Authorization: "Bearer token-1",
                }),
            }),
        );
        expect(fetcherImplMock).toHaveBeenNthCalledWith(
            3,
            expect.objectContaining({
                headers: expect.objectContaining({
                    Authorization: "Bearer token-2",
                }),
            }),
        );

        dateSpy.mockRestore();
    });
});
