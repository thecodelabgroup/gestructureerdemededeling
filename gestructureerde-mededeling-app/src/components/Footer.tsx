import {StackProps, Text, VStack} from '@chakra-ui/react'
import Logo from '../assets/logo.png'

export const Footer = (props: StackProps) => (
    <VStack as='footer' spacing={4} mt={12} textAlign='center' {...props}>
        <Text fontSize='sm'>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <span style={{ marginBottom: 5 }}>Proudly made by</span>
                <img src={Logo} style={{maxHeight: "20px", maxWidth: "80px"}} alt="Codelab logo"/>
            </div>
        </Text>
    </VStack>
)

export default Footer
