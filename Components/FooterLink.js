import { Link, Icon } from '@chakra-ui/react';

const FooterLink = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
);

export default FooterLink;
