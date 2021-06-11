import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  fonts: {
    body: 'Roboto'
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

/*
button styling

.button:hover, .button:focus {
  color: #fff;
  outline: 0;
}

.button-bitcoin, .button-take-snapshot {
  border-color: #ffeead;
  color: #fff;
  background-image: -webkit-linear-gradient(45deg, #ffeead 50%, transparent 50%);
  background-image: linear-gradient(45deg, #ebbbff, 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;
}*/
