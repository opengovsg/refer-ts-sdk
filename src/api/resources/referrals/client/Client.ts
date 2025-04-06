/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ReferralExchange from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Referrals {
    export interface Options {
        environment?: core.Supplier<environments.ReferralExchangeEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
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
    constructor(protected readonly _options: Referrals.Options = {}) {}

    /**
     * @param {ReferralExchange.ReferralsListRequest} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ReferralExchange.UnauthorizedError}
     *
     * @example
     *     await client.referrals.list({
     *         hciCode: "hciCode"
     *     })
     */
    public async list(
        request: ReferralExchange.ReferralsListRequest,
        requestOptions?: Referrals.RequestOptions,
    ): Promise<ReferralExchange.PaginatedReferralsDto> {
        const { offset, pageSize, hciCode, status, role } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        if (pageSize != null) {
            _queryParams["pageSize"] = pageSize.toString();
        }

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

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ReferralExchangeEnvironment.SmartCms,
                "api/v1/referrals",
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@opengovsg/refx-ts-sdk",
                "X-Fern-SDK-Version": "0.0.32-prerelease-1743933274",
                "User-Agent": "@opengovsg/refx-ts-sdk/0.0.32-prerelease-1743933274",
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
            switch (_response.error.statusCode) {
                case 401:
                    throw new ReferralExchange.UnauthorizedError(_response.error.body as unknown);
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
     * @throws {@link ReferralExchange.BadRequestError}
     * @throws {@link ReferralExchange.UnauthorizedError}
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
     *         isSubsidised: true,
     *         isUrgent: true,
     *         isDraft: true,
     *         formResponses: [{
     *                 question: "question",
     *                 id: "id",
     *                 answer: "answer"
     *             }]
     *     })
     */
    public async upsert(
        request: ReferralExchange.CreateReferralReq,
        requestOptions?: Referrals.RequestOptions,
    ): Promise<ReferralExchange.ReferralDto> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ReferralExchangeEnvironment.SmartCms,
                "api/v1/referrals",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@opengovsg/refx-ts-sdk",
                "X-Fern-SDK-Version": "0.0.32-prerelease-1743933274",
                "User-Agent": "@opengovsg/refx-ts-sdk/0.0.32-prerelease-1743933274",
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
            switch (_response.error.statusCode) {
                case 400:
                    throw new ReferralExchange.BadRequestError(
                        _response.error.body as ReferralExchange.BadRequestErrorBody,
                    );
                case 401:
                    throw new ReferralExchange.UnauthorizedError(_response.error.body as unknown);
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
                throw new errors.ReferralExchangeTimeoutError("Timeout exceeded when calling POST /api/v1/referrals.");
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId - Referral ID
     * @param {ReferralExchange.ReferralsGetRequest} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ReferralExchange.UnauthorizedError}
     * @throws {@link ReferralExchange.NotFoundError}
     *
     * @example
     *     await client.referrals.get("referralId")
     */
    public async get(
        referralId: string,
        request: ReferralExchange.ReferralsGetRequest = {},
        requestOptions?: Referrals.RequestOptions,
    ): Promise<ReferralExchange.FullReferralDto> {
        const { includeAttachments } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (includeAttachments != null) {
            _queryParams["includeAttachments"] = includeAttachments.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ReferralExchangeEnvironment.SmartCms,
                `api/v1/referrals/${encodeURIComponent(referralId)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@opengovsg/refx-ts-sdk",
                "X-Fern-SDK-Version": "0.0.32-prerelease-1743933274",
                "User-Agent": "@opengovsg/refx-ts-sdk/0.0.32-prerelease-1743933274",
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
            return _response.body as ReferralExchange.FullReferralDto;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new ReferralExchange.UnauthorizedError(_response.error.body as unknown);
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
                    "Timeout exceeded when calling GET /api/v1/referrals/{referralId}.",
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId - Referral ID
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ReferralExchange.UnauthorizedError}
     *
     * @example
     *     await client.referrals.delete("referralId")
     */
    public async delete(
        referralId: string,
        requestOptions?: Referrals.RequestOptions,
    ): Promise<ReferralExchange.ReferralDto> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ReferralExchangeEnvironment.SmartCms,
                `api/v1/referrals/${encodeURIComponent(referralId)}`,
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@opengovsg/refx-ts-sdk",
                "X-Fern-SDK-Version": "0.0.32-prerelease-1743933274",
                "User-Agent": "@opengovsg/refx-ts-sdk/0.0.32-prerelease-1743933274",
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
            switch (_response.error.statusCode) {
                case 401:
                    throw new ReferralExchange.UnauthorizedError(_response.error.body as unknown);
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
                    "Timeout exceeded when calling DELETE /api/v1/referrals/{referralId}.",
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId - Referral ID
     * @param {ReferralExchange.CancelReferralReq} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ReferralExchange.UnauthorizedError}
     *
     * @example
     *     await client.referrals.cancel("referralId")
     */
    public async cancel(
        referralId: string,
        request: ReferralExchange.CancelReferralReq = {},
        requestOptions?: Referrals.RequestOptions,
    ): Promise<ReferralExchange.ReferralDto> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ReferralExchangeEnvironment.SmartCms,
                `api/v1/referrals/${encodeURIComponent(referralId)}/cancel`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@opengovsg/refx-ts-sdk",
                "X-Fern-SDK-Version": "0.0.32-prerelease-1743933274",
                "User-Agent": "@opengovsg/refx-ts-sdk/0.0.32-prerelease-1743933274",
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
            switch (_response.error.statusCode) {
                case 401:
                    throw new ReferralExchange.UnauthorizedError(_response.error.body as unknown);
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
                    "Timeout exceeded when calling POST /api/v1/referrals/{referralId}/cancel.",
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId - Referral ID
     * @param {ReferralExchange.AmendReferralReq} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ReferralExchange.UnauthorizedError}
     *
     * @example
     *     await client.referrals.amend("referralId", {
     *         timeslotStartAt: 1714857600000
     *     })
     */
    public async amend(
        referralId: string,
        request: ReferralExchange.AmendReferralReq,
        requestOptions?: Referrals.RequestOptions,
    ): Promise<ReferralExchange.ReferralDto> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ReferralExchangeEnvironment.SmartCms,
                `api/v1/referrals/${encodeURIComponent(referralId)}/amend`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@opengovsg/refx-ts-sdk",
                "X-Fern-SDK-Version": "0.0.32-prerelease-1743933274",
                "User-Agent": "@opengovsg/refx-ts-sdk/0.0.32-prerelease-1743933274",
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
            switch (_response.error.statusCode) {
                case 401:
                    throw new ReferralExchange.UnauthorizedError(_response.error.body as unknown);
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
                    "Timeout exceeded when calling POST /api/v1/referrals/{referralId}/amend.",
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId - Referral ID
     * @param {ReferralExchange.EaConfirmReferralBody} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ReferralExchange.UnauthorizedError}
     *
     * @example
     *     await client.referrals.accept("referralId", {
     *         appointmentTime: 1714857600000
     *     })
     */
    public async accept(
        referralId: string,
        request: ReferralExchange.EaConfirmReferralBody,
        requestOptions?: Referrals.RequestOptions,
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ReferralExchangeEnvironment.SmartCms,
                `api/v1/referrals/${encodeURIComponent(referralId)}/accept`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@opengovsg/refx-ts-sdk",
                "X-Fern-SDK-Version": "0.0.32-prerelease-1743933274",
                "User-Agent": "@opengovsg/refx-ts-sdk/0.0.32-prerelease-1743933274",
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
            switch (_response.error.statusCode) {
                case 401:
                    throw new ReferralExchange.UnauthorizedError(_response.error.body as unknown);
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
                    "Timeout exceeded when calling POST /api/v1/referrals/{referralId}/accept.",
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId - Referral ID
     * @param {ReferralExchange.EaRejectReferralBody} request
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ReferralExchange.UnauthorizedError}
     *
     * @example
     *     await client.referrals.reject("referralId", {
     *         rejectionMessage: "rejectionMessage"
     *     })
     */
    public async reject(
        referralId: string,
        request: ReferralExchange.EaRejectReferralBody,
        requestOptions?: Referrals.RequestOptions,
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ReferralExchangeEnvironment.SmartCms,
                `api/v1/referrals/${encodeURIComponent(referralId)}/reject`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@opengovsg/refx-ts-sdk",
                "X-Fern-SDK-Version": "0.0.32-prerelease-1743933274",
                "User-Agent": "@opengovsg/refx-ts-sdk/0.0.32-prerelease-1743933274",
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
            switch (_response.error.statusCode) {
                case 401:
                    throw new ReferralExchange.UnauthorizedError(_response.error.body as unknown);
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
                    "Timeout exceeded when calling POST /api/v1/referrals/{referralId}/reject.",
                );
            case "unknown":
                throw new errors.ReferralExchangeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} referralId - Referral ID
     * @param {Referrals.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ReferralExchange.UnauthorizedError}
     *
     * @example
     *     await client.referrals.backToDraft("referralId")
     */
    public async backToDraft(
        referralId: string,
        requestOptions?: Referrals.RequestOptions,
    ): Promise<ReferralExchange.ReferralDto> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.ReferralExchangeEnvironment.SmartCms,
                `api/v1/referrals/${encodeURIComponent(referralId)}/back-to-draft`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@opengovsg/refx-ts-sdk",
                "X-Fern-SDK-Version": "0.0.32-prerelease-1743933274",
                "User-Agent": "@opengovsg/refx-ts-sdk/0.0.32-prerelease-1743933274",
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
            switch (_response.error.statusCode) {
                case 401:
                    throw new ReferralExchange.UnauthorizedError(_response.error.body as unknown);
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
                    "Timeout exceeded when calling POST /api/v1/referrals/{referralId}/back-to-draft.",
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
