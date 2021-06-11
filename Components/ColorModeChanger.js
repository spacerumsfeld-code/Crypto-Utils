import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Sunicon, MoonIcon } from '@chakra-ui/icons';

const ColorModeChanger = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton size="lg" fontSize="lg" />;
  )
};

export default ColorModeChanger;
