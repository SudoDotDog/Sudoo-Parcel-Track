/**
 * @author WMXPY
 * @namespace Classification
 * @description Email
 */

import { EMAIL_TYPE } from "../../database/email/entity";
import { TRACK_CARRIER } from "../../database/track/entity";
import { createGlobalTrackingRegExp, fedexRegExp, upsRegExp, uspsRegExp } from "../tracking";
import { EmailClassificationResult, EmailClassificationTrackingTracking } from "./declare";

const findInGlobalRegExp = (body: string): EmailClassificationTrackingTracking[] => {

    const regExp: RegExp = createGlobalTrackingRegExp();
    let temp;

    let limit: number = 10;

    const result: string[] = [];

    while (
        (temp = regExp.exec(body)) !== null
        && limit-- > 0
    ) {

        const value: string = temp[0];
        const trimmed: string = value.substring(1, value.length - 1);
        result.push(trimmed);
    }

    const mappedResult: EmailClassificationTrackingTracking[] = result.map((value: string): EmailClassificationTrackingTracking => {

        if (uspsRegExp.test(value)) {
            return {
                trackingNumber: value,
                carrier: TRACK_CARRIER.USPS,
            };
        }

        if (upsRegExp.test(value)) {
            return {
                trackingNumber: value,
                carrier: TRACK_CARRIER.UPS,
            };
        }

        if (fedexRegExp.test(value)) {
            return {
                trackingNumber: value,
                carrier: TRACK_CARRIER.FEDEX,
            };
        }

        return {
            trackingNumber: value,
            carrier: TRACK_CARRIER.UNKNOWN,
        };
    });

    return mappedResult;
};

export const classifyEmail = (_subject: string, body: string): EmailClassificationResult => {

    const matchResult: EmailClassificationTrackingTracking[] = findInGlobalRegExp(body);

    if (matchResult.length === 0) {

        return {
            type: EMAIL_TYPE.UNKNOWN,
        };
    }

    return {
        type: EMAIL_TYPE.TRACKING,
        tracking: matchResult,
    };
};
