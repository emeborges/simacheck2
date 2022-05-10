import styled from 'styled-components'
import { Flex, Image } from '@chakra-ui/react'

import { Burger } from './Burger'

const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export function Header(prop: { page:string } ) {
  return (
    <Flex
        w={'100vw'}

        px={'1rem'}
        bg={'black'}
        align={'center'}
    >
        <Nav >
            <Flex
                maxW={'1300px'}
                margin={'0 auto'}
                justify={'space-between'}
                minWidth={{
                    base: '100%',
                    md: '100%',
                    lg: '100%',
                    xl: '90%',
                    '2xl': '70%'
                    }}
            >
                <Image src='/img/logo.svg' maxW={{base: '50%', md:'30%'}} />
                <Burger page={prop.page} />
            </Flex>
        </Nav>
    </Flex>
  )
}
