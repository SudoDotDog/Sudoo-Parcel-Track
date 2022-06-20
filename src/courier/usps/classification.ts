/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier_USPS
 * @description Classification
 */

import { fixLocalClassificationRegExp } from "../../util/classification";

export const uspsClassificationPattern: string[] = [
    "(94|93|92|94|95)[0-9]{20}",
    "(94|93|92|94|95)[0-9]{22}",
    "(94|93|92|94|95)[0-9]{24}",
    "(70|14|23|03)[0-9]{14}",
    "(M0|82)[0-9]{8}",
    "([A-Z]{2})[0-9]{9}([A-Z]{2})",
];

export const uspsClassificationRegExp: RegExp = fixLocalClassificationRegExp(uspsClassificationPattern);
