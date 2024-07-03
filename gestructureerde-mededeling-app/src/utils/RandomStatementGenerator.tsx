import {calculateChecksum} from "./ChecksumCalculator.tsx";

export const generateRandomStatement = () => {
    const randomDigits = () => Math.floor(Math.random() * 10000000000).toString().padEnd(10, '0');
    const digits = randomDigits();
    const checksum = calculateChecksum(digits);

    return digits + checksum.toString();
};
