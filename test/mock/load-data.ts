/**
 * @author WMXPY
 * @namespace Mock
 * @description Load Data
 * @override Mock
 */

import { readTextFile } from "@sudoo/io";
import * as Path from "path";

export const loadTestData = async (fileName: string): Promise<string> => {

    const dataPath: string = Path.join(__dirname, '..', 'data');
    const fileContent: string = await readTextFile(Path.join(dataPath, `${fileName}.txt`));

    return fileContent;
};
