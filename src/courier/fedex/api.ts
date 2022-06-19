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

    public async trackSingle(trackingNumber: string): Promise<string> {

        return await this.trackMultiple([
            trackingNumber,
        ]);
    }

    public async trackMultiple(trackingNumbers: string[]): Promise<string> {

        const data: string = await this._requestForData({

            url: "https://www.fedex.com/trackingCal/track",
            method: "POST",
            body: {
                data: JSON.stringify({
                    TrackPackagesRequest: {
                        trackingInfoList: trackingNumbers,
                    },
                }),
                // spell-checker:disable-next-line
                action: "trackpackages",
            },
        });
        return data;
    }
}
