/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier_Unknown
 * @description Parcel Track
 */

import { ParcelTrackResult } from "../../declare";
import { ParcelTrackCourierBase } from "../../parcel-track/base";

export class ParcelTrackCourierUnknown extends ParcelTrackCourierBase {

    public getExternalURL(trackingNumber: string): string {
        throw new Error('Method not implemented.');
    }

    public trackSingle(_trackingNumber: string): Promise<ParcelTrackResult> {

        throw new Error('Method not implemented.');
    }
}
