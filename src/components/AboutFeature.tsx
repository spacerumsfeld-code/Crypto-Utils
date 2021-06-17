const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack align="center">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text>{text}</Text>
    </Stack>
  );
};
