import { Flex, Heading, Text } from '@chakra-ui/react';

type SHeaderProps = {
  asset: string;
};

const SHeader = ({ asset }: SHeaderProps) => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    border="1px solid white"
  >
    <Heading fontSize="6vw">Sentiment</Heading>
    <Text fontSize={['0.9em', '1em']}>{`${asset} sentiment for the day`}</Text>
  </Flex>
);

export default SHeader;
