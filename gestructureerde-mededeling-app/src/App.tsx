import {ChakraProvider} from '@chakra-ui/react'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {StatementLandingText} from "./components/StatementLandingText.tsx";
import './i18n';
import {customChakraTheme} from "./styles/CustomChakraTheme.tsx";
import {StatementTabs} from "./components/StatementTabs.tsx";

function App() {
  return (
      <ChakraProvider theme={ customChakraTheme }>
        <>
          <Header style={{ boxShadow: "var(--chakra-shadows-sm)"}}/>
          <div style={{ display: "flex", alignItems: "center", paddingTop: '50px', flexDirection: "column" }}>
            <StatementLandingText />
            <br/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", fontFamily: 'Poppins, sans-serif', color: "#00044F" }}>
              <StatementTabs />
            </div>
          </div>
          <Footer style={{ position: "fixed", bottom: "50px", width: "100%" }}/>
        </>
      </ChakraProvider>
  )
}

export default App;
