import { Box, Image } from '@chakra-ui/react';

type AssetIconProps = {
  asset: string;
};

const AssetIcon = ({ asset }: AssetIconProps) => (
  <Box
    border="1px solid white"
    position={['relative', 'relative', 'relative', 'relative', 'absolute']}
    top={[null, '6rem']}
    left={[null, '10rem', '15rem']}
  >
    <Image
      maxBlockSize="150px"
      src={`/${asset}.png`}
      alt="Asset Icon"
      borderRadius="8px"
    />
  </Box>
);

export default AssetIcon;
