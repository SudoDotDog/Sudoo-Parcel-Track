/**
 * @author WMXPY
 * @namespace ParcelTrack_Classification
 * @description Tracking
 */

const fixGlobalExp = (pattern: string[]): RegExp => {
    return new RegExp(`(${pattern
        .map((each: string): string => {
            return `(\\s|,)${each}(\\s|,)`;
        }).join("|")})`, "g");
};

const fixLocalExp = (pattern: string[]): RegExp => {
    return new RegExp(`(${pattern
        .map((each: string): string => {
            return `^${each}$`;
        })
        .join("|")})`);
};

const uspsPattern: string[] = [
    "(94|93|92|94|95)[0-9]{20}",
    "(94|93|92|94|95)[0-9]{22}",
    "(94|93|92|94|95)[0-9]{24}",
    "(70|14|23|03)[0-9]{14}",
    "(M0|82)[0-9]{8}",
    "([A-Z]{2})[0-9]{9}([A-Z]{2})",
];

export const uspsRegExp: RegExp = fixLocalExp(uspsPattern);

const upsPattern: string[] = [
    "(1Z)[0-9A-Z]{16}",
    "(T)+[0-9A-Z]{10}",
    "[0-9]{9}",
    "[0-9]{26}",
];

export const upsRegExp: RegExp = fixLocalExp(upsPattern);

const fedexPattern: string[] = [
    "[0-9]{20}",
    "[0-9]{15}",
    "[0-9]{12}",
    "[0-9]{22}",
];

export const fedexRegExp: RegExp = fixLocalExp(fedexPattern);

export const createGlobalTrackingRegExp = (): RegExp => {
    return fixGlobalExp([
        ...upsPattern,
        ...upsPattern,
        ...fedexPattern,
    ]);
};
