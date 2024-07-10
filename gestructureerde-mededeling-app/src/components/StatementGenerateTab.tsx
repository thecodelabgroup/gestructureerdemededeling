import {Button, HStack, PinInput, PinInputField, TabPanel} from "@chakra-ui/react";
import {generateStatementSegment} from "../utils/StatementSegmentGenerator.tsx";
import {statementPinInputStyles} from "../styles/StatementPinInputStyles.tsx";
import {generateRandomStatement} from "../utils/RandomStatementGenerator.tsx";
import {CopyIcon, RepeatIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useCopyStatementToClipboard} from "../hooks/UseCopyStatementToClipboard.tsx";
import {statementTransformer} from "../utils/StatementTransformer.tsx";
import {useStatementGenerated} from "../hooks/UseStatementGenerated.tsx";

export const StatementGenerateTab = () => {
    const [statement, setStatement] = useState(generateRandomStatement());
    const copyStatementToClipboard = useCopyStatementToClipboard();
    const generateNewStatement = useStatementGenerated();
    const { t } = useTranslation();

    function generateStatement() {
        setStatement(generateRandomStatement());
        generateNewStatement();
    }

    const copyStatementClick = () => {
        copyStatementToClipboard(statementTransformer(statement.slice(0, -2)));
    }

    return (
        <TabPanel>
            <p>
                {t('generate-statement-main-message')}
            </p>
            <HStack className="statement-container">
                <PinInput type='number' size="md" placeholder="0" value={statement} isDisabled>
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
                <Button leftIcon={<RepeatIcon/>} className="statement-reset-button" style={{border: "#00044F 2px solid"}} variant='outline' onClick={generateStatement}>
                    {t('generate-statement-generate-button-label')}
                </Button>
                <Button leftIcon={<CopyIcon/>} style={{background: "#00044F", color: "white"}} variant='solid' onClick={copyStatementClick}>
                    {t('common-statement-copy-button-label')}
                </Button>
            </div>
        </TabPanel>
    )
}