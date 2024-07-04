import {Tab, TabList, TabPanels, Tabs} from "@chakra-ui/react";
import {StatementCreateTab} from "./StatementCreateTab.tsx";
import {StatementGenerateTab} from "./StatementGenerateTab.tsx";
import {StatementVerifyTab} from "./StatementVerifyTab.tsx";

export const StatementTabs = () => {
    return (
        <Tabs variant='enclosed' style={{width: "1000px"}}>
            <TabList>
                <Tab><b>Zelf creëren</b></Tab>
                <Tab><b>Automatisch genereren</b></Tab>
                <Tab><b>Mededeling controleren</b></Tab>
            </TabList>
            <TabPanels>
                <StatementCreateTab />
                <StatementGenerateTab />
                <StatementVerifyTab />
            </TabPanels>
        </Tabs>
    )
}