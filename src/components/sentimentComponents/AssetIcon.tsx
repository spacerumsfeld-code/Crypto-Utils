import { Box, Image } from '@chakra-ui/react';

type AssetIconProps = {
  asset: string;
};

//note: mess with maxBlockSize of image perhaps
const AssetIcon = ({ asset }: AssetIconProps) => (
  <Box
    position={['relative', 'relative', 'relative', 'relative', 'absolute']}
    top={[null, null, null, null, '5rem']}
    left={[null, null, null, null, '26rem']}
  >
    <Image
      maxBlockSize="110px"
      src={`/${asset}.png`}
      alt="Asset Icon"
      borderRadius="8px"
    />
  </Box>
);

export default AssetIcon;
