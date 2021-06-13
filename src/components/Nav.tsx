import { SimpleGrid } from '@chakra-ui/react';

import SectionItem from '@/components/Section';

import assets from '@/lib/assets';

//future: when nextAuth is incorporated, create additional filter here to filter different utilies based on if there is a user or not. This will constrain an unregistered visitor to certain utilies displaying in the navbar. Once they log in and go to navigation, they will see the full list of utilies

type NavProps = {
  onClose: () => void;
};

const Nav = ({ onClose }: NavProps) => {
  return (
    <SimpleGrid width="100%" gap={8} minChildWidth="11rem" gridAutoRows="1fr">
      {assets.map((asset) => (
        <SectionItem key={asset.title} onClick={onClose} {...asset} />
      ))}
    </SimpleGrid>
  );
};

export default Nav;
