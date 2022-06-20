/**
 * @author WMXPY
 * @namespace ParcelTrack
 * @description Parcel Track
 */

import { ParcelTrackCourierFedex } from "./courier/fedex/parcel-track";
import { ParcelTrackCourierUnknown } from "./courier/unknown/parcel-track";
import { ParcelTrackCourierUPS } from "./courier/ups/parcel-track";
import { ParcelTrackCourierUSPS } from "./courier/usps/parcel-track";
import { COURIER, IParcelTrackCourier } from "./declare";

export class ParcelTrack {

    public static fromCarrier(courier: COURIER): IParcelTrackCourier {

        switch (courier) {
            case COURIER.USPS:
                return new ParcelTrackCourierUSPS();
            case COURIER.UPS:
                return new ParcelTrackCourierUPS();
            case COURIER.FEDEX:
                return new ParcelTrackCourierFedex();
            default:
                return new ParcelTrackCourierUnknown();
        }
    }
}
