import {useToast, Alert, AlertIcon, AlertTitle} from "@chakra-ui/react";
import {t} from "i18next";

export const useResetStatement = () => {
    const toast = useToast();

    return () => {
        toast({
            render: () => (
                <Alert
                    status="info"
                    variant="solid"
                    bg="#00044F"
                    borderRadius="md"
                    boxShadow="md"
                    alignItems="center"
                    paddingRight={4}
                >
                    <AlertIcon />
                    <AlertTitle flex="1">{t('common-statement-reset-message')}</AlertTitle>
                </Alert>
            ),
            duration: 2500,
            isClosable: true,
        });
    }
}
