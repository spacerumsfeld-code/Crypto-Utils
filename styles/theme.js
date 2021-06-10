import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  fonts: {
    body: 'Menlo'
  }
});

export default theme;


/*
#7aa6da
yellow
bg color #002451
lighter yellow #ffeead
light purple #ebbbff
orange #ffc58f
red negative tweets #d54e53
light green positive tweets #d1f1a9

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
}