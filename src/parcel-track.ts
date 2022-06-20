/**
 * @author WMXPY
 * @namespace ParcelTrack
 * @description Parcel Track
 */

import { ParcelTrackCourierFedex } from "./courier/fedex/fedex";
import { ParcelTrackCourierUnknown } from "./courier/unknown/unknown";
import { ParcelTrackCourierUPS } from "./courier/ups/ups";
import { ParcelTrackCourierUSPS } from "./courier/usps/usps";
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
