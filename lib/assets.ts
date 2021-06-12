//to-do: import images

//Here are the grid items that will appear on the home page and in the navbar: Home, About, and the collection of assets.

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
    href: '/Bitcoin',
    image: '/section-image.png'
  },
  {
    title: 'Ethereum',
    href: '/Ethereum',
    image: '/section-image.png'
  },
  {
    title: 'Dogecoin',
    href: '/Dogecoin',
    image: '/section-image.png'
  }
];

export default assets;
