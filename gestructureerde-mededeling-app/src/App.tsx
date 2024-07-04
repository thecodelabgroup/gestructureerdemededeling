import {
  ChakraProvider,
  Tab,
  TabList,
  TabPanels,
  Tabs
} from '@chakra-ui/react'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {StatementCreateTab} from "./components/StatementCreateTab.tsx";
import {StatementLandingText} from "./components/StatementLandingText.tsx";
import {StatementGenerateTab} from "./components/StatementGenerateTab.tsx";
import './i18n';
import {StatementVerifyTab} from "./components/StatementVerifyTab.tsx";
import {customChakraTheme} from "./styles/CustomChakraTheme.tsx";

function App() {
  return (
      <ChakraProvider theme={ customChakraTheme }>
        <>
          <Header style={{ boxShadow: "var(--chakra-shadows-sm)"}}/>
          <div style={{ display: "flex", alignItems: "center", paddingTop: '50px', flexDirection: "column" }}>
            <StatementLandingText />
            <br/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", fontFamily: 'Poppins, sans-serif', color: "#00044F" }}>
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
            </div>
          </div>
          <Footer style={{ position: "fixed", bottom: "50px", width: "100%" }}/>
        </>
      </ChakraProvider>
  )
}

export default App;
