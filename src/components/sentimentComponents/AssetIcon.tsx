import { Box, Image } from '@chakra-ui/react';

type AssetIconProps = {
  asset: string;
};

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
