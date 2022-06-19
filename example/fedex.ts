/**
 * @author WMXPY
 * @namespace Example
 * @description Fedex
 */

import { createAxiosDriver } from "@barktler/driver-axios";
import { createDebugLogMixin } from "@barktler/mixin-debug-log";
import { FedexParcelTrackAPI } from "../src/courier/fedex/api";

(async () => {

    try {

        const api: FedexParcelTrackAPI = FedexParcelTrackAPI.create();

        api.useDriver(createAxiosDriver());
        api.useMixin(createDebugLogMixin({
            isDevelopment: () => true,
        }));

        const trackingNumber: string = await api.trackSingle("xxxxxxxxxx");

        console.log(trackingNumber);
        console.log("SUCCEED");
    } catch (error) {
        console.log("ERROR");
    }
})();
