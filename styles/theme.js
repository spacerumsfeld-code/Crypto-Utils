import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  fonts: {
    body: 'Menlo'
  },
  colors: {
    brand: {
      white: '#002451',
      positive: '#d1f1a9',
      negative: '#d54e53',
      orange: '#ffc58f'
    }
  }
});

export default theme;

/*
#7aa6da
lighter yellow #ffeead
light purple #ebbbff



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
