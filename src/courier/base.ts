/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier
 * @description Base
 */

import { IParcelTrackCourier, ParcelTrackResult } from "../declare";

export abstract class ParcelTrackCourierBase implements IParcelTrackCourier {

    public abstract getExternalURL(trackingNumber: string): string;

    public abstract trackSingle(trackingNumber: string): Promise<ParcelTrackResult>;
}
