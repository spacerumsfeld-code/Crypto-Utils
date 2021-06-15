import { Flex, Heading, Text } from '@chakra-ui/react';

type SHeaderProps = {
  asset: string;
};

const SHeader = ({ asset }: SHeaderProps) => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center">
    <Heading fontSize="5vw">Sentiment</Heading>
    <Text
      fontSize={['0.9em', '1.3em']}
    >{`Your ${asset} sentiment for the day, as of PLACEHOLDER`}</Text>
  </Flex>
);

export default SHeader;
