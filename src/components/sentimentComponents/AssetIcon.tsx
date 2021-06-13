import { Box, Image } from '@chakra-ui/react';

type AssetIconProps = {
  asset: string;
};

//note: mess with maxBlockSize of image perhaps
const AssetIcon = ({ asset }: AssetIconProps) => (
  <Box
    py="1em"
    // position={['relative', 'relative', 'relative', 'relative', 'absolute']}
    // top={[null, null, null, null, '5rem']}
    // left={[null, null, null, null, '27rem']}
  >
    <Image
      maxBlockSize="110px"
      src={`/${asset}.svg`}
      alt="Asset Icon"
      borderRadius="8px"
    />
  </Box>
);

export default AssetIcon;
