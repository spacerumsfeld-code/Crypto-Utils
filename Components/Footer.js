import { Flex, Text, Stack } from '@chakra-ui/react';
import { DiGithubBadge } from 'react-icons/di';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

import FooterLink from './FooterLink';

const links = [
  {
    icon: DiGithubBadge,
    label: 'github',
    href: 'https://github.com/spacerumsfeld-code'
  },
  {
    icon: IoLogoLinkedin,
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/nicholas-papadakis/'
  },
  {
    icon: MdEmail,
    label: 'email',
    href: 'mailto:nickfin2014@gmail.com'
  }
];

const Footer = ({ h }) => (
  <Flex h={h} justifyContent="center" alignItems="center">
    <Text fontSize="lg">Made by Nick Papadakis</Text>
    <Stack ml={2} direction="row" spacing="12px">
      {links.map((link) => {
        return <FooterLink key={link.href} {...link} />;
      })}
    </Stack>
  </Flex>
);

export default Footer;
