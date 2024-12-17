/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ReferralExchange from "../index";

export interface OfferingFullDto {
    id: string;
    /** Name of the offering - use these as labels */
    name: string;
    institutionHciCode: string;
    institution: ReferralExchange.InstitutionCoreDto;
    /** TODO - do not use this field right now */
    specialty: string;
    /** Whether the offering is able to receive new referrals currently */
    isActive: boolean;
    /** Whether this offering supports urgent referrals. TODO - may deprecate soon. */
    isUrgentable: boolean;
    /** Whether this offering supports subsidized referrals. */
    isSubsidisable: boolean;
    /** Whether this offering requires selecting timeslots during referral. */
    shouldShowTimeslots: boolean;
}
