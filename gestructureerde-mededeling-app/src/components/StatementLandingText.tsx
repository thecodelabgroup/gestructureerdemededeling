import {Heading} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

export const StatementLandingText = () => {
    const {t} = useTranslation();

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <Heading as='h1' size='2xl' noOfLines={1} style={{paddingBottom: "30px", color: "#00044F", fontFamily: 'Poppins, sans-serif'}}>
                {t('statement-landing-main-title-label')}
            </Heading>
            <p style={{width: "1000px", color: "#00044F", fontFamily: 'Poppins, sans-serif'}}>
                {t('statement-landing-main-text-label')}
            </p>
        </div>
    )
}

