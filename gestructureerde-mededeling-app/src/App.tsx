import './App.css'
import {
  ChakraProvider, extendTheme,
  Heading,
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
import {useState} from "react";
import Footer from "./components/Footer.tsx";
import { useToast } from '@chakra-ui/react'
import {CreateStatementTab} from "./components/CreateStatementTab.tsx";

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
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Heading as='h1' size='2xl' noOfLines={1} style={{ paddingBottom: "30px", color: "#00044F", fontFamily: 'Poppins, sans-serif' }}>Gestructureerde Mededeling.</Heading>
              <p style={{ width: "1000px", color: "#00044F", fontFamily: 'Poppins, sans-serif' }}>
                Een overschrijving met gestructureerde mededeling wordt gebruikt voor de automatische verwerking van betalingen.
                De mededeling bestaat uit drie groepen cijfers, gescheiden door schuine strepen. De eerste groep heeft drie cijfers, de tweede vier, en de derde vijf.
                De mededeling begint en eindigt met drie plustekens (+++).
                <br/><br/>
                Met onze tool kun je eenvoudig je gestructureerde mededelingen creëren, laten genereren en controleren.
              </p>
            </div>
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
                    <CreateStatementTab />
                  </TabPanel>
                  <TabPanel>
                    <p style={{fontFamily: 'Poppins, sans-serif', color: "#00044F"}}>
                      Onderstaande mededeling werd automatisch gegenereerd met een willekeurige cijfercombinatie.
                    </p>
                    <HStack style={{ marginTop: "20px", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "var(--chakra-radii-md)", background: "#f8c9ba"}}>
                    <PinInput type='number' size="md"  placeholder="0" defaultValue="00000000000">
                      <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                      <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                      <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                      <PinInputField/>
                      <PinInputField/>
                      <PinInputField/>
                      <p style={{fontSize: '28px', fontWeight: '300'}}>/</p>
                      <PinInputField/>
                      <PinInputField/>
                      <PinInputField/>
                      <PinInputField/>
                      <p style={{fontSize: '28px', fontWeight: '300'}}>/</p>
                      <PinInputField/>
                      <PinInputField/>
                      <PinInputField/>
                      <PinInput type='number' size="md" placeholder="0" isDisabled >
                        <PinInputField/>
                        <PinInputField/>
                      </PinInput>
                      <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                      <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                      <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                    </PinInput>
                  </HStack>
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
