import {extendTheme} from "@chakra-ui/react";

export const customChakraTheme = extendTheme({
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