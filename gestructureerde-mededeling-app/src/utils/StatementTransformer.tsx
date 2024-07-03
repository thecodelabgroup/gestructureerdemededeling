import {calculateChecksum} from "./ChecksumCalculator.tsx";

export const statementTransformer = (statement: string) => {
    const statementBuilder = [];

    statementBuilder.push('+++');
    statementBuilder.push(statement.slice(0, 3));
    statementBuilder.push('/');
    statementBuilder.push(statement.slice(3, 7));
    statementBuilder.push('/');
    statementBuilder.push(statement.slice(7));
    statementBuilder.push(calculateChecksum(statement));
    statementBuilder.push('+++');

    return statementBuilder.join('');
}