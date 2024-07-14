import {Select, SelectProps} from '@chakra-ui/react'

export const VersionSwitcher = (props: SelectProps) => {
    return (
        <Select marginEnd='0rem' variant='outline' fontWeight='semibold' color='gray.600' background='chakra-body-bg' sx={{ '--select-bg': 'colors.chakra-body-bg' }} focusBorderColor='#3902BF' {...props}>
            <option>
                v1.2.7
            </option>
        </Select>
    )
}

