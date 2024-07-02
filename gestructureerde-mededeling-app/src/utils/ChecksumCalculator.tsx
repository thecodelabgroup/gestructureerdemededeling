export const calculateChecksum = (number: string): string => {
    const numericValue = number.length > 9 ? BigInt(number.slice(0, -1)) : BigInt(number);
    const remainder = Number(numericValue % 97n);
    const checksum = 97 - remainder;

    return (97 - (checksum === 97 ? 0 : checksum)).toString().padStart(2, '0');
}
