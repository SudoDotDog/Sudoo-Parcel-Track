/**
 * @author WMXPY
 * @namespace ParcelTrack_ParcelTrack
 * @description Parcel Track Base
 */

import { IParcelTrackCourier, ParcelTrackResult } from "../declare";

export abstract class ParcelTrackCourierBase implements IParcelTrackCourier {

    public abstract getExternalURL(trackingNumber: string): string;

    public abstract trackSingle(trackingNumber: string): Promise<ParcelTrackResult>;
}
