export const calculateChecksum = (number: string): string => {
    const numericValue = BigInt(number);
    const remainder = Number(numericValue % 97n);
    const checksum = 97 - remainder;

    return (97 - (checksum === 97 ? 0 : checksum)).toString().padStart(2, '0');
}
