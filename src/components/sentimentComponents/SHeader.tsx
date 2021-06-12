import { Flex, Heading, Text } from '@chakra-ui/react';

type SHeaderProps = {
  asset: string;
};

//note: mess with fontSize for header perhaps

const SHeader = ({ asset }: SHeaderProps) => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center">
    <Heading fontSize="5vw">Sentiment</Heading>
    <Text
      fontSize={['0.9em', '1.3em']}
    >{`${asset} sentiment for the day`}</Text>
  </Flex>
);

export default SHeader;