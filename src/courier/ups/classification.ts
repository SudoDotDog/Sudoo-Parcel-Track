/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier_UPS
 * @description Classification
 */

import { fixLocalClassificationRegExp } from "../../util/classification";

export const upsClassificationPattern: string[] = [
    "(1Z)[0-9A-Z]{16}",
    "(T)+[0-9A-Z]{10}",
    "[0-9]{9}",
    "[0-9]{26}",
];

export const upsClassificationRegExp: RegExp = fixLocalClassificationRegExp(upsClassificationPattern);
