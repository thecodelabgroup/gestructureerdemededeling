import {Heading} from "@chakra-ui/react";

export const StatementLandingText = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <Heading as='h1' size='2xl' noOfLines={1} style={{paddingBottom: "30px", color: "#00044F", fontFamily: 'Poppins, sans-serif'}}>
                Gestructureerde Mededeling.
            </Heading>
            <p style={{width: "1000px", color: "#00044F", fontFamily: 'Poppins, sans-serif'}}>
                Een overschrijving met gestructureerde mededeling wordt gebruikt voor de automatische verwerking van betalingen.
                De mededeling bestaat uit drie groepen cijfers, gescheiden door schuine strepen. De eerste groep heeft
                drie cijfers, de tweede vier, en de derde vijf. De mededeling begint en eindigt met drie plustekens (+++).
            </p>
        </div>
    )
}

