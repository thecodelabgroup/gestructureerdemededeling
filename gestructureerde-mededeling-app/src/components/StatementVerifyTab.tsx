import {Button, HStack, PinInput, PinInputField, TabPanel} from "@chakra-ui/react";
import {generateStatementSegment} from "../utils/StatementSegmentGenerator.tsx";
import {statementPinInputStyles} from "../styles/StatementPinInputStyles.tsx";
import {statementTransformer} from "../utils/StatementTransformer.tsx";
import {useState} from "react";
import {RepeatIcon} from "@chakra-ui/icons";
import {useTranslation} from "react-i18next";

export const StatementVerifyTab = () => {
    const [statementBackground, setStatementBackground] = useState("#f8c9ba");
    const { t } = useTranslation();

    const pinInputOnChange = (value: string) => {
        const trimmedStatement = value.slice(0, -1);
        const validStatement = statementTransformer(trimmedStatement.slice(0, -2));

        if (validStatement.slice(-5, -3) === trimmedStatement.slice(-2) && trimmedStatement.length === 12) {
            setStatementBackground("#b1f5b1");
        } else {
            setStatementBackground("#f8c9ba");
        }
    }

    return (
        <TabPanel>
            <p>
                {t('verify-statement-main-message')}
            </p>
            <HStack className="statement-container" style={{backgroundColor: statementBackground}}>
                <PinInput type='number' size="md" onChange={pinInputOnChange} placeholder="0" defaultValue="0000000000000">
                    {generateStatementSegment(3, 'p', {className: 'statement-pin', children: '+'})}
                    {generateStatementSegment(3, PinInputField, {sx: statementPinInputStyles})}
                    {generateStatementSegment(1, 'p', {className: 'statement-pin', children: '/'})}
                    {generateStatementSegment(4, PinInputField, {sx: statementPinInputStyles})}
                    {generateStatementSegment(1, 'p', {className: 'statement-pin', children: '/'})}
                    {generateStatementSegment(5, PinInputField, {sx: statementPinInputStyles})}
                    {generateStatementSegment(3, 'p', {className: 'statement-pin', children: '+'})}
                </PinInput>
            </HStack>
            <br/>
            <div className="statement-button-container">
                <Button leftIcon={<RepeatIcon/>} className="statement-verify-reset-button"
                        style={{border: "#00044F 2px solid"}} variant='outline'>
                    {t('common-statement-reset-button-label')}
                </Button>
            </div>
        </TabPanel>
    )
}
