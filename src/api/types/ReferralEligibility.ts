/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ReferralEligibility {
    isAllowed: boolean;
    /** Will be present if isAllowed is false */
    reason?: string;
}
