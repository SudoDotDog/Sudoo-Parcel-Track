/**
 * @author WMXPY
 * @namespace ParcelTrack
 * @description Declare
 */

export type ParcelTrackResult = {
};

export interface IParcelTrackCourier {

    getExternalURL(trackingNumber: string): string;

    trackSingle(trackingNumber: string): Promise<ParcelTrackResult>;
}

export enum CARRIER {

    USPS = 'USPS',
    UPS = 'UPS',
    FEDEX = 'FEDEX',

    UNKNOWN = 'UNKNOWN',
}
