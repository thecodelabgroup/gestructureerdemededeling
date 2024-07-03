import {Button, HStack, PinInput, PinInputField, useToast} from "@chakra-ui/react";
import {CopyIcon, RepeatIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {calculateChecksum} from "../utils/ChecksumCalculator.tsx";
import {statementTransformer} from "../utils/StatementTransformer.tsx";

const customPinInputFieldStyles = {
    border: '2px solid #00044F',
    _hover: {
        borderColor: '#3902BF',
    },
    _focus: {
        borderColor: '#3902BF',
        boxShadow: '0 0 0 1px #3902BF',
    },
    _active: {
        borderColor: '#3902BF',
    },
};

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
                toast({
                    title: 'Mededeling gekopieerd.',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            })
            .catch(() => {
                toast({
                    title: 'Error.',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            });
    }

    return (
        <>
            <p style={{fontFamily: 'Poppins, sans-serif', color: "#00044F"}}>
                Start met het typen van een getal van maximaal 10 cijfers, de laatste twee cijfers (het controlegetal) worden automatisch berekend.
            </p>
            <HStack style={{
                marginTop: "20px",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--chakra-radii-md)",
                background: "#f8c9ba"
            }}>
                <PinInput type='number' size="md" onChange={pinInputOnChange} placeholder="0"
                          defaultValue="00000000000">
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                    <PinInputField sx={customPinInputFieldStyles}/>
                    <PinInputField sx={customPinInputFieldStyles}/>
                    <PinInputField sx={customPinInputFieldStyles}/>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>/</p>
                    <PinInputField sx={customPinInputFieldStyles}/>
                    <PinInputField sx={customPinInputFieldStyles}/>
                    <PinInputField sx={customPinInputFieldStyles}/>
                    <PinInputField sx={customPinInputFieldStyles}/>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>/</p>
                    <PinInputField sx={customPinInputFieldStyles}/>
                    <PinInputField sx={customPinInputFieldStyles}/>
                    <PinInputField sx={customPinInputFieldStyles}/>
                    <PinInput type='number' size="md" placeholder="0" isDisabled value={checksum}>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <PinInputField sx={customPinInputFieldStyles}/>
                    </PinInput>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
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