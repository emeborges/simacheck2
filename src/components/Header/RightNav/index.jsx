import { useEffect } from 'react';
import { Text, Flex, Button } from '@chakra-ui/react';


import { Ul } from './styles';
import Link from 'next/link';

export function RightNav({ open, setOpen, page }) {
  useEffect(() => {
    if(open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const links = [
        {
            'link': 'home',
            'escrita': 'Home',
            'referencia':'/'
        },
        {
            'link': 'tools',
            'escrita': 'SimaTools',
            'referencia':'/tools'
        },
        {
            'link': 'blog',
            'escrita': 'SimaJournal',
            'referencia':'/'
        },
        {
            'link': 'blog',
            'escrita': 'SimaJournal',
            'referencia':'/'
        },
        {
            'link': 'faq',
            'escrita': 'FAQ',
            'referencia':'/'
        }
  ]

  return (
    <Ul open={open}>
        {
            links.map( (link, key) => {
                return(
                    <Link href={link.referencia}>
                        <Flex
                            key={key}
                            align={'center'}
                            justifyContent={'center'}
                            cursor={'pointer'}
                            borderWidth={{base: '80%', md: '100%'}}
                            borderBottom={{ md:page === link.link ? '4px solid #BA1813' : 'none'}}
                            _hover={{
                                borderBottom: page !== link.link ? '2px solid #BA1813' : '4px solid #BA1813',
                            }}
                            m={{base:'1rem 0rem' , md:'0rem 0.5rem 0rem'}}
                            >

                            <Text
                                width={'100%'}
                                minW={'6rem'}
                                textAlign={'center'}
                                fontSize={'1rem'}
                                color={page === link.link ? '#FEFEFE' : '#4E4E52'}
                                _hover={{
                                    color:'#eae9e9',
                                    textDecoration: 'none',
                                }}
                                onClick={() => setOpen(false)}
                                cursor={'pointer'}
                                >
                                {link.escrita}
                            </Text>
                        </Flex>
                    </Link>
                )})
        }

        <Flex
            align={'center'}
            justifyContent={'center'}
            mr={'1rem'}
        >
            <Text
                fontSize={'0.8rem'}
                color={'#FEFEFE'}
                mr={'0.5rem'}
                cursor={'pointer'}
            >
                Cadastrar-se
            </Text>
            <Button>
                Entrar
            </Button>
        </Flex>

    </Ul>
  );
}
