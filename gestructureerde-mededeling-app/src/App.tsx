import {Box, ChakraProvider, useMediaQuery} from '@chakra-ui/react'
import Header from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {StatementLandingText} from "./components/StatementLandingText.tsx";
import './i18n';
import {customChakraTheme} from "./styles/CustomChakraTheme.tsx";
import {StatementTabs} from "./components/StatementTabs.tsx";
import {MobileStatementLandingText} from "./components/MobileStatementLandingText.tsx";

function App() {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <ChakraProvider theme={ customChakraTheme }>
            <>
                <Header style={{ boxShadow: "var(--chakra-shadows-sm)"}} />
                {isMobile ? (
                    <Box className="mobile-statement-container">
                        <MobileStatementLandingText />
                    </Box>
                ) : (
                    <div className="main-statement-landing-container">
                        <StatementLandingText />
                        <br />
                        <div className="main-statement-tabs-container">
                            <StatementTabs />
                        </div>
                    </div>
                )}
                <Footer className="footer"/>
            </>
        </ChakraProvider>
    );
}

export default App;