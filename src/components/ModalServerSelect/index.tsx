import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Select,
    Spinner
    } from '@chakra-ui/react'
import { api } from 'utils/services';

const ModalSelectServer = ({isOpen, onClose}:any) => {
    const [servers, setServers] = useState([])
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState<any>()

    useEffect(() => {
        getServers()
    }, []);

    async function getServers() {
        try {
            const { data } = await api.get(`worlds`)
            setServers(data)
            setLoading(false)

        } catch (e) {
            console.log(e)
        }
    }

    function altPages(){
        onClose()

        if(value === undefined ){
            console.log('nulo')
        }else{
            router.push(`/radar/${value}`)

        }
    }


    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered blockScrollOnMount={false} >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Selecionar Servidor</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {loading === true ? <Spinner size='xl' /> :
                 <Select placeholder='Selecione o Servidor Desejado' onChange={e => setValue(e.target.value)}>
                    { servers.map((server, key) =>  <option key={key} value={server}>{server}</option>)}
                </Select>
                }


            </ModalBody>

            <ModalFooter>
                <Button
                    bg={'#e1e1e6'}
                    p={'0.5rem 2rem'}
                    display={'flex'}
                    flexDir={'column'}
                    justifyContent={'space-around'}
                    _hover={{ bg: '#737380', color:'#fff' }}
                    onClick={altPages}
                >
                    Ir!
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalSelectServer
