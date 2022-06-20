/**
 * @author WMXPY
 * @namespace Classification
 * @description Declare
 */

import { EMAIL_TYPE } from "../../database/email/entity";
import { TRACK_CARRIER } from "../../database/track/entity";

export type EmailClassificationUnknownResult = {

    readonly type: EMAIL_TYPE.UNKNOWN;
};

export type EmailClassificationTrackingTracking = {

    readonly trackingNumber: string;
    readonly carrier: TRACK_CARRIER;
};

export type EmailClassificationTrackingResult = {

    readonly type: EMAIL_TYPE.TRACKING;
    readonly tracking: EmailClassificationTrackingTracking[];
};

export type EmailClassificationResult =
    | EmailClassificationUnknownResult
    | EmailClassificationTrackingResult;
