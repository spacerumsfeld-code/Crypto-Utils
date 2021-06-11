import { Flex, Box } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  // const bg = useColorModeValue('linkedin.100', 'gray.700');

  return (
    <Flex direction="column" minH="100%">
      <Header h="4rem" />
      <Box
        color="black"
        flex="1"
        padding="1rem"
        margin="0 auto"
        width="100%"
        bg="brand.bg"
      >
        {children}
      </Box>
      <Footer h="3rem" />
    </Flex>
  );
};

export default Layout;
