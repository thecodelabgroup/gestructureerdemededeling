import './App.css'
import {ChakraProvider, HStack, PinInput, PinInputField} from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <>
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
      </>
    </ChakraProvider>
  )
}

export default App

