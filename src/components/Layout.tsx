import { Flex, Box, useColorModeValue } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const bg = useColorModeValue('linkedin.100', 'gray.700');

  return (
    <Flex direction="column" h="100%">
      <Header h="4rem" />
      <Box
        color="black"
        flex="1"
        padding="1rem"
        margin="0 auto"
        width="100%"
        bg={bg}
        // bgImage="/main-background.svg"
        // bgSize="100v"
        // bgRepeat="no-repeat"
      >
        {children}
      </Box>
      <Footer h="3rem" />
    </Flex>
  );
};

export default Layout;
