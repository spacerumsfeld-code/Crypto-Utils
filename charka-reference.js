/* This document serves as a reference to the various props chakra components can take as well as options for modifying the basic theme!
*/

------------------MARGIN AND PADDING-------------------

import { Box } from "@chakra-ui/react"
// m={2} refers to the value of `theme.space[2]`
<Box m={2}>Tomato</Box>
// You can also use custom values
<Box maxW="960px" mx="auto" />
// sets margin `8px` on all viewports and `16px` from the first breakpoint and up
<Box m={[2, 3]} />

Prop	CSS Property	Theme Key
m, margin	margin	space
mt, marginTop	margin-top	space
mr, marginRight	margin-right	space
me, marginEnd	margin-inline-end	space
mb, marginBottom	margin-bottom	space
ml, marginLeft	margin-left	space
ms, marginStart	margin-inline-start	space
mx	margin-inline-start + margin-inline-end	space
my	margin-top + margin-bottom	space
p, padding	padding	space
pt, paddingTop	padding-top	space
pr, paddingRight	padding-right	space
pe, paddingEnd	padding-inline-end	space
pb, paddingBottom	padding-bottom	space
pl, paddingLeft	padding-left	space
ps, paddingStart	padding-inline-start	space
px	padding-inline-start + padding-inline-end	space
py	padding-top + padding-bottom	space

--------------COLOR AND BACKGROUND COLOR-------------------
import { Box } from "@chakra-ui/react"
// picks up a nested color value using dot notation
// => `theme.colors.gray[50]`
<Box color='gray.50' />
// raw CSS color value
<Box color='#f00' />
// background colors
<Box bg='tomato' />
// verbose prop
<Box backgroundColor='tomato' />

Prop	    CSS Property	  Theme Key
color	    color	          colors
bg, background	background	colors
bgColor	background-color	colors
opacity	opacity	none

-----------------GRADIENTS-----------------------
import { Box, Text } from "@chakra-ui/react"
// adding linear gradient and color transitions
<Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />
// adding radial gradient and color transitions
<Box w="100%" h="200px" bgGradient="radial(gray.300,yellow.400,pink.200)" />
// adding the text gradient
<Text
  bgGradient="linear(to-l, #7928CA,#FF0080)"
  bgClip="text"
  fontSize="6xl"
  fontWeight="extrabold"
>
  Welcome to Chakra UI
</Text>

Prop	CSS Property	Theme Key
bgGradient	background-image	none
bgClip, backgroundClip	background-clip	none

-------------------TYPOGRAPHY--------------------
import { Text } from "@chakra-ui/react"
// font-size of `theme.fontSizes.md`
<Text fontSize="md" />
// font-size `32px`
<Text fontSize={32} />
// font-size `'2em'`
<Text fontSize='2em' />
// text-align `left` on all viewports and `center` from the first breakpoint and up
<Text textAlign={[ 'left', 'center' ]} />

Prop	CSS Property	Theme Key
fontFamily	font-family	fonts
fontSize	font-size	fontSizes
fontWeight	font-weight	fontWeights
lineHeight	line-height	lineHeights
letterSpacing	letter-spacing	letterSpacings
textAlign	text-align	none
fontStyle	font-style	none
textTransform	text-transform	none
textDecoration	text-decoration	none

----------------LAYOUT -----------------
import { Box } from "@chakra-ui/react"
// verbose
<Box width="100%" height={32} />
// shorthand
<Box w="100%" h="32px" />
// use theme sizing
<Box boxSize="sm" />
// width `50%`
<Box w={1/2} />
// width `256px`
<Box w={256} />
// width `'40px'`
<Box w='40px' />

Prop	CSS Property	Theme Key
w, width	width	sizes
h, height	height	sizes
minW, minWidth	min-width	sizes
maxW, maxWidth	max-width	sizes
minH, minHeight	min-height	sizes
maxH, maxHeight	max-height	sizes
d, display	display	none
boxSize	width, height	sizes
verticalAlign	vertical-align	none
overflow	overflow	none
overflowX	overflowX	none
overflowY	overflowY	none

---------BACKGROUND --------
<Box
  bgImage="url('/images/gaara.png')"
  bgPosition="center"
  bgRepeat="no-repeat"
/>

Prop	CSS Property	Theme Key
bg, background	background	none
bgImage, backgroundImage	background-image	none
bgSize, backgroundSize	background-size	none
bgPosition,backgroundPosition	background-position	none
bgRepeat,backgroundRepeat	background-repeat	none
bgAttachment,backgroundAttachment	background-attachment	none

--------BORDERS----------
<Box border="1px" borderColor="gray.200">
  Card
</Box>
Prop	CSS Property	Theme Field
border	border	borders
borderWidth	border-width	borderWidths
borderStyle	border-style	borderStyles
borderColor	border-color	colors
borderTop	border-top	borders
borderTopWidth	border-top-width	borderWidths
borderTopStyle	border-top-style	borderStyles
borderTopColor	border-top-color	colors
borderRight	border-right	borders
borderEnd	border-inline-end	borders
borderRightWidth	border-right-width	borderWidths
borderEndWidth	border-inline-end-width	borderWidths
borderRightStyle	border-right-style	borderStyles
borderEndStyle	border-inline-end-style	borderStyles
borderRightColor	border-right-color	colors
borderEndColor	border-inline-end-color	colors
borderBottom	border-bottom	borders
borderBottomWidth	border-bottom-width	borderWidths
borderBottomStyle	border-bottom-style	borderStyles
borderBottomColor	border-bottom-color	colors
borderLeft	border-left	borders
borderStart	border-inline-start	borders
borderLeftWidth	border-left-width	borderWidths
borderStartWidth	border-inline-start-width	borderWidths
borderLeftStyle	border-left-style	borderStyles
borderStartStyle	border-inline-start-style	borderStyles
borderLeftColor	border-left-color	colors
borderStartColor	border-inline-start-color	colors
borderX	border-left , border-right	borders
borderY	border-top , border-bottom	borders

-------BORDER RADIUS-----------
// This button will have no right borderRadius
<Button borderRightRadius="0">Button 1</Button>
// This button will have no left borderRadius*/
<Button borderLeftRadius="0">Button 2</Button>
// top left and top right radius will be `theme.radii.md` => 4px
<Button borderTopRadius="md">Button 2</Button>
Prop	CSS Property	Theme Field
borderRadius	border-radius	radii
borderTopLeftRadius	border-top-left-radius	radii
borderTopStartRadius	border-top-left-radius in LTR,
border-top-right-radius in RTL	radii
borderTopRightRadius	border-top-right-radius	radii
borderTopEndRadius	border-top-right-radius in LTR,
border-top-left-radius in RTL	radii
borderBottomRightRadius	border-bottom-right-radius	radii
borderBottomEndRadius	border-bottom-right-radius in LTR,
border-bottom-left-radius in RTL	radii
borderBottomLeftRadius	border-bottom-left-radius	radii
borderBottomStartRadius	border-bottom-left-radius in LTR,
border-bottom-left-radius in RTL	radii
borderTopRadius	border-top-left-radius + border-top-right-radius	radii
borderRightRadius	border-top-right-radius + border-bottom-right-radius	radii
borderEndRadius	border-top-right-radius + border-bottom-right-radius	radii
borderBottomRadius	border-bottom-left-radius + border-bottom-right-radius	radii
borderLeftRadius	border-top-left-radius + border-bottom-left-radius	radii
borderStartRadius	border-top-left-radius + border-bottom-left-radius	radii

-----------POSITION------------
import { Box } from "@chakra-ui/react"
// verbose
<Box position="absolute">Cover</Box>
// shorthand
<Box pos="absolute">Cover</Box>
<Box pos="absolute" top="0" left="0">
  Absolute with top and left
</Box>
<Box pos="fixed" w="100%" zIndex={2}>
  Fixed with zIndex
</Box>

Prop	CSS Property	Theme Field
pos,position	position	none
zIndex	z-index	zIndices
top	top	space
right	right	space
bottom	bottom	space
left	left	space

------------SHADOW-------------
<Text textShadow="1px 1px #ff0000" m="6">
  Text with shadows
</Text>
<Text textShadow="1px 1px #ff0000" m="6">
  Text with shadows
</Text>

EDITABLE EXAMPLE
Prop	CSS Property	Theme Field
textShadow	text-shadow	shadows
boxShadow	box-shadow	shadows