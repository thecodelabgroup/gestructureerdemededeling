import {HStack, PinInput, PinInputField, TabPanel} from "@chakra-ui/react";
import {generateStatementSegment} from "../utils/StatementSegmentGenerator.tsx";
import {statementPinInputStyles} from "../styles/StatementPinInputStyles.tsx";
import {statementTransformer} from "../utils/StatementTransformer.tsx";
import {useState} from "react";

export const StatementVerifyTab = () => {
    const [statementBackground, setStatementBackground] = useState("#f8c9ba");

    const pinInputOnChange = (value: string) => {
        const trimmedStatement = value.slice(0, -1);
        console.log("Value: " + trimmedStatement);
        console.log("Length: " + trimmedStatement.length);

        const validStatement = statementTransformer(trimmedStatement.slice(0, -2));
        console.log("Valid statement: " + validStatement);
        console.log("Valid statement checksum: " + validStatement.slice(-5, -3));
        console.log(trimmedStatement.slice(-2));

        if (validStatement.slice(-5, -3) === trimmedStatement.slice(-2)) {
            setStatementBackground("#b1f5b1");
        } else {
            setStatementBackground("#f8c9ba");
        }
    }

    return (
        <TabPanel>
            <p>
                Start met het typen van uw gestructureerde mededeling. Onze tool controleert automatisch de geldigheid, een groene achtergrond geeft aan dat de invoer geldig is.
            </p>
            <HStack className="statement-container" style={{ backgroundColor: statementBackground }}>
                <PinInput type='number' size="md" onChange={pinInputOnChange} placeholder="0" defaultValue="0000000000000">
                    {generateStatementSegment(3, 'p', { className: 'statement-pin', children: '+' })}
                    {generateStatementSegment(3, PinInputField, { sx: statementPinInputStyles })}
                    {generateStatementSegment(1, 'p', { className: 'statement-pin', children: '/' })}
                    {generateStatementSegment(4, PinInputField, { sx: statementPinInputStyles })}
                    {generateStatementSegment(1, 'p', { className: 'statement-pin', children: '/' })}
                    {generateStatementSegment(5, PinInputField, { sx: statementPinInputStyles })}
                    {generateStatementSegment(3, 'p', { className: 'statement-pin', children: '+' })}
                </PinInput>
            </HStack>
        </TabPanel>
    )
}
