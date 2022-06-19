/**
 * @author WMXPY
 * @namespace ParcelTrack_Courier_Fedex
 * @description API
 */

import { Barktler } from "@barktler/core";

export class FedexParcelTrackAPI extends Barktler {

    public static create(): FedexParcelTrackAPI {

        return new FedexParcelTrackAPI();
    }
}
