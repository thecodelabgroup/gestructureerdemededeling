import './App.css'
import {
  Button,
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
import {CopyIcon, RepeatIcon} from "@chakra-ui/icons";
import {useState} from "react";
import Footer from "./components/Footer.tsx";
import { useToast } from '@chakra-ui/react'

function App() {
  const [checksum, setChecksum] = useState("00");
  const [mededeling, setMededeling] = useState("+++000/0000/00000+++");

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

  const customPinInputFieldStyles = {
    border: '2px solid #00044F',
    _hover: {
      borderColor: '#3902BF',
    },
    _focus: {
      borderColor: '#3902BF',
      boxShadow: '0 0 0 1px #3902BF',
    },
    _active: {
      borderColor: '#3902BF',
    },
  };

  const toast = useToast();

  function calculateChecksum(number: string): string {
    const numericValue = number.length > 9 ? BigInt(number.slice(0, -1)) : BigInt(number);
    const remainder = Number(numericValue % 97n);
    const checksum = 97 - remainder;

    return (97 - (checksum === 97 ? 0 : checksum)).toString().padStart(2, '0');
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(mededeling)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch(err => {
          console.error("Failed to copy text: ", err);
        });

    toast({
      title: 'Mededeling gekopieerd.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  const handleResetClick = () => {
    window.location.reload();
  };


  const pinInputOnChange = (value: string) => {
    setChecksum(calculateChecksum(value));
    setMededeling(`+++${value.slice(0, -1).slice(0, 3)}/${value.slice(0, -1).slice(3, 7)}/${value.slice(0, -1).slice(7)}${checksum}+++`);
  }

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
                    <p style={{ fontFamily: 'Poppins, sans-serif', color: "#00044F" }}>
                      Start met het typen van een getal van maximaal 10 cijfers, de laatste twee cijfers (het controlegetal) worden automatisch berekend.
                    </p>
                    <HStack style={{ marginTop: "20px", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "var(--chakra-radii-md)", background: "#f8c9ba"}}>
                      <PinInput type='number' size="md" onChange={pinInputOnChange} placeholder="0" defaultValue="00000000000">
                        <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                        <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                        <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <p style={{fontSize: '28px', fontWeight: '300'}}>/</p>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <p style={{fontSize: '28px', fontWeight: '300'}}>/</p>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <PinInput type='number' size="md" placeholder="0" isDisabled value={checksum}>
                          <PinInputField sx={customPinInputFieldStyles}/>
                          <PinInputField sx={customPinInputFieldStyles}/>
                        </PinInput>
                        <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                        <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                        <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                      </PinInput>
                    </HStack>
                    <br/>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <Button leftIcon={<RepeatIcon/>} style={{border: "#00044F 2px solid", color: "#00044F", marginRight: "15px", fontFamily: 'Poppins, sans-serif' }} variant='outline' onClick={handleResetClick}>
                        Reset mededeling
                      </Button>
                      <Button leftIcon={<CopyIcon/>} style={{background: "#00044F", color: "white", fontFamily: 'Poppins, sans-serif'}} variant='solid' onClick={handleCopyClick}>
                        Mededeling kopiëren
                      </Button>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p style={{fontFamily: 'Poppins, sans-serif', color: "#00044F"}}>
                      Onderstaande mededeling werd automatisch gegenereerd met een willekeurige cijfercombinatie.
                    </p>
                    <HStack style={{ marginTop: "20px", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "var(--chakra-radii-md)", background: "#f8c9ba"}}>
                    <PinInput type='number' size="md" onChange={pinInputOnChange} placeholder="0" defaultValue="00000000000">
                      <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                      <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                      <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                      <PinInputField sx={customPinInputFieldStyles}/>
                      <PinInputField sx={customPinInputFieldStyles}/>
                      <PinInputField sx={customPinInputFieldStyles}/>
                      <p style={{fontSize: '28px', fontWeight: '300'}}>/</p>
                      <PinInputField sx={customPinInputFieldStyles}/>
                      <PinInputField sx={customPinInputFieldStyles}/>
                      <PinInputField sx={customPinInputFieldStyles}/>
                      <PinInputField sx={customPinInputFieldStyles}/>
                      <p style={{fontSize: '28px', fontWeight: '300'}}>/</p>
                      <PinInputField sx={customPinInputFieldStyles}/>
                      <PinInputField sx={customPinInputFieldStyles}/>
                      <PinInputField sx={customPinInputFieldStyles}/>
                      <PinInput type='number' size="md" placeholder="0" isDisabled value={checksum}>
                        <PinInputField sx={customPinInputFieldStyles}/>
                        <PinInputField sx={customPinInputFieldStyles}/>
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
