import './App.css'
import {ChakraProvider, Heading, HStack, PinInput, PinInputField} from '@chakra-ui/react'
import Header from "./components/Header.tsx";

function App() {

  return (
      <ChakraProvider>
        <>
          <Header style={{ boxShadow: "var(--chakra-shadows-sm)"}}/>
          <div style={{ display: "flex", alignItems: "center", paddingTop: '100px', flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "1400px" }}>
              <Heading>Gestructureerde Mededeling</Heading>
              <p>sfsafa sfafa sf asfas</p>
            </div>
            <br/>
            <HStack>
              <PinInput type='number' size="lg">
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
                <PinInputField/>
                <PinInputField/>
                <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
                <p style={{fontSize: '28px', fontWeight: '300'}}>+</p>
              </PinInput>
            </HStack>
          </div>
        </>
      </ChakraProvider>
  )
}

export default App
