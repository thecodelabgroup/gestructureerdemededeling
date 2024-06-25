import { SearchIcon } from '@chakra-ui/icons'
import {
    HStack,
    Kbd,
    Portal,
    Text,
    VisuallyHidden,
    chakra,
} from '@chakra-ui/react'
import Head from 'next/head'
import * as React from 'react'

export const SearchButton = React.forwardRef(function SearchButton(
    props
) {
    return (
        <chakra.button
            flex='1'
            type='button'
            mx='6'
            lineHeight='1.2'
            w='100%'
            bg='white'
            whiteSpace='nowrap'
            display={{ base: 'none', sm: 'flex' }}
            alignItems='center'
            color='gray.600'
            _dark={{ bg: 'gray.700', color: 'gray.400' }}
            py='3'
            px='4'
            outline='0'
            _focus={{ shadow: 'outline' }}
            shadow='base'
            rounded='md'
            {...props}
        >
            <SearchIcon />
            <HStack w='full' ml='3' spacing='4px'>
                <Text textAlign='left' flex='1'>
                    Search customer
                </Text>
                <HStack spacing='4px'>
                    <VisuallyHidden>Press </VisuallyHidden>
                    <Kbd rounded='2px'>
                        <chakra.div
                            as='abbr'
                            title='Command'
                            textDecoration='none !important'
                        >
                            ⌘
                        </chakra.div>
                    </Kbd>
                    <VisuallyHidden> and </VisuallyHidden>
                    <Kbd rounded='2px'>K</Kbd>
                    <VisuallyHidden> to search</VisuallyHidden>
                </HStack>
            </HStack>
        </chakra.button>
    )
})

function AlgoliaSearch() {
    return (
        <>
            <Head>
                <link
                    rel='preconnect'
                    href='https://BH4D9OD16A-dsn.algolia.net'
                    crossOrigin='anonymous'
                />
            </Head>
            <SearchButton />
            <Portal>
                <div>
                    {/* Modal content goes here */}
                </div>
            </Portal>
        </>
    )
}

export default AlgoliaSearch
