/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as ReferralExchange from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Eligibility {
    interface Options {
        environment: core.Supplier<string>;
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

export class Eligibility {
    constructor(protected readonly _options: Eligibility.Options) {}

    /**
     * @param {ReferralExchange.EligibilityGetRequest} request
     * @param {Eligibility.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.eligibility.get({
     *         uin: "uin",
     *         offeringId: "offeringId"
     *     })
     */
    public async get(
        request: ReferralExchange.EligibilityGetRequest,
        requestOptions?: Eligibility.RequestOptions
    ): Promise<ReferralExchange.EligibilityRes> {
        const { uin, offeringId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["uin"] = uin;
        _queryParams["offeringId"] = offeringId;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/eligibility"),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "ogp-refx",
                "X-Fern-SDK-Version": "0.0.2",
                "User-Agent": "ogp-refx/0.0.2",
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
            return _response.body as ReferralExchange.EligibilityRes;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ReferralExchangeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ReferralExchangeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ReferralExchangeTimeoutError("Timeout exceeded when calling GET /api/v1/eligibility.");
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
