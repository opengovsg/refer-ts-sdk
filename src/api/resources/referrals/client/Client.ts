/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as ReferralExchange from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Referrals {
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

export class Referrals {
    constructor(protected readonly _options: Referrals.Options) {}

    /**
     * @param {ReferralExchange.ReferralsListRequest} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.referrals.list({
     *         hciCode: "hciCode"
     *     })
     */
    public async list(
        request: ReferralExchange.ReferralsListRequest,
        requestOptions?: Referrals.RequestOptions
    ): Promise<ReferralExchange.PaginatedReferralsDto> {
        const { hciCode, status, role, offset, pageSize } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["hciCode"] = hciCode;
        if (status != null) {
            if (Array.isArray(status)) {
                _queryParams["status"] = status.map((item) => item);
            } else {
                _queryParams["status"] = status;
            }
        }

        if (role != null) {
            _queryParams["role"] = role;
        }

        if (offset != null) {
            _queryParams["offset"] = JSON.stringify(offset);
        }

        if (pageSize != null) {
            _queryParams["pageSize"] = JSON.stringify(pageSize);
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/referrals"),
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
            return _response.body as ReferralExchange.PaginatedReferralsDto;
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
                throw new errors.ReferralExchangeTimeoutError("Timeout exceeded when calling GET /api/v1/referrals.");
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {ReferralExchange.CreateReferralReq} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.referrals.upsert({
     *         patient: {
     *             uin: "uin",
     *             name: "name",
     *             phoneNumber: "91234567",
     *             dob: "1990-01-01",
     *             gender: "Male"
     *         },
     *         offeringId: "offeringId",
     *         senderHciCode: "senderHciCode",
     *         senderInstitutionName: "senderInstitutionName",
     *         doctorMcr: "doctorMcr",
     *         doctorName: "doctorName",
     *         doctorEmail: "doctorEmail",
     *         doctorContactNumber: "doctorContactNumber",
     *         isSubsidised: {
     *             "key": "value"
     *         },
     *         isUrgent: {
     *             "key": "value"
     *         },
     *         isDraft: {
     *             "key": "value"
     *         },
     *         formResponses: [{}]
     *     })
     */
    public async upsert(
        request: ReferralExchange.CreateReferralReq,
        requestOptions?: Referrals.RequestOptions
    ): Promise<ReferralExchange.ReferralDto> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/referrals"),
            method: "POST",
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
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as ReferralExchange.ReferralDto;
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
                throw new errors.ReferralExchangeTimeoutError("Timeout exceeded when calling POST /api/v1/referrals.");
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.referrals.get("referralId")
     */
    public async get(
        referralId: string,
        requestOptions?: Referrals.RequestOptions
    ): Promise<ReferralExchange.FullReferralDto> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `api/v1/referrals/${encodeURIComponent(referralId)}`
            ),
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
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as ReferralExchange.FullReferralDto;
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
                throw new errors.ReferralExchangeTimeoutError(
                    "Timeout exceeded when calling GET /api/v1/referrals/{referralId}."
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.referrals.delete("referralId")
     */
    public async delete(
        referralId: string,
        requestOptions?: Referrals.RequestOptions
    ): Promise<ReferralExchange.ReferralDto> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `api/v1/referrals/${encodeURIComponent(referralId)}`
            ),
            method: "DELETE",
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
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as ReferralExchange.ReferralDto;
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
                throw new errors.ReferralExchangeTimeoutError(
                    "Timeout exceeded when calling DELETE /api/v1/referrals/{referralId}."
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId
     * @param {ReferralExchange.CancelReferralReq} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.referrals.cancel("referralId")
     */
    public async cancel(
        referralId: string,
        request: ReferralExchange.CancelReferralReq = {},
        requestOptions?: Referrals.RequestOptions
    ): Promise<ReferralExchange.ReferralDto> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `api/v1/referrals/${encodeURIComponent(referralId)}/cancel`
            ),
            method: "POST",
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
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as ReferralExchange.ReferralDto;
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
                throw new errors.ReferralExchangeTimeoutError(
                    "Timeout exceeded when calling POST /api/v1/referrals/{referralId}/cancel."
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId
     * @param {ReferralExchange.AmendReferralReq} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.referrals.amend("referralId", {
     *         timeslotStartAt: 1714857600000
     *     })
     */
    public async amend(
        referralId: string,
        request: ReferralExchange.AmendReferralReq,
        requestOptions?: Referrals.RequestOptions
    ): Promise<ReferralExchange.ReferralDto> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `api/v1/referrals/${encodeURIComponent(referralId)}/amend`
            ),
            method: "POST",
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
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as ReferralExchange.ReferralDto;
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
                throw new errors.ReferralExchangeTimeoutError(
                    "Timeout exceeded when calling POST /api/v1/referrals/{referralId}/amend."
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId
     * @param {ReferralExchange.EaConfirmReferralBody} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.referrals.accept("referralId", {
     *         appointmentTime: 1714857600000
     *     })
     */
    public async accept(
        referralId: string,
        request: ReferralExchange.EaConfirmReferralBody,
        requestOptions?: Referrals.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `api/v1/referrals/${encodeURIComponent(referralId)}/accept/ea`
            ),
            method: "POST",
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
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
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
                throw new errors.ReferralExchangeTimeoutError(
                    "Timeout exceeded when calling POST /api/v1/referrals/{referralId}/accept/ea."
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId
     * @param {ReferralExchange.EaRejectReferralBody} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.referrals.reject("referralId", {
     *         rejectionMessage: "rejectionMessage"
     *     })
     */
    public async reject(
        referralId: string,
        request: ReferralExchange.EaRejectReferralBody,
        requestOptions?: Referrals.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                await core.Supplier.get(this._options.environment),
                `api/v1/referrals/${encodeURIComponent(referralId)}/reject/ea`
            ),
            method: "POST",
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
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
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
                throw new errors.ReferralExchangeTimeoutError(
                    "Timeout exceeded when calling POST /api/v1/referrals/{referralId}/reject/ea."
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
