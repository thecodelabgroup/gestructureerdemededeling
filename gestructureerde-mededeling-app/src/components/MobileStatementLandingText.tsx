import { Heading, Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const MobileStatementLandingText = () => {
    const { t } = useTranslation();

    return (
        <Box p={4}>
            <Heading as='h1' size='lg' noOfLines={1} style={{ paddingBottom: "15px", color: "#00044F", fontFamily: 'Poppins, sans-serif' }}>
                {t('statement-landing-main-title-label')}
            </Heading>
            <Text style={{ color: "#00044F", fontFamily: 'Poppins, sans-serif' }}>
                Beste gebruiker,
                <br/><br/>
                Bedankt voor het bezoeken van onze website. Helaas is onze tool momenteel nog niet beschikbaar op mobiele apparaten.
                Wij verzoeken u vriendelijk om over te schakelen naar een desktop-apparaat voor de beste gebruikerservaring.
                <br/><br/>
                Dank voor uw begrip.
                <br/><br/>
                Codelab™ 2
            </Text>
        </Box>
    );
};
