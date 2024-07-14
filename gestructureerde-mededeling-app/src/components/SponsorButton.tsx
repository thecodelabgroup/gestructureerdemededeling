import { Box, BoxProps, Icon } from '@chakra-ui/react'
import {FaHeart} from 'react-icons/fa'
import {useTranslation} from "react-i18next";

export const SponsorButton = ({ onClick, ...props }: BoxProps & { onClick?: () => void }) => {
    const { t } = useTranslation();

    return (
        <Box display={{ base: 'none', lg: 'flex' }} alignItems='center' as='button' onClick={onClick} borderWidth='1px' borderColor='gray.200' px='1em' minH='36px' borderRadius='md' fontSize='sm' color='gray.800' outline='0' transition='all 0.3s' _hover={{ bg: 'gray.100', borderColor: 'gray.300' }} _active={{ borderColor: 'gray.200' }} _focus={{ borderColor: "#3902BF" }} {...props}>
            <Icon
                as={FaHeart}
                w='4'
                h='4'
                color='red.500'
                mr='2'
            />
            <Box as='strong' lineHeight='inherit' fontWeight='semibold'>
                {t('sponsor-button-label')}
            </Box>
        </Box>
    )
}