/**
 * @author WMXPY
 * @namespace ParcelTrack_Classification
 * @description Classification
 */

import { fedexClassificationPattern } from "../courier/fedex/classification";
import { upsClassificationPattern } from "../courier/ups/classification";
import { uspsClassificationPattern } from "../courier/usps/classification";
import { fixLocalClassificationRegExp } from "../util/classification";

export const createGlobalClassificationRegExp = (): RegExp => {

    return fixLocalClassificationRegExp([
        ...uspsClassificationPattern,
        ...upsClassificationPattern,
        ...fedexClassificationPattern,
    ]);
};
