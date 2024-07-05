import {StackProps, Text, VStack} from '@chakra-ui/react'
import Logo from '../assets/logo.png'

export const Footer = (props: StackProps) => (
    <VStack as='footer' spacing={4} mt={12} textAlign='center' {...props}>
        <Text fontSize='sm' style={{ fontFamily: 'Poppins, sans-serif', color: "#00044F" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <span style={{ marginBottom: 10, fontSize: "1rem" }}>Proudly made by</span>
                <img src={Logo} style={{maxHeight: "20px", maxWidth: "100px"}} alt="Logo"/>
            </div>
        </Text>
    </VStack>
)

export default Footer
