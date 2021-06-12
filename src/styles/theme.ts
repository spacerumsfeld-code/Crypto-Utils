import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  fonts: {
    body: 'Roboto'
  },
  styles: {
    global: (props) => ({
      'body, h2, p': {
        color: mode('gray.700', 'whiteAlpha.900')(props)
      }
    })
  },
  colors: {
    brand: {
      text1: '#ebbbff',
      text2: '#7aa6da',
      bg: '#002451',
      positive: '#d1f1a9',
      negative: '#d54e53',
      orange: '#ffc58f',
      yellow: '#ffeead'
    }
  }
});

export default theme;
