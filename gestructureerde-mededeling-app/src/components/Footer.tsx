import {StackProps, Text, VStack} from '@chakra-ui/react'
import Logo from '../assets/logo.png'
import {useTranslation} from "react-i18next";

export const Footer = (props: StackProps) => {
    const { t } = useTranslation();

    return (
        <VStack as='footer' spacing={4} mt={12} textAlign='center' {...props}>
            <Text fontSize='sm'>
                <div className="footer-container">
                    <span className="footer-text">
                        {t('footer-text')}
                    </span>
                    <img
                        src={Logo}
                        className="footer-logo"
                        alt="Codelab logo"
                    />
                </div>
            </Text>
        </VStack>
    )
}
