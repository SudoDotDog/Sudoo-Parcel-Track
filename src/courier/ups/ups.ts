/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier_UPS
 * @description UPS
 */

import { ParcelTrackResult } from "../../declare";
import { ParcelTrackCourierBase } from "../base";

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
