/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ReferralExchange from "../index";

export interface FullReferralDto {
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
    /** Form ID of the referral form */
    formId?: string;
    attachments: ReferralExchange.AttachmentDto[];
    status: ReferralExchange.FullReferralDtoStatus;
    /** Timeslot start time (ISO datetime) */
    timeslotStartAt?: string;
    notes: ReferralExchange.NoteDto[];
    /** URL of the FormSG required to complete the referral */
    formUrl?: string;
    /** List of forms required to complete the referral */
    forms?: ReferralExchange.Form[];
    timelineEvents: ReferralExchange.TimelineEventDto[];
    areFormsFilled: boolean;
}
