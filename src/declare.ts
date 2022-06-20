/**
 * @author WMXPY
 * @namespace ParcelTrack
 * @description Declare
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export type ParcelTrackResult = {
};

export interface IParcelTrackCourier {

    getExternalURL(trackingNumber: string): string;

    trackSingle(trackingNumber: string): Promise<ParcelTrackResult>;
}

export enum COURIER {

    USPS = 'USPS',
    UPS = 'UPS',
    FEDEX = 'FEDEX',

    UNKNOWN = 'UNKNOWN',
}

export type GlobalClassificationResult = {

    readonly trackingNumber: string;
    readonly courier: COURIER;
};
