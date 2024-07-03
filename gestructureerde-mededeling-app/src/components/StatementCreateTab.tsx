import {Button, HStack, PinInput, PinInputField, useToast} from "@chakra-ui/react";
import {CopyIcon, RepeatIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {calculateChecksum} from "../utils/ChecksumCalculator.tsx";
import {statementTransformer} from "../utils/StatementTransformer.tsx";
import {statementPinInputStyles} from "../styles/StatementPinInputStyles.tsx";
import {generateStatementSegment} from "../utils/StatementSegmentGenerator.tsx";
import {useTranslation} from "react-i18next";

export const StatementCreateTab = () => {
    const [mededeling, setMededeling] = useState("+++000/0000/00000+++");
    const [checksum, setChecksum] = useState("00");
    const { t } = useTranslation();
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

    return (
        <>
            <p>
                {t('statement-create.main-message')}
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
                    {generateStatementSegment(3, 'p', { className: 'statement-pin', children: '+' })}
                </PinInput>
            </HStack>
            <br/>
            <div className="statement-button-container">
                //TODO: fix button styles
                <Button leftIcon={<RepeatIcon/>} className="statement-reset-button" variant='outline'>
                    Reset mededeling
                </Button>
                <Button leftIcon={<CopyIcon/>} style={{background: "#00044F", color: "white"}} variant='solid' onClick={handleCopyClick}>
                    Mededeling kopiëren
                </Button>
            </div>
        </>
    )
}