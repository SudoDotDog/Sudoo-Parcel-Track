/**
 * @author WMXPY
 * @namespace ParcelTrack_Classification
 * @description Classification
 */

import { fedexClassificationPattern } from "../courier/fedex/classification";
import { upsClassificationPattern } from "../courier/ups/classification";
import { uspsClassificationPattern } from "../courier/usps/classification";
import { COURIER } from "../declare";
import { fixGlobalClassificationRegExp } from "../util/classification";
import { ClassificationCourier } from "./declare";

export const createGlobalClassificationRegExp = (): RegExp => {

    return fixGlobalClassificationRegExp([
        ...uspsClassificationPattern,
        ...upsClassificationPattern,
        ...fedexClassificationPattern,
    ]);
};

export const courierClassificationList: ClassificationCourier[] = [
    {
        courier: COURIER.USPS,
        pattern: uspsClassificationPattern,
    },
    {
        courier: COURIER.UPS,
        pattern: upsClassificationPattern,
    },
    {
        courier: COURIER.FEDEX,
        pattern: fedexClassificationPattern,
    },
];
