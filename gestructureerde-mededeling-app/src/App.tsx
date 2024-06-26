import './App.css'
import {
  Button,
  ChakraProvider, extendTheme,
  Heading,
  HStack, Kbd,
  PinInput,
  PinInputField,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react'
import Header from "./components/Header.tsx";
import {CopyIcon} from "@chakra-ui/icons";

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
      PinInput: {
        baseStyle: {
          field: {
            _focus: {
              color: '#3902BF',
              borderColor: 'red',
              boxShadow: '0 0 0 1px red',
            },
          },
        },
      },
    },
  });

  const pinInputOnChange = (value: string) => {
    console.log(value);
  }

  return (
      <ChakraProvider theme={ theme }>
        <>
          <Header style={{ boxShadow: "var(--chakra-shadows-sm)"}}/>
          <div style={{ display: "flex", alignItems: "center", paddingTop: '100px', flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Heading as='h1' size='2xl' noOfLines={1} style={{ paddingBottom: "30px", color: "#00044F", fontFamily: 'Poppins, sans-serif' }}>Gestructureerde Mededeling.</Heading>
              <p style={{ width: "1000px", color: "#00044F", fontFamily: 'Poppins, sans-serif' }}>
                Een overschrijving met gestructureerde mededeling, vaak afgekort als OGM, is een term uit het Belgische financiële verkeer.
                Deze mededeling wordt gebruikt voor de automatische verwerking van betalingen.
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
                  <Tab style={{ color: "#00044F" }}><b>Zelf creëren</b></Tab>
                  <Tab><b>Automatisch genereren</b></Tab>
                  <Tab><b>Mededeling controleren</b></Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p style={{ fontFamily: 'Poppins, sans-serif', color: "#00044F" }}>
                      Start met het typen van een getal van maximaal 10 cijfers, de laatste twee cijfers (het controlegetal) wordt automatisch berekend.
                    </p>
                    <HStack style={{ marginTop: "20px", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", border: "solid 1px black", borderRadius: "5px", background: "#f8c9ba"}}>
                      <PinInput type='number' size="lg" onChange={pinInputOnChange} placeholder="0">
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
                        <PinInput type='number' size="lg" placeholder="0" isDisabled defaultValue="00">
                          <PinInputField/>
                          <PinInputField/>
                        </PinInput>
                        <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                        <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                        <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                      </PinInput>
                    </HStack>
                    <br/>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <Button leftIcon={<CopyIcon/>} style={{background: "#00044F", color: "white"}} variant='solid'>
                        Mededeling kopiëren
                      </Button>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
            <br/>
            <p>Copyright - Codelab Group</p>
          </div>
        </>
      </ChakraProvider>
  )
}

export default App;
