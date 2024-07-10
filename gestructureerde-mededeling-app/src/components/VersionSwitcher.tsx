import { Select, SelectProps } from '@chakra-ui/react'

export const VersionSwitcher = (props: SelectProps) => (
    <Select
        marginEnd='0rem'
        variant='outline'
        fontWeight='semibold'
        color='gray.600'
        background='chakra-body-bg'
        sx={{ '--select-bg': 'colors.chakra-body-bg' }}
        focusBorderColor='#3902BF'
        value="v1.2.7"
        {...props}
    >
        <option>
            v1.2.7
        </option>
    </Select>
)

export default VersionSwitcher;
