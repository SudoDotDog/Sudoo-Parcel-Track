/**
 * @author WMXPY
 * @namespace ParcelTrack_Util
 * @description Classification
 */

export const fixGlobalClassificationRegExp = (pattern: string[]): RegExp => {
    return new RegExp(`(${pattern
        .map((each: string): string => {
            return `(\\s|,)${each}(\\s|,)`;
        }).join("|")})`, "g");
};

export const fixLocalClassificationRegExp = (pattern: string[]): RegExp => {
    return new RegExp(`(${pattern
        .map((each: string): string => {
            return `^${each}$`;
        })
        .join("|")})`);
};
