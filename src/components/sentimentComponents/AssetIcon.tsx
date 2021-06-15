import { Box, Image } from '@chakra-ui/react';

const argh: string = 'what the hell';

type AssetIconProps = {
  asset: string;
};

//note: mess with maxBlockSize of image perhaps
const AssetIcon = ({ asset }: AssetIconProps) => (
  <Box py="1em">
    <Image
      maxBlockSize="110px"
      src={`/${asset}.svg`}
      alt="Asset Icon"
      borderRadius="8px"
    />
  </Box>
);

export default AssetIcon;
