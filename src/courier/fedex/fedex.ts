/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier_Fedex
 * @description Fedex
 */

import { ParcelTrackResult } from "../../declare";
import { ParcelTrackCourierBase } from "../base";

export class ParcelTrackCourierFedex extends ParcelTrackCourierBase {


    public getExternalURL(trackingNumber: string): string {
        return `https://www.fedex.com/apps/fedextrack/?tracknumber=${trackingNumber}`;
    }

    public trackSingle(_trackingNumber: string): Promise<ParcelTrackResult> {

        throw new Error('Method not implemented.');
    }
}
