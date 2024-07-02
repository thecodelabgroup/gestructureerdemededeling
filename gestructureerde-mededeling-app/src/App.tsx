import './App.css'
import {
  ChakraProvider, extendTheme,
  HStack,
  PinInput,
  PinInputField,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {StatementCreateTab} from "./components/StatementCreateTab.tsx";
import {StatementLandingText} from "./components/StatementLandingText.tsx";
import {StatementGenerateTab} from "./components/StatementGenerateTab.tsx";

function App() {
  const theme = extendTheme({
    components: {
      Tabs: {
        baseStyle: {
          tab: {
            _selected: {
              color: '#3902BF',
              borderColor: '#3902BF',
            },
          },
        },
      },
      PinInputField: {
        baseStyle: {
            field: {
              color: '#00044F',
              borderColor: '#00044F',
            }
        },
      },
    },
  });


  return (
      <ChakraProvider theme={ theme }>
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
                  <TabPanel>
                    <StatementCreateTab />
                  </TabPanel>
                  <TabPanel>
                    <StatementGenerateTab />
                  </TabPanel>
                  <TabPanel>
                    Hello
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
          <Footer/>
        </>
      </ChakraProvider>
  )
}

export default App;
