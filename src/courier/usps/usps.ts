/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier_USPS
 * @description USPS
 */

import { ParcelTrackResult } from "../../declare";
import { ParcelTrackCourierBase } from "../base";

export class ParcelTrackCourierUSPS extends ParcelTrackCourierBase {


    public getExternalURL(trackingNumber: string): string {

        return [
            'https://tools.usps.com/go/TrackConfirmAction?tLabels=',
            trackingNumber,
        ].join('');
    }

    public trackSingle(_trackingNumber: string): Promise<ParcelTrackResult> {

        throw new Error('Method not implemented.');
    }
}
