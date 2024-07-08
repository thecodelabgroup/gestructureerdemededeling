import {
    Flex,
    HStack,
    HTMLChakraProps,
    Icon,
    IconButton,
    Link,
    chakra,
    useDisclosure,
    useUpdateEffect, MenuButton, Menu, MenuList, MenuItem, Image
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaYoutube } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import VersionSwitcher from './VersionSwitcher.tsx'
import { GithubIcon } from './icons/GithubIcon.tsx'
import { DiscordIcon } from './icons/DiscordIcon.tsx'
import SponsorButton from "./SponsorButton.tsx";
import i18n from "i18next";

function HeaderContent() {
    const mobileNav = useDisclosure()
    const [selectedLang, setSelectedLang] = useState('en');

    const flags: Record<'nl' | 'fr' | 'en' | 'de', string> = {
        nl: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/2/svg/1f1f3-1f1f1.svg',
        fr: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/2/svg/1f1eb-1f1f7.svg',
        en: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/2/svg/1f1ec-1f1e7.svg',
        de: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/2/svg/1f1e9-1f1ea.svg',
    };

    const changeLanguage = (lng: 'nl' | 'fr' | 'en' | 'de') => {
        i18n.changeLanguage(lng);
        setSelectedLang(lng);
    };

    const mobileNavBtnRef = useRef<HTMLButtonElement>()

    useUpdateEffect(() => {
        mobileNavBtnRef.current?.focus()
    }, [mobileNav.isOpen])

    return (
        <>
            <Flex w='100%' h='100%' px='6' align='center' justify='space-between'>
                <Flex align='center'>
                    <chakra.a display='block' aria-label='Chakra UI, Back to homepage'>
                        <img src={Logo} style={{ maxHeight: "40px" }} alt="Logo"/>
                    </chakra.a>
                </Flex>

                <Flex
                    justify='flex-end'
                    w='100%'
                    align='center'
                    color='gray.400'
                    maxW='1100px'
                >
                    <VersionSwitcher
                        width='auto'
                        flexShrink={0}
                        display={{ base: 'none', md: 'flex' }}
                        marginRight='var(--chakra-space-5)'
                    />
                    <HStack spacing='5' display={{ base: 'none', md: 'flex' }}>
                        <Link
                            isExternal
                            aria-label='Go to Chakra UI GitHub page'
                            href={"siteConfig.repo.url"}
                        >
                            <Icon
                                as={GithubIcon}
                                display='block'
                                transition='color 0.2s'
                                w='5'
                                h='5'
                                _hover={{ color: 'gray.600' }}
                            />
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
                            <MenuButton ml={{ base: '0', md: '3' }} as={IconButton} variant="outline" icon={<Image src={flags[selectedLang as 'nl' | 'fr' | 'en' | 'de']} alt={`${selectedLang} flag`} boxSize='20px' />}>
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
