import {Tab, TabList, TabPanels, Tabs} from "@chakra-ui/react";
import {StatementCreateTab} from "./StatementCreateTab.tsx";
import {StatementGenerateTab} from "./StatementGenerateTab.tsx";
import {StatementVerifyTab} from "./StatementVerifyTab.tsx";
import {useTranslation} from "react-i18next";

export const StatementTabs = () => {
    const { t } = useTranslation();

    return (
        <Tabs variant='enclosed' className="statement-tabs-container">
            <TabList>
                <Tab className="statement-tab-title">
                    {t('statement-create-tab-label')}
                </Tab>
                <Tab className="statement-tab-title">
                    {t('statement-generate-tab-label')}
                </Tab>
                <Tab className="statement-tab-title">
                    {t('statement-verify-tab-label')}
                </Tab>
            </TabList>
            <TabPanels>
                <StatementCreateTab />
                <StatementGenerateTab />
                <StatementVerifyTab />
            </TabPanels>
        </Tabs>
    )
}