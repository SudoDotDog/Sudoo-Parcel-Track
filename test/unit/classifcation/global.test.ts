/**
 * @author WMXPY
 * @namespace ParcelTrack_Classification
 * @description Global
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { COURIER, globalClassification, GlobalClassificationResult } from "../../../src";
import { loadTestData } from "../../mock/load-data";

describe('Given [ClassificationGlobal] helper methods', (): void => {

    const chance: Chance.Chance = new Chance('classification-global');

    it('should be able to find empty', (): void => {

        const data: string = chance.string();

        const result: GlobalClassificationResult = globalClassification(data);

        expect(result).to.be.deep.equal({
            hasMatch: false,
        });
    });

    it('should be able to find tracking - usps-data-1', async (): Promise<void> => {

        const data: string = await loadTestData('usps-data-1');

        const result: GlobalClassificationResult = globalClassification(data);

        expect(result).to.be.deep.equal({
            hasMatch: true,
            matches: [
                {
                    trackingNumber: '9401111202552310710580',
                    courier: COURIER.USPS,
                },
            ],
        });
    });

    it('should be able to find tracking - usps-data-2', async (): Promise<void> => {

        const data: string = await loadTestData('usps-data-2');

        const result: GlobalClassificationResult = globalClassification(data);

        expect(result).to.be.deep.equal({
            hasMatch: true,
            matches: [
                {
                    trackingNumber: '92748901085000573000510008',
                    courier: COURIER.USPS,
                },
            ],
        });
    });
});
