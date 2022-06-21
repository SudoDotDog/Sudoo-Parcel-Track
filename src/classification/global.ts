/**
 * @author WMXPY
 * @namespace ParcelTrack_Classification
 * @description Global
 */

import { COURIER, GlobalClassificationElement, GlobalClassificationResult } from "../declare";
import { createGlobalClassificationRegExp } from "./classification";
import { localClassification } from "./local";

export const globalClassification = (data: string): GlobalClassificationResult => {

    const regExp: RegExp = createGlobalClassificationRegExp();
    let temp;

    let limit: number = 10;

    const result: string[] = [];

    while (
        (temp = regExp.exec(data)) !== null
        && limit-- > 0
    ) {

        const value: string = temp[0];
        const trimmed: string = value.substring(1, value.length - 1);
        result.push(trimmed);
    }

    const mappedResult: GlobalClassificationElement[] = result.map((value: string): GlobalClassificationElement => {

        const courier: COURIER = localClassification(value);

        return {
            trackingNumber: value,
            courier,
        };
    });

    if (mappedResult.length === 0) {
        return {
            hasMatch: false,
        };
    }

    return {
        hasMatch: true,
        matches: mappedResult,
    };
};
