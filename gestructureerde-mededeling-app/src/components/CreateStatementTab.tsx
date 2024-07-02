import {Button, HStack, PinInput, PinInputField} from "@chakra-ui/react";
import {CopyIcon, RepeatIcon} from "@chakra-ui/icons";

export const CreateStatementTab = () => {
    return (
        <>
            <p style={{fontFamily: 'Poppins, sans-serif', color: "#00044F"}}>
                Start met het typen van een getal van maximaal 10 cijfers, de laatste twee cijfers (het controlegetal)
                worden automatisch berekend.
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
                }} variant='outline' onClick={handleResetClick}>
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