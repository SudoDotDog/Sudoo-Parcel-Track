/**
 * @author WMXPY
 * @namespace ParcelTrack
 * @description Parcel Track
 */

import { globalClassification } from "./classification/global";
import { localClassification } from "./classification/local";
import { ParcelTrackCourierFedex } from "./courier/fedex/parcel-track";
import { ParcelTrackCourierUnknown } from "./courier/unknown/parcel-track";
import { ParcelTrackCourierUPS } from "./courier/ups/parcel-track";
import { ParcelTrackCourierUSPS } from "./courier/usps/parcel-track";
import { COURIER, GlobalClassificationResult, IParcelTrackCourier } from "./declare";

export class ParcelTrack {

    public static classify(trackingNumber: string): COURIER {

        const courier: COURIER = localClassification(trackingNumber);
        return courier;
    }

    public static globalClassify(data: string): GlobalClassificationResult {

        const result: GlobalClassificationResult = globalClassification(data);
        return result;
    }

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
