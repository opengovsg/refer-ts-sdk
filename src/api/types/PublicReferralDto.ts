/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ReferralExchange from "../index";

export interface PublicReferralDto {
    id: string;
    sender: ReferralExchange.InstitutionCoreDto;
    offering: ReferralExchange.OfferingDto;
    patient: ReferralExchange.GetReferralPatientDto;
    referringDoctor: ReferralExchange.ReferringDoctorDto;
    isSubsidised: boolean;
    isUrgent: boolean;
    /** Created at (ISO datetime) */
    createdAt: string;
    formResponses: ReferralExchange.FormResponse[];
    /** List of forms required to complete the referral */
    forms?: ReferralExchange.Form[];
    attachments: ReferralExchange.AttachmentDto[];
}
