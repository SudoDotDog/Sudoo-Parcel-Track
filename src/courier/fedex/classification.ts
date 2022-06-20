/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier_Fedex
 * @description Classification
 */

import { fixLocalClassificationRegExp } from "../../util/classification";

export const fedexClassificationPattern: string[] = [
    "[0-9]{20}",
    "[0-9]{15}",
    "[0-9]{12}",
    "[0-9]{22}",
];

export const fedexClassificationRegExp: RegExp = fixLocalClassificationRegExp(fedexClassificationPattern);
