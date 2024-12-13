/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ReferralExchange from "../index";

export interface GetReferralPatientDto {
    /** Patient UIN */
    uin: string;
    /** Patient name */
    name: string;
    /** Patient phone number - only Singaporean accepted for now */
    phoneNumber: string;
    /** Patient date of birth */
    dob: string;
    /** Patient gender */
    gender: ReferralExchange.GetReferralPatientDtoGender;
    /** Current CHAS status */
    chasStatus: string;
}
