/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier
 * @description Base
 */

import { ParcelTrackResult } from "../declare";

export abstract class ParcelTrackCourierBase {

    public abstract getExternalURL(trackingNumber: string): string;

    public abstract trackSingle(trackingNumber: string): Promise<ParcelTrackResult>;
}
