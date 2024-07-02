import {HStack, PinInput, PinInputField} from "@chakra-ui/react";

export const StatementGenerateTab = () => {
    return (
        <>
            <p style={{fontFamily: 'Poppins, sans-serif', color: "#00044F"}}>
                Onderstaande mededeling werd automatisch gegenereerd met een willekeurige cijfercombinatie.
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
                <PinInput type='number' size="md" placeholder="0" defaultValue="00000000000">
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>/</p>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>/</p>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInput type='number' size="md" placeholder="0" isDisabled>
                        <PinInputField/>
                        <PinInputField/>
                    </PinInput>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                    <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                </PinInput>
            </HStack>
        </>
    )
}