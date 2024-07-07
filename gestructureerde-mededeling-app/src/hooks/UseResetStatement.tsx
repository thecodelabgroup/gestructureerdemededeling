import {useToast} from "@chakra-ui/react";

export const useResetStatement = () => {
    const toast = useToast();

    return () => {
        toast({
            title: "Mededeling succesvol gereset",
            status: 'info',
            duration: 2500,
            isClosable: true,
        });
    }
}
