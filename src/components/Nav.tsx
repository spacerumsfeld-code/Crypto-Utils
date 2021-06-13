import { SimpleGrid } from '@chakra-ui/react';

import SectionItem from '@/components/Section';

import assets from '@/lib/assets';

const Nav = ({ onClose }) => {
  return (
    <SimpleGrid width="100%" gap={8} minChildWidth="11rem" gridAutoRows="1fr">
      {assets.map((asset) => (
        <SectionItem key={asset.title} onClick={onClose} {...asset} />
      ))}
    </SimpleGrid>
  );
};

export default Nav;
