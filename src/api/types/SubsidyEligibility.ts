/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ReferralExchange from "../index";

export interface SubsidyEligibility {
    isAllowed: boolean;
    /** Will be present if isAllowed is false */
    reason?: string;
    scheme: ReferralExchange.SubsidyEligibilityScheme;
}
