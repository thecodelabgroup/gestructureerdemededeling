import {Heading} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

export const StatementLandingText = () => {
    const {t} = useTranslation();

    return (
        <div className="statement-landing-text-container">
            <Heading as='h1' size='2xl' noOfLines={1} className="statement-landing-text-header" fontFamily="Poppins, sans-serif">
                {t('statement-landing-main-title-label')}
            </Heading>
            <p className="statement-landing-text-subheader">
                {t('statement-landing-main-text-label')}
            </p>
        </div>
    )
}

