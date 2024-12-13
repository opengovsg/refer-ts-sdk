/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ReferralExchange from "../../../../index";

/**
 * @example
 *     {
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
 *     }
 */
export interface CreateReferralReq {
    patient: ReferralExchange.CreatePatientReq;
    offeringId: string;
    /** HCI code of the institution authoring this referral. */
    senderHciCode: string;
    /** Name of the institution authoring this referral. */
    senderInstitutionName: string;
    /** MCR number of the doctor authoring this referral. */
    doctorMcr: string;
    /** Name of the doctor authoring this referral. */
    doctorName: string;
    /** Email of the doctor authoring this referral. */
    doctorEmail: string;
    /** Contact number of the doctor authoring this referral. */
    doctorContactNumber: string;
    isSubsidised: Record<string, unknown>;
    isUrgent: Record<string, unknown>;
    /** In draft state, further edits can be made. No referral will be emitted to the service provider yet. */
    isDraft: Record<string, unknown>;
    /** Referral ID */
    id?: string;
    /** Timeslot start time, in milliseconds since epoch. */
    timeslotStartAt?: number;
    /** Form responses */
    formResponses: ReferralExchange.FormResponse[];
}
