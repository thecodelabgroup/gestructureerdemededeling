import { Box, BoxProps, Icon } from '@chakra-ui/react'
import {FaHeart} from 'react-icons/fa'

const SponsorButton = ({ onClick, ...props }: BoxProps & { onClick?: () => void }) => (
    <Box
        display={{ base: 'none', lg: 'flex' }}
        alignItems='center'
        as='button'
        aria-label='Sponsor Chakra UI on Open Collective'
        onClick={onClick}
        bg='gray.50'
        borderWidth='1px'
        borderColor='gray.200'
        px='1em'
        minH='36px'
        borderRadius='md'
        fontSize='sm'
        color='gray.800'
        outline='0'
        transition='all 0.3s'
        _hover={{
            bg: 'gray.100',
            borderColor: 'gray.300',
        }}
        _active={{
            borderColor: 'gray.200',
        }}
        _focus={{
            boxShadow: 'outline',
        }}
        {...props}
    >
        <Icon as={FaHeart} w='4' h='4' color='red.500' mr='2' />
        <Box as='strong' lineHeight='inherit' fontWeight='semibold'>
            Sponsor
        </Box>
    </Box>
)

export default SponsorButton