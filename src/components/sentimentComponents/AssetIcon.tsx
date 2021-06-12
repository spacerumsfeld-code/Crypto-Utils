import { Box, Image } from '@chakra-ui/react';

type AssetIconProps = {
  asset: string;
};

const AssetIcon = ({ asset }: AssetIconProps) => (
  <Box
    border="1px solid white"
    position={['relative', 'relative', 'relative', 'relative', 'absolute']}
    top={[null, null, null, null, '4rem']}
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
