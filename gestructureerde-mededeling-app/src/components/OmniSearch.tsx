import { SearchIcon } from '@chakra-ui/icons'
import {
    Box,
    Center,
    ChakraProps,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    chakra,
    useDisclosure,
} from '@chakra-ui/react'
import {SVGProps} from 'react'
import {JSX} from 'react/jsx-runtime'
import {SearchButton} from "./AlgoliaSearch.tsx";

function DocIcon(props: JSX.IntrinsicAttributes & Omit<SVGProps<SVGSVGElement>, "p" | "clipPath" | "filter" | "m" | "margin" | "mt" | "marginBlockStart" | "marginTop" | "mr" | "marginInlineEnd" | "marginEnd" | "me" | "marginRight" | "mb" | "marginBlockEnd" | "marginBottom" | "ml" | "marginInlineStart" | "marginStart" | "ms" | "marginLeft" | "mx" | "marginInline" | "marginX" | "my" | "marginBlock" | "marginY" | "padding" | "pt" | "paddingBlockStart" | "paddingTop" | "pr" | "paddingInlineEnd" | "paddingEnd" | "pe" | "paddingRight" | "pb" | "paddingBlockEnd" | "paddingBottom" | "pl" | "paddingInlineStart" | "paddingStart" | "ps" | "paddingLeft" | "px" | "paddingInline" | "paddingX" | "py" | "paddingBlock" | "paddingY" | "textColor" | "color" | "fill" | "stroke" | "transition" | "transitionProperty" | "transitionTimingFunction" | "transitionDuration" | "transitionDelay" | "animation" | "willChange" | "fontWeight" | "lineHeight" | "letterSpacing" | "fontSize" | "fontFamily" | "textAlign" | "fontStyle" | "textIndent" | "wordBreak" | "overflowWrap" | "textOverflow" | "textTransform" | "whiteSpace" | "noOfLines" | "isTruncated" | "alignItems" | "alignContent" | "justifyItems" | "justifyContent" | "flexWrap" | "flexFlow" | "flexBasis" | "flexDirection" | "flexDir" | "flex" | "gap" | "rowGap" | "columnGap" | "justifySelf" | "alignSelf" | "order" | "flexGrow" | "flexShrink" | "placeItems" | "placeContent" | "placeSelf" | "transform" | "transformOrigin" | "translateX" | "translateY" | "rotate" | "skewX" | "skewY" | "scaleX" | "scaleY" | "scale" | "gridGap" | "gridColumnGap" | "gridRowGap" | "gridColumnStart" | "gridRowStart" | "gridRowEnd" | "gridTemplate" | "gridColumnEnd" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "blur" | "brightness" | "contrast" | "hueRotate" | "invert" | "saturate" | "dropShadow" | "backdropFilter" | "backdropBlur" | "backdropBrightness" | "backdropContrast" | "backdropHueRotate" | "backdropInvert" | "backdropSaturate" | "display" | "hideFrom" | "hideBelow" | "width" | "w" | "inlineSize" | "boxSize" | "maxWidth" | "maxW" | "maxInlineSize" | "minWidth" | "minW" | "minInlineSize" | "height" | "h" | "blockSize" | "maxHeight" | "maxH" | "maxBlockSize" | "minHeight" | "minH" | "minBlockSize" | "verticalAlign" | "overflow" | "overflowX" | "overflowY" | "boxSizing" | "boxDecorationBreak" | "float" | "objectFit" | "objectPosition" | "overscrollBehavior" | "overscroll" | "overscrollBehaviorX" | "overscrollX" | "overscrollBehaviorY" | "overscrollY" | "visibility" | "isolation" | "aspectRatio" | "border" | "borderWidth" | "borderStyle" | "borderColor" | "borderRadius" | "rounded" | "borderTop" | "borderBlockStart" | "borderTopWidth" | "borderBlockStartWidth" | "borderBottomWidth" | "borderBlockEndWidth" | "borderLeftWidth" | "borderStartWidth" | "borderInlineStartWidth" | "borderRightWidth" | "borderEndWidth" | "borderInlineEndWidth" | "borderTopStyle" | "borderBlockStartStyle" | "borderBottomStyle" | "borderBlockEndStyle" | "borderLeftStyle" | "borderStartStyle" | "borderInlineStartStyle" | "borderRightStyle" | "borderEndStyle" | "borderInlineEndStyle" | "borderTopColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBlockEndColor" | "borderLeftColor" | "borderStartColor" | "borderInlineStartColor" | "borderRightColor" | "borderEndColor" | "borderInlineEndColor" | "borderRight" | "borderEnd" | "borderInlineEnd" | "borderBottom" | "borderBlockEnd" | "borderLeft" | "borderStart" | "borderInlineStart" | "borderTopRadius" | "roundedTop" | "borderRightRadius" | "roundedRight" | "roundedEnd" | "borderInlineEndRadius" | "borderEndRadius" | "borderBottomRadius" | "roundedBottom" | "borderLeftRadius" | "roundedLeft" | "roundedStart" | "borderInlineStartRadius" | "borderStartRadius" | "borderTopLeftRadius" | "borderTopStartRadius" | "borderStartStartRadius" | "roundedTopLeft" | "roundedTopStart" | "borderTopRightRadius" | "borderTopEndRadius" | "borderStartEndRadius" | "roundedTopRight" | "roundedTopEnd" | "borderBottomLeftRadius" | "borderBottomStartRadius" | "borderEndStartRadius" | "roundedBottomLeft" | "roundedBottomStart" | "borderBottomRightRadius" | "borderBottomEndRadius" | "borderEndEndRadius" | "roundedBottomRight" | "roundedBottomEnd" | "borderX" | "borderInline" | "borderY" | "borderBlock" | "boxShadow" | "shadow" | "mixBlendMode" | "blendMode" | "backgroundBlendMode" | "bgBlendMode" | "opacity" | "bg" | "bgClip" | "backgroundClip" | "background" | "bgColor" | "backgroundColor" | "backgroundImage" | "bgGradient" | "backgroundSize" | "bgPos" | "backgroundPosition" | "bgImage" | "bgImg" | "bgRepeat" | "backgroundRepeat" | "bgSize" | "bgAttachment" | "backgroundAttachment" | "bgPosition" | "listStyleType" | "listStylePosition" | "listStylePos" | "listStyleImage" | "listStyleImg" | "zIndex" | "top" | "insetBlockStart" | "right" | "insetInlineEnd" | "insetEnd" | "bottom" | "insetBlockEnd" | "left" | "insetInlineStart" | "insetStart" | "inset" | "insetX" | "insetY" | "pos" | "position" | "insetInline" | "insetBlock" | "ring" | "ringColor" | "ringOffset" | "ringOffsetColor" | "ringInset" | "scrollBehavior" | "scrollSnapAlign" | "scrollSnapStop" | "scrollSnapType" | "scrollMargin" | "scrollMarginTop" | "scrollMarginBottom" | "scrollMarginLeft" | "scrollMarginRight" | "scrollMarginX" | "scrollMarginY" | "scrollPadding" | "scrollPaddingTop" | "scrollPaddingBottom" | "scrollPaddingLeft" | "scrollPaddingRight" | "scrollPaddingX" | "scrollPaddingY" | "appearance" | "userSelect" | "pointerEvents" | "resize" | "cursor" | "outline" | "outlineOffset" | "outlineColor" | "textDecoration" | "textDecor" | "textDecorationColor" | "textDecorationThickness" | "textDecorationStyle" | "textDecorationLine" | "textUnderlineOffset" | "textShadow" | "srOnly" | "layerStyle" | "textStyle" | "apply" | "as" | "translate" | "_hover" | "_active" | "_focus" | "_highlighted" | "_focusWithin" | "_focusVisible" | "_disabled" | "_readOnly" | "_before" | "_after" | "_empty" | "_expanded" | "_checked" | "_grabbed" | "_pressed" | "_invalid" | "_valid" | "_loading" | "_selected" | "_hidden" | "_autofill" | "_even" | "_odd" | "_first" | "_firstLetter" | "_last" | "_notFirst" | "_notLast" | "_visited" | "_activeLink" | "_activeStep" | "_indeterminate" | "_groupHover" | "_peerHover" | "_groupFocus" | "_peerFocus" | "_groupFocusVisible" | "_peerFocusVisible" | "_groupActive" | "_peerActive" | "_groupDisabled" | "_peerDisabled" | "_groupInvalid" | "_peerInvalid" | "_groupChecked" | "_peerChecked" | "_groupFocusWithin" | "_peerFocusWithin" | "_peerPlaceholderShown" | "_placeholder" | "_placeholderShown" | "_fullScreen" | "_selection" | "_rtl" | "_ltr" | "_mediaDark" | "_mediaReduceMotion" | "_dark" | "_light" | "_horizontal" | "_vertical" | "__css" | "sx" | "css"> & { htmlTranslate?: "yes" | "no" | undefined } & Omit<ChakraProps, never> & { as?: "svg" | undefined }) {
    return (
        <chakra.svg
            strokeWidth='2px'
            width='20px'
            height='20px'
            viewBox='0 0 20 20'
            {...props}
        >
            <path
                d='M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4'
                stroke='currentColor'
                fill='none'
                fillRule='evenodd'
                strokeLinejoin='round'
            />
        </chakra.svg>
    )
}

function EnterIcon(props: JSX.IntrinsicAttributes & Omit<SVGProps<SVGSVGElement>, "p" | "clipPath" | "filter" | "m" | "margin" | "mt" | "marginBlockStart" | "marginTop" | "mr" | "marginInlineEnd" | "marginEnd" | "me" | "marginRight" | "mb" | "marginBlockEnd" | "marginBottom" | "ml" | "marginInlineStart" | "marginStart" | "ms" | "marginLeft" | "mx" | "marginInline" | "marginX" | "my" | "marginBlock" | "marginY" | "padding" | "pt" | "paddingBlockStart" | "paddingTop" | "pr" | "paddingInlineEnd" | "paddingEnd" | "pe" | "paddingRight" | "pb" | "paddingBlockEnd" | "paddingBottom" | "pl" | "paddingInlineStart" | "paddingStart" | "ps" | "paddingLeft" | "px" | "paddingInline" | "paddingX" | "py" | "paddingBlock" | "paddingY" | "textColor" | "color" | "fill" | "stroke" | "transition" | "transitionProperty" | "transitionTimingFunction" | "transitionDuration" | "transitionDelay" | "animation" | "willChange" | "fontWeight" | "lineHeight" | "letterSpacing" | "fontSize" | "fontFamily" | "textAlign" | "fontStyle" | "textIndent" | "wordBreak" | "overflowWrap" | "textOverflow" | "textTransform" | "whiteSpace" | "noOfLines" | "isTruncated" | "alignItems" | "alignContent" | "justifyItems" | "justifyContent" | "flexWrap" | "flexFlow" | "flexBasis" | "flexDirection" | "flexDir" | "flex" | "gap" | "rowGap" | "columnGap" | "justifySelf" | "alignSelf" | "order" | "flexGrow" | "flexShrink" | "placeItems" | "placeContent" | "placeSelf" | "transform" | "transformOrigin" | "translateX" | "translateY" | "rotate" | "skewX" | "skewY" | "scaleX" | "scaleY" | "scale" | "gridGap" | "gridColumnGap" | "gridRowGap" | "gridColumnStart" | "gridRowStart" | "gridRowEnd" | "gridTemplate" | "gridColumnEnd" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "blur" | "brightness" | "contrast" | "hueRotate" | "invert" | "saturate" | "dropShadow" | "backdropFilter" | "backdropBlur" | "backdropBrightness" | "backdropContrast" | "backdropHueRotate" | "backdropInvert" | "backdropSaturate" | "display" | "hideFrom" | "hideBelow" | "width" | "w" | "inlineSize" | "boxSize" | "maxWidth" | "maxW" | "maxInlineSize" | "minWidth" | "minW" | "minInlineSize" | "height" | "h" | "blockSize" | "maxHeight" | "maxH" | "maxBlockSize" | "minHeight" | "minH" | "minBlockSize" | "verticalAlign" | "overflow" | "overflowX" | "overflowY" | "boxSizing" | "boxDecorationBreak" | "float" | "objectFit" | "objectPosition" | "overscrollBehavior" | "overscroll" | "overscrollBehaviorX" | "overscrollX" | "overscrollBehaviorY" | "overscrollY" | "visibility" | "isolation" | "aspectRatio" | "border" | "borderWidth" | "borderStyle" | "borderColor" | "borderRadius" | "rounded" | "borderTop" | "borderBlockStart" | "borderTopWidth" | "borderBlockStartWidth" | "borderBottomWidth" | "borderBlockEndWidth" | "borderLeftWidth" | "borderStartWidth" | "borderInlineStartWidth" | "borderRightWidth" | "borderEndWidth" | "borderInlineEndWidth" | "borderTopStyle" | "borderBlockStartStyle" | "borderBottomStyle" | "borderBlockEndStyle" | "borderLeftStyle" | "borderStartStyle" | "borderInlineStartStyle" | "borderRightStyle" | "borderEndStyle" | "borderInlineEndStyle" | "borderTopColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBlockEndColor" | "borderLeftColor" | "borderStartColor" | "borderInlineStartColor" | "borderRightColor" | "borderEndColor" | "borderInlineEndColor" | "borderRight" | "borderEnd" | "borderInlineEnd" | "borderBottom" | "borderBlockEnd" | "borderLeft" | "borderStart" | "borderInlineStart" | "borderTopRadius" | "roundedTop" | "borderRightRadius" | "roundedRight" | "roundedEnd" | "borderInlineEndRadius" | "borderEndRadius" | "borderBottomRadius" | "roundedBottom" | "borderLeftRadius" | "roundedLeft" | "roundedStart" | "borderInlineStartRadius" | "borderStartRadius" | "borderTopLeftRadius" | "borderTopStartRadius" | "borderStartStartRadius" | "roundedTopLeft" | "roundedTopStart" | "borderTopRightRadius" | "borderTopEndRadius" | "borderStartEndRadius" | "roundedTopRight" | "roundedTopEnd" | "borderBottomLeftRadius" | "borderBottomStartRadius" | "borderEndStartRadius" | "roundedBottomLeft" | "roundedBottomStart" | "borderBottomRightRadius" | "borderBottomEndRadius" | "borderEndEndRadius" | "roundedBottomRight" | "roundedBottomEnd" | "borderX" | "borderInline" | "borderY" | "borderBlock" | "boxShadow" | "shadow" | "mixBlendMode" | "blendMode" | "backgroundBlendMode" | "bgBlendMode" | "opacity" | "bg" | "bgClip" | "backgroundClip" | "background" | "bgColor" | "backgroundColor" | "backgroundImage" | "bgGradient" | "backgroundSize" | "bgPos" | "backgroundPosition" | "bgImage" | "bgImg" | "bgRepeat" | "backgroundRepeat" | "bgSize" | "bgAttachment" | "backgroundAttachment" | "bgPosition" | "listStyleType" | "listStylePosition" | "listStylePos" | "listStyleImage" | "listStyleImg" | "zIndex" | "top" | "insetBlockStart" | "right" | "insetInlineEnd" | "insetEnd" | "bottom" | "insetBlockEnd" | "left" | "insetInlineStart" | "insetStart" | "inset" | "insetX" | "insetY" | "pos" | "position" | "insetInline" | "insetBlock" | "ring" | "ringColor" | "ringOffset" | "ringOffsetColor" | "ringInset" | "scrollBehavior" | "scrollSnapAlign" | "scrollSnapStop" | "scrollSnapType" | "scrollMargin" | "scrollMarginTop" | "scrollMarginBottom" | "scrollMarginLeft" | "scrollMarginRight" | "scrollMarginX" | "scrollMarginY" | "scrollPadding" | "scrollPaddingTop" | "scrollPaddingBottom" | "scrollPaddingLeft" | "scrollPaddingRight" | "scrollPaddingX" | "scrollPaddingY" | "appearance" | "userSelect" | "pointerEvents" | "resize" | "cursor" | "outline" | "outlineOffset" | "outlineColor" | "textDecoration" | "textDecor" | "textDecorationColor" | "textDecorationThickness" | "textDecorationStyle" | "textDecorationLine" | "textUnderlineOffset" | "textShadow" | "srOnly" | "layerStyle" | "textStyle" | "apply" | "as" | "translate" | "_hover" | "_active" | "_focus" | "_highlighted" | "_focusWithin" | "_focusVisible" | "_disabled" | "_readOnly" | "_before" | "_after" | "_empty" | "_expanded" | "_checked" | "_grabbed" | "_pressed" | "_invalid" | "_valid" | "_loading" | "_selected" | "_hidden" | "_autofill" | "_even" | "_odd" | "_first" | "_firstLetter" | "_last" | "_notFirst" | "_notLast" | "_visited" | "_activeLink" | "_activeStep" | "_indeterminate" | "_groupHover" | "_peerHover" | "_groupFocus" | "_peerFocus" | "_groupFocusVisible" | "_peerFocusVisible" | "_groupActive" | "_peerActive" | "_groupDisabled" | "_peerDisabled" | "_groupInvalid" | "_peerInvalid" | "_groupChecked" | "_peerChecked" | "_groupFocusWithin" | "_peerFocusWithin" | "_peerPlaceholderShown" | "_placeholder" | "_placeholderShown" | "_fullScreen" | "_selection" | "_rtl" | "_ltr" | "_mediaDark" | "_mediaReduceMotion" | "_dark" | "_light" | "_horizontal" | "_vertical" | "__css" | "sx" | "css"> & { htmlTranslate?: "yes" | "no" | undefined } & Omit<ChakraProps, never> & { as?: "svg" | undefined }) {
    return (
        <chakra.svg
            strokeWidth='2px'
            width='16px'
            height='16px'
            viewBox='0 0 20 20'
            {...props}
        >
            <g
                stroke='currentColor'
                fill='none'
                fillRule='evenodd'
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path d='M18 3v4c0 2-2 4-4 4H2' />
                <path d='M8 17l-6-6 6-6' />
            </g>
        </chakra.svg>
    )
}

function OmniSearch() {
    const modal = useDisclosure()

    return (
        <>
            <SearchButton onClick={modal.onOpen} />
            <Modal
                scrollBehavior='inside'
                isOpen={modal.isOpen}
                onClose={modal.onClose}
            >
                <ModalOverlay />
                <ModalContent
                    role='combobox'
                    aria-expanded='true'
                    aria-haspopup='listbox'
                    rounded='lg'
                    overflow='hidden'
                    top='4vh'
                    bg='transparent'
                    shadow='lg'
                    maxW='600px'
                >
                    <Flex pos='relative' align='stretch'>
                        <chakra.input
                            aria-autocomplete='list'
                            autoComplete='off'
                            autoCorrect='off'
                            spellCheck='false'
                            maxLength={64}
                            sx={{
                                w: '100%',
                                h: '68px',
                                pl: '68px',
                                fontWeight: 'medium',
                                outline: 0,
                                bg: 'white',
                                '.chakra-ui-dark &': { bg: 'gray.700' },
                            }}
                            placeholder='Search customer'
                        />
                        <Center pos='absolute' left={7} h='68px'>
                            <SearchIcon color='teal.500' boxSize='20px' />
                        </Center>
                    </Flex>
                    <ModalBody maxH='66vh' p='0'>
                        <Box
                            sx={{
                                px: 4,
                                bg: 'white',
                                '.chakra-ui-dark &': { bg: 'gray.700' },
                            }}
                        >
                            <Box as='ul' role='listbox' borderTopWidth='1px' pt={2} pb={4}>
                                <Box
                                    as='li'
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        minH: 16,
                                        mt: 2,
                                        px: 4,
                                        py: 2,
                                        rounded: 'lg',
                                        bg: 'gray.100',
                                        '.chakra-ui-dark &': { bg: 'gray.600' },
                                    }}
                                >
                                    <DocIcon opacity={0.4} />
                                    <Box flex='1' ml='4'>
                                        <Box fontWeight='semibold'>
                                            Example Item
                                        </Box>
                                    </Box>
                                    <EnterIcon opacity={0.5} />
                                </Box>
                            </Box>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default OmniSearch
