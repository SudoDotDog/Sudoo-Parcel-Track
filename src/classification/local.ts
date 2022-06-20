/**
 * @author WMXPY
 * @namespace ParcelTrack_Classification
 * @description Local
 */

import { COURIER } from "../declare";
import { fixLocalClassificationRegExp } from "../util/classification";
import { courierClassificationList } from "./classification";

export const localClassification = (trackingNumber: string): COURIER => {

    for (const courier of courierClassificationList) {

        const regExp: RegExp = fixLocalClassificationRegExp(courier.pattern);

        if (regExp.test(trackingNumber)) {

            return courier.courier;
        }
    }
    return COURIER.UNKNOWN;
};
