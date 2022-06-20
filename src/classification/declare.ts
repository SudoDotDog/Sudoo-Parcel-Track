/**
 * @author WMXPY
 * @namespace ParcelTrack_Classification
 * @description Declare
 */

import { COURIER } from "../declare";

export type ClassificationCourier = {

    readonly courier: COURIER;
    readonly pattern: string[];
};
