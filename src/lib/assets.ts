//to-do: import images

type Asset = {
  title: string;
  href: string;
  image: string;
};

const assets: Asset[] = [
  {
    title: 'Home',
    href: '/',
    image: '/section-image.png'
  },
  {
    title: 'About',
    href: '/about',
    image: '/section-image.png'
  },
  {
    title: 'Bitcoin',
    href: '/sentiment/bitcoin',
    image: '/bitcoin.svg'
  },
  {
    title: 'Ethereum',
    href: '/sentiment/ethereum',
    image: '/ethereum.svg'
  },
  {
    title: 'Dogecoin',
    href: '/sentiment/dogecoin',
    image: '/dogecoin.svg'
  }
];

export default assets;
