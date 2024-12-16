/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ReferralExchange from "../index";

export interface InstitutionCoreDto {
    hciCode: string;
    name: string;
    system: ReferralExchange.InstitutionCoreDtoSystem;
    block: string;
    streetName: string;
    buildingName?: string;
    floorNumber?: string;
    unitNumber?: string;
    postalCode: string;
}
