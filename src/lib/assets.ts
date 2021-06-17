type Asset = {
  title: string;
  href: string;
  image: string;
};

const assets: Asset[] = [
  {
    title: 'Home',
    href: '/',
    image: '/about-arrow.svg'
  },
  {
    title: 'About',
    href: '/about',
    image: '/tool.svg'
  },
  {
    title: 'Bitcoin',
    href: '/sentiment/bitcoin',
    image: '/Bitcoin.svg'
  },
  {
    title: 'Ethereum',
    href: '/sentiment/ethereum',
    image: '/Ethereum.svg'
  },
  {
    title: 'Dogecoin',
    href: '/sentiment/dogecoin',
    image: '/Dogecoin.svg'
  }
];

export default assets;
