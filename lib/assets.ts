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
    href: '/bitcoin',
    image: '/section-image.png'
  },
  {
    title: 'Ethereum',
    href: '/ethereum',
    image: '/section-image.png'
  },
  {
    title: 'Dogecoin',
    href: '/dogecoin',
    image: '/section-image.png'
  }
];

export default assets;
