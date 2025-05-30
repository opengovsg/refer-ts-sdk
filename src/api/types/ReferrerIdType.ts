/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Type of ID specified in referrerId. Use together with `referrerId` and `referrerInstitutionId` to filter based on referrer.
 */
export type ReferrerIdType = "mcr" | "nric" | "email";
export const ReferrerIdType = {
    Mcr: "mcr",
    Nric: "nric",
    Email: "email",
} as const;
