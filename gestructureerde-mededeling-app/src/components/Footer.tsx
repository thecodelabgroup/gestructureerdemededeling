import {Icon, Link, Stack, StackProps, Text, VStack} from '@chakra-ui/react'
import React from 'react'
import {FaDiscord, FaInstagram, FaLinkedinIn, FaSlack, FaYoutube} from 'react-icons/fa'
import Logo from '../assets/logo.png'

type FooterLinkProps = {
    icon?: React.ElementType
    href?: string
    label?: string
}

const FooterLink = ({icon, href, label}: FooterLinkProps) => (
    <Link display='inline-block' href={href} aria-label={label} isExternal>
        <Icon as={icon} fontSize='l' color='gray.400'/>
    </Link>
)

const links = [
    {
        icon: FaLinkedinIn,
        label: 'Twitter',
        href: 'https://twitter.com/thesegunadebayo',
    },
    {
        icon: FaSlack,
        label: 'Twitter',
        href: 'https://twitter.com/thesegunadebayo',
    },
    {
        icon: FaInstagram,
        label: 'YouTube',
        href: 'https://www.youtube.com/channel/UC4TmDovH46TB4S0SM0Y4CIg',
    },
    {
        icon: FaYoutube,
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/thesegunadebayo/',
    },
    {
        icon: FaDiscord,
        label: 'Twitter',
        href: 'https://twitter.com/thesegunadebayo',
    }
]

export const Footer = (props: StackProps) => (
    <VStack as='footer' spacing={4} mt={12} textAlign='center' {...props}>
        <Text fontSize='sm' style={{ fontFamily: 'Poppins, sans-serif', color: "#00044F" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <span style={{ marginBottom: 10, fontSize: "1rem" }}>Proudly made by</span>
                <img src={Logo} style={{maxHeight: "20px", maxWidth: "100px"}} alt="Logo"/>
            </div>
        </Text>
        <Stack mt={2} direction='row' spacing='12px' justify='center'>
            {links.map((link) => (
                <FooterLink key={link.href} {...link} />
            ))}
        </Stack>
    </VStack>
)

export default Footer
