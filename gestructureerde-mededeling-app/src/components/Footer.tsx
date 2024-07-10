import {StackProps, Text, VStack} from '@chakra-ui/react'
import Logo from '../assets/logo.png'

export const Footer = (props: StackProps) => (
    <VStack as='footer' spacing={4} mt={12} textAlign='center' {...props}>
        <Text fontSize='sm'>
            <div className="footer-container">
                <span className="footer-text">Proudly made by</span>
                <img src={Logo} className="footer-logo" alt="Codelab logo"/>
            </div>
        </Text>
    </VStack>
)

export default Footer;
