import {
    Icon,
    Link,
    Stack,
    Text,
    VStack,
    StackProps
} from '@chakra-ui/react'
import React from 'react'
import {DiGithubBadge} from 'react-icons/di'
import {FaYoutube} from 'react-icons/fa'
import {IoLogoLinkedin, IoLogoTwitter} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import Logo from '../assets/logo.png'

type FooterLinkProps = {
    icon?: React.ElementType
    href?: string
    label?: string
}

const FooterLink = ({icon, href, label}: FooterLinkProps) => (
    <Link display='inline-block' href={href} aria-label={label} isExternal>
        <Icon as={icon} fontSize='xl' color='gray.400'/>
    </Link>
)

const links = [
    {
        icon: DiGithubBadge,
        label: 'GitHub',
        href: 'https://github.com/segunadebayo',
    },
    {
        icon: IoLogoTwitter,
        label: 'Twitter',
        href: 'https://twitter.com/thesegunadebayo',
    },
    {
        icon: IoLogoLinkedin,
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/thesegunadebayo/',
    },
    {
        icon: MdEmail,
        label: 'Email',
        href: 'mailto:sage@adebayosegun.com',
    },
    {
        icon: FaYoutube,
        label: 'YouTube',
        href: 'https://www.youtube.com/channel/UC4TmDovH46TB4S0SM0Y4CIg',
    },
]

export const Footer = (props: StackProps) => (
    <VStack as='footer' spacing={4} mt={12} textAlign='center' {...props}>
        <Text fontSize='sm' style={{ fontFamily: 'Poppins, sans-serif', color: "#00044F" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <span style={{ marginBottom: 10, fontSize: "1rem" }}>Proudly made by</span>
                <img src={Logo} style={{maxHeight: "20px", maxWidth: "100px"}} alt="Logo"/>
            </div>
        </Text>
        <Stack mt={4} direction='row' spacing='12px' justify='center'>
            {links.map((link) => (
                <FooterLink key={link.href} {...link} />
            ))}
        </Stack>
    </VStack>
)

export default Footer
