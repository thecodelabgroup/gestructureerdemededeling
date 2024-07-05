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
          <Header style={{ boxShadow: "var(--chakra-shadows-sm)"}} />
          <div className="main-statement-landing-container">
            <StatementLandingText />
            <br/>
            <div className="main-statement-tabs-container">
              <StatementTabs />
            </div>
          </div>
          <Footer className="footer" />
        </>
      </ChakraProvider>
  )
}

export default App;
