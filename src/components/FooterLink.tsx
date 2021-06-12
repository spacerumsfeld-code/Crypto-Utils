import { Link, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type FooterLinkProps = {
  icon: IconType;
  href: string;
  label: string;
};

const FooterLink = ({ icon, href, label }: FooterLinkProps) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" boxSize="1.5em" color="white.100" />
  </Link>
);

export default FooterLink;
