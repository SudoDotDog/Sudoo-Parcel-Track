/**
 * @author WMXPY
 * @namespace ParcelTrack_Classification
 * @description Global
 */

import { COURIER, GlobalClassificationResult } from "../declare";
import { fixLocalClassificationRegExp } from "../util/classification";
import { courierClassificationList, createGlobalClassificationRegExp } from "./classification";

export const globalClassification = (data: string): GlobalClassificationResult[] => {

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

    const mappedResult: GlobalClassificationResult[] = result.map((value: string): GlobalClassificationResult => {

        for (const courier of courierClassificationList) {

            const regExp: RegExp = fixLocalClassificationRegExp(courier.pattern);

            if (regExp.test(value)) {

                return {
                    trackingNumber: value,
                    carrier: courier.courier,
                };
            }
        }

        return {
            trackingNumber: value,
            carrier: COURIER.UNKNOWN,
        };
    });

    return mappedResult;
};
