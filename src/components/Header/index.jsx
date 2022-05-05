import { Flex, Image, Text } from '@chakra-ui/react';

import { Burger } from './Burger';
import { Nav } from './styles';

export function Header(logo) {
  return (
    <Flex
      w={{base: '95%', md: '100%', lg: '100%'}}
      justifyContent={'center'}
    >
      <Flex
        justifyContent={'space-between'}
        minWidth={{base: '100%', '2xl': "1360px"}}
        align={'center'}
        padding="23px 0"
      >
        <Nav>
          <Image src={logo} />
          <Burger />
        </Nav>
      </Flex>
    </Flex>
  );
}