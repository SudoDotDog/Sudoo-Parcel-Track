/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier_Fedex
 * @description Parcel Track
 */

import { ParcelTrackResult } from "../../declare";
import { ParcelTrackCourierBase } from "../../parcel-track/base";

export class ParcelTrackCourierFedex extends ParcelTrackCourierBase {


    public getExternalURL(trackingNumber: string): string {

        return [
            'https://www.fedex.com/apps/fedextrack/?tracknumber=',
            trackingNumber,
        ].join('');
    }

    public trackSingle(_trackingNumber: string): Promise<ParcelTrackResult> {

        throw new Error('Method not implemented.');
    }
}
