import {Button, HStack, PinInput, PinInputField, useToast} from "@chakra-ui/react";
import {CopyIcon, RepeatIcon} from "@chakra-ui/icons";
import {ElementType, useState} from "react";
import {calculateChecksum} from "../utils/ChecksumCalculator.tsx";
import {statementTransformer} from "../utils/StatementTransformer.tsx";
import {statementPinInputStyles} from "../styles/StatementPinInputStyles.tsx";

export const StatementCreateTab = () => {
    const [mededeling, setMededeling] = useState("+++000/0000/00000+++");
    const [checksum, setChecksum] = useState("00");
    const toast = useToast();

    const pinInputOnChange = (value: string) => {
        setChecksum(calculateChecksum(value.slice(0, -1)));
        setMededeling(statementTransformer(value.slice(0, -1)));
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(mededeling)
            .then(() => {
                toast({ title: 'Mededeling gekopieerd.', status: 'success', duration: 9000, isClosable: true })
            })
            .catch(() => {
                toast({ title: 'Error.', status: 'error', duration: 9000, isClosable: true })
            });
    }

    const generateStatementSegment = (count: number, Element: ElementType, props = {}) => (
        Array.from({ length: count }).map((_, index) => <Element key={index} {...props} />)
    );

    return (
        <>
            <p>
                Start met het typen van een getal van maximaal 10 cijfers, de laatste twee cijfers (het controlegetal) worden automatisch berekend.
            </p>
            <HStack className="statement-container">
                <PinInput type='number' size="md" onChange={pinInputOnChange} placeholder="0" defaultValue="00000000000">
                    {generateStatementSegment(3, 'p', { className: 'statement-pin', children: '+' })}
                    {generateStatementSegment(3, PinInputField, { sx: statementPinInputStyles })}
                    {generateStatementSegment(1, 'p', { className: 'statement-pin', children: '/' })}
                    {generateStatementSegment(4, PinInputField, { sx: statementPinInputStyles })}
                    {generateStatementSegment(1, 'p', { className: 'statement-pin', children: '/' })}
                    {generateStatementSegment(3, PinInputField, { sx: statementPinInputStyles })}
                    <PinInput type='number' size="md" placeholder="0" isDisabled value={checksum}>
                        {generateStatementSegment(2, PinInputField, { sx: statementPinInputStyles })}
                    </PinInput>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <p className="statement-pin" key={index}>+</p>
                    ))}
                </PinInput>
            </HStack>
            <br/>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <Button leftIcon={<RepeatIcon/>} style={{
                    border: "#00044F 2px solid",
                    color: "#00044F",
                    marginRight: "15px",
                    fontFamily: 'Poppins, sans-serif'
                }} variant='outline'>
                    Reset mededeling
                </Button>
                <Button leftIcon={<CopyIcon/>}
                        style={{background: "#00044F", color: "white", fontFamily: 'Poppins, sans-serif'}}
                        variant='solid' onClick={handleCopyClick}>
                    Mededeling kopiëren
                </Button>
            </div>
        </>
    )
}