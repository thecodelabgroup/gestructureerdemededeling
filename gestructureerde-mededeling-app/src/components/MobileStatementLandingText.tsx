import {Box, Heading, Text} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

export const MobileStatementLandingText = () => {
    const { t } = useTranslation();

    return (
        <Box p={4}>
            <Heading as='h1' size='lg' noOfLines={1}>
                {t('statement-landing-main-title-label')}
            </Heading>
            <Text>
                {t('mobile-landing-text-part-one')}
                <br/><br/>
                {t('mobile-landing-text-part-two')}
                <br/><br/>
                {t('mobile-landing-text-part-three')}
            </Text>
        </Box>
    )
}
