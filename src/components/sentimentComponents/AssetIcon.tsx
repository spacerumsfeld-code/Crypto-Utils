import { Box, Image } from '@chakra-ui/react';

const AssetIcon = () => (
  <Box
    border="1px solid white"
    position={['relative', 'relative', 'relative', 'relative', 'absolute']}
    top={[null, '6rem']}
    left={[null, '10rem', '15rem']}
  >
    <Image
      maxBlockSize="150px"
      src="/section-image.png"
      alt="section image"
      borderRadius="8px"
    />
  </Box>
);

export default AssetIcon;
