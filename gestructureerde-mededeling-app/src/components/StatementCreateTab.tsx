import {Button, HStack, PinInput, PinInputField, TabPanel} from "@chakra-ui/react";
import {CopyIcon, RepeatIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {calculateChecksum} from "../utils/ChecksumCalculator.tsx";
import {statementTransformer} from "../utils/StatementTransformer.tsx";
import {statementPinInputStyles} from "../styles/StatementPinInputStyles.tsx";
import {generateStatementSegment} from "../utils/StatementSegmentGenerator.tsx";
import {useTranslation} from "react-i18next";
import {useCopyStatementToClipboard} from "../hooks/UseCopyStatementToClipboard.tsx";
import {useResetStatement} from "../hooks/UseResetStatement.tsx";

export const StatementCreateTab = () => {
    const [statement, setStatement] = useState("+++000/0000/00000+++");
    const [statementValue, setStatementValue] = useState("00000000000");
    const [checksum, setChecksum] = useState("00");
    const copyStatementToClipboard = useCopyStatementToClipboard();
    const resetStatement = useResetStatement();
    const { t } = useTranslation();

    const pinInputOnChange = (value: string) => {
        setStatementValue(value);
        setChecksum(calculateChecksum(value.slice(0, -1)));
        setStatement(statementTransformer(value.slice(0, -1)));
    }

    const copyStatementClick = () => {
        copyStatementToClipboard(statement);
    }

    const resetStatementClick = () => {
        setStatementValue("00000000000");
        setChecksum("00");
        setStatement("+++000/0000/00000+++");
        resetStatement();
    }

    return (
        <TabPanel>
            <p>
                {t('create-statement-main-message')}
            </p>
            <HStack className="statement-container">
                <PinInput type='number' size="md" onChange={pinInputOnChange} placeholder="0" defaultValue="00000000000" value={statementValue}>
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
                <Button leftIcon={<RepeatIcon/>} className="statement-reset-button" style={{ border: "#00044F 2px solid" }} variant='outline' onClick={resetStatementClick}>
                    {t('common-statement-reset-button-label')}
                </Button>
                <Button leftIcon={<CopyIcon/>} style={{ background: "#00044F", color: "white" }} variant='solid' onClick={copyStatementClick}>
                    {t('common-statement-copy-button-label')}
                </Button>
            </div>
        </TabPanel>
    )
}