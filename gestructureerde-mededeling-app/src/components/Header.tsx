import {chakra, Flex, HStack, HTMLChakraProps, Icon, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, useDisclosure, useUpdateEffect} from '@chakra-ui/react'
import {useScroll} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'
import {FaYoutube} from 'react-icons/fa'
import Logo from '../assets/logo.png'
import VersionSwitcher from './VersionSwitcher.tsx'
import {GithubIcon} from './icons/GithubIcon.tsx'
import {DiscordIcon} from './icons/DiscordIcon.tsx'
import SponsorButton from "./SponsorButton.tsx";
import i18n from "i18next";
import {Flag, flags} from "../utils/LanguageFlagsDirectory.tsx";

function HeaderContent() {
    const mobileNavigation = useDisclosure()
    const [selectedLanguage, setSelectedLanguage] = useState<keyof Flag>('nl');
    const mobileNavigationRef = useRef<HTMLButtonElement>()

    const changeLanguage = (language: keyof Flag) => {
        i18n.changeLanguage(language)
            .then(() => setSelectedLanguage(language));
    };

    useUpdateEffect(() => {
        mobileNavigationRef.current?.focus()
    }, [mobileNavigation.isOpen])

    return (
        <>
            <Flex w='100%' h='100%' px='6' align='center' justify='space-between'>
                <Flex align='center'>
                    <chakra.a display='block' aria-label='Chakra UI, Back to homepage'>
                        <img src={Logo} className="header-logo" alt="Logo"/>
                    </chakra.a>
                </Flex>

                <Flex justify='flex-end' w='100%' align='center' color='gray.400' maxW='1100px'>
                    <VersionSwitcher width='auto' flexShrink={0} display={{ base: 'none', md: 'flex' }} marginRight='var(--chakra-space-5)' />
                    <HStack spacing='5' display={{ base: 'none', md: 'flex' }}>
                        <Link isExternal aria-label='Go to Codelab GitHub page' href="https://github.com/thecodelabgroup/gestructureerdemededeling">
                            <Icon as={GithubIcon} display='block' transition='color 0.2s' w='5' h='5' _hover={{ color: 'gray.600' }} />
                        </Link>
                        <Link
                            isExternal
                            aria-label='Go to Chakra UI Discord page'
                            href='/discord'
                        >
                            <Icon
                                as={DiscordIcon}
                                display='block'
                                transition='color 0.2s'
                                w='5'
                                h='5'
                                _hover={{ color: 'gray.600' }}
                            />
                        </Link>
                        <Link
                            isExternal
                            aria-label='Go to Chakra UI YouTube channel'
                            href={"siteConfig.youtube"}
                        >
                            <Icon
                                as={FaYoutube}
                                display='block'
                                transition='color 0.2s'
                                w='5'
                                h='5'
                                _hover={{ color: 'gray.600' }}
                            />
                        </Link>
                    </HStack>
                    <HStack spacing='5'>
                        <Menu>
                            <MenuButton ml={{ base: '0', md: '3' }} as={IconButton} variant="outline" icon={<Image src={flags[selectedLanguage as 'nl' | 'fr' | 'en' | 'de']} alt={`${selectedLanguage} flag`} boxSize='20px' />}>
                                Language
                            </MenuButton>
                            <MenuList minWidth='50px'>
                                {Object.keys(flags).map((lng) => (
                                    <MenuItem key={lng} onClick={() => changeLanguage(lng as 'nl' | 'fr' | 'en' | 'de')}  style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <Image src={flags[lng as 'nl' | 'fr' | 'en' | 'de']} alt={`${lng} flag`} boxSize='20px' />
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        <SponsorButton ml='5' />
                    </HStack>
                </Flex>
            </Flex>
        </>
    )
}

function Header(props: HTMLChakraProps<'header'>) {
    const { maxW = '8xl', maxWidth = '8xl' } = props
    const ref = useRef<HTMLHeadingElement>()
    const [y, setY] = useState(0)
    const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

    const { scrollY } = useScroll()
    useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()))
    }, [scrollY])

    return (
        <chakra.header
            ref={ref}
            shadow={y > height ? 'sm' : undefined}
            transition='box-shadow 0.2s, background-color 0.2s'
            pos='sticky'
            top='0'
            zIndex='11'
            bg='white'
            _dark={{ bg: 'gray.800' }}
            left='0'
            right='0'
            width='full'
            {...props}
        >
            <chakra.div height='4.5rem' mx='auto' maxW={maxW} maxWidth={maxWidth}>
                <HeaderContent />
            </chakra.div>
        </chakra.header>
    )
}

export default Header
