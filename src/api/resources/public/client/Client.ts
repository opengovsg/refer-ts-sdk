/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ReferralExchange from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Public {
    interface Options {
        environment?: core.Supplier<environments.ReferralExchangeEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Public {
    constructor(protected readonly _options: Public.Options = {}) {}

    /**
     * @param {string} referralId - Referral ID
     * @param {ReferralExchange.PublicGetReferralRequest} request
     * @param {Public.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ReferralExchange.NotFoundError}
     *
     * @example
     *     await client.public.getReferral("referralId")
     */
    public async getReferral(
        referralId: string,
        request: ReferralExchange.PublicGetReferralRequest = {},
        requestOptions?: Public.RequestOptions
    ): Promise<ReferralExchange.PublicReferralDto> {
        const { includeAttachments } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (includeAttachments != null) {
            _queryParams["includeAttachments"] = includeAttachments.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.ReferralExchangeEnvironment.Production,
                `api/v1/public/referrals/${encodeURIComponent(referralId)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@opengovsg/refx-ts-sdk",
                "X-Fern-SDK-Version": "0.0.20",
                "User-Agent": "@opengovsg/refx-ts-sdk/0.0.20",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as ReferralExchange.PublicReferralDto;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new ReferralExchange.NotFoundError(_response.error.body as unknown);
                default:
                    throw new errors.ReferralExchangeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ReferralExchangeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ReferralExchangeTimeoutError(
                    "Timeout exceeded when calling GET /api/v1/public/referrals/{referralId}."
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { Authorization: apiKeyValue };
    }
}
