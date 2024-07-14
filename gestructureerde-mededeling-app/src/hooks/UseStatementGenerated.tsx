import {Alert, AlertTitle, useToast} from "@chakra-ui/react";
import {RepeatIcon} from "@chakra-ui/icons";
import {t} from "i18next";

export const useStatementGenerated = () => {
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
                    <RepeatIcon boxSize={5} mr={3} />
                    <AlertTitle flex="1">
                        {t('common-statement-regenerate-message')}
                    </AlertTitle>
                </Alert>
            ),
            duration: 2500,
            isClosable: true,
        });
    }
}
