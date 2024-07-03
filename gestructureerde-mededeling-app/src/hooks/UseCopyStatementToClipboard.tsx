import {useToast} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

export const useCopyStatementToClipboard = () => {
    const { t } = useTranslation();
    const toast = useToast();

    return (statement: string) => {
        navigator.clipboard.writeText(statement)
            .then(() => {
                toast({
                    title: t('common-statement-copy-success-message'),
                    status: 'success',
                    duration: 2500,
                    isClosable: true
                })
            })
            .catch(() => {
                toast({
                    title: t('common-statement-copy-error-message'),
                    status: 'error',
                    duration: 2500,
                    isClosable: true
                })
            });
    };
}