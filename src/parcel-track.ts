/**
 * @author WMXPY
 * @namespace ParcelTrack
 * @description Parcel Track
 */

import { ParcelTrackCourierFedex } from "./courier/fedex/parcel-track";
import { ParcelTrackCourierUnknown } from "./courier/unknown/parcel-track";
import { ParcelTrackCourierUPS } from "./courier/ups/parcel-track";
import { ParcelTrackCourierUSPS } from "./courier/usps/parcel-track";
import { CARRIER, IParcelTrackCourier } from "./declare";

export class ParcelTrack {

    public static fromCarrier(carrier: CARRIER): IParcelTrackCourier {

        switch (carrier) {
            case CARRIER.USPS:
                return new ParcelTrackCourierUSPS();
            case CARRIER.UPS:
                return new ParcelTrackCourierUPS();
            case CARRIER.FEDEX:
                return new ParcelTrackCourierFedex();
            default:
                return new ParcelTrackCourierUnknown();
        }
    }
}
