import {Button, HStack, PinInput, PinInputField} from "@chakra-ui/react";
import {generateStatementSegment} from "../utils/StatementSegmentGenerator.tsx";
import {statementPinInputStyles} from "../styles/StatementPinInputStyles.tsx";
import {generateRandomStatement} from "../utils/RandomStatementGenerator.tsx";
import {CopyIcon} from "@chakra-ui/icons";
import {useState} from "react";

export const StatementGenerateTab = () => {
    const [statement, setStatement] = useState(generateRandomStatement());

    function hello() {
        setStatement(generateRandomStatement());
        console.log(statement);
    }

    return (
        <>
            <p style={{fontFamily: 'Poppins, sans-serif', color: "#00044F"}}>
                Onderstaande mededeling werd automatisch gegenereerd met een willekeurige cijfercombinatie.
            </p>
            <HStack className="statement-container">
                <PinInput type='number' size="md" placeholder="0" value={statement}>
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
                <Button leftIcon={<CopyIcon/>} style={{background: "#00044F", color: "white"}} variant='solid'
                        onClick={hello}>
                    Generate new statement
                </Button>
            </div>
        </>
    )
}