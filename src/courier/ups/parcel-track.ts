/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier_UPS
 * @description Parcel Track
 */

import { ParcelTrackResult } from "../../declare";
import { ParcelTrackCourierBase } from "../../parcel-track/base";

export class ParcelTrackCourierUPS extends ParcelTrackCourierBase {


    public getExternalURL(trackingNumber: string): string {

        return [
            'https://wwwapps.ups.com/WebTracking/processInputRequest?TypeOfInquiryNumber=T&InquiryNumber1=',
            trackingNumber,
        ].join('');
    }

    public trackSingle(_trackingNumber: string): Promise<ParcelTrackResult> {

        throw new Error('Method not implemented.');
    }
}
