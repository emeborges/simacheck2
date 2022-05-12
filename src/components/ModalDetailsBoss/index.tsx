
import { PluralOuSing } from "../../utils/gerals"
import { GiPocketBow } from 'react-icons/gi'
import { Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, } from "@chakra-ui/react"
import { Chart } from "react-google-charts";
import Link from 'next/link'


const ModalDetailsBoss: React.FC<{ boss: any, isOpen: any, onClose: any }> = ({ boss, isOpen, onClose }) => {

    const data = [
        [
            {
                type: "date",
                id: "Date",
            },
            {
                type: "number",
                id: "Won/Loss",
            },
        ],
        [new Date(2021, 6, 13), 1],
        [new Date(2020, 6, 13), 1],

    ];

    const options = {
        title: "Preview",
        calendar: {
            cellSize: 8,
        },
        colorAxis: {
            minValue: 0, colors: ['#c83728', '#ebc832', '#3cc85a']
        }
    };

    return (
        <Modal isCentered
            isOpen={isOpen}
            onClose={onClose}
            size={'xl'}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                >
                    <Image src={boss.image_url} />
                    <Flex
                        direction={'column'}
                        pl={'1rem'}
                    >
                        <Text
                            fontSize='lg'
                            minW={'100%'}
                            as={'span'}
                            isTruncated
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: '10%',
                                height: '10%',
                                position: 'absolute',
                                bottom: 0.5,
                                left: 0,
                                bg: '#BA1813',
                                zIndex: -1,
                            }}
                        >
                            {boss.display_name}
                        </Text>
                        <Text
                            fontSize='xs'
                        >
                            {boss.lore}
                        </Text>
                        <Text
                            fontSize='sm'
                            pt={'0.25rem'}
                        >
                            Última aparição: a {PluralOuSing(boss.days_since_last_view, 'dia', 'dias')}
                        </Text>

                    </Flex>

                </ModalHeader>

                <ModalCloseButton />

                <ModalBody >
                    <Flex justify={'space-between'}>
                        <Flex direction={'column'} maxW={'40%'} align={'center'}>
                            <Text fontSize='sm' textAlign={'center'}>
                                Hunting Status no Server:
                            </Text>
                            <Flex>
                                {boss.world_drop === "Forgotten" ?
                                    <GiPocketBow />
                                    :
                                    boss.world_drop === "Average" ?
                                        <>
                                            <GiPocketBow />
                                            <GiPocketBow />
                                        </>
                                        :
                                        <>
                                            <GiPocketBow />
                                            <GiPocketBow />
                                            <GiPocketBow />
                                        </>
                                }
                            </Flex>

                        </Flex>
                        <Flex direction={'column'} maxW={'40%'} align={'center'}>
                            <Text fontSize='sm' textAlign={'center'}>
                                Hunting Status Geral:
                            </Text>
                            <Flex >
                                {boss.overall_drop === "Forgotten" ?
                                    <GiPocketBow />
                                    :
                                    boss.overall_drop === "Average" ?
                                        <>
                                            <GiPocketBow />
                                            <GiPocketBow />
                                        </>
                                        :
                                        <>
                                            <GiPocketBow />
                                            <GiPocketBow />
                                            <GiPocketBow />
                                        </>
                                }
                            </Flex>

                        </Flex>
                    </Flex>
                    <Flex justify={'space-between'} mt={'2rem'} align={'center'}>
                        <Flex borderBottom={'1px solid #737380'} w={'80%'} />
                        <Text fontSize='sm' textAlign={'center'} pl={'0.5rem'}>
                            Área premium
                        </Text>
                    </Flex>
                    <Flex h={'220px'}>
                        <Flex margin={'0 auto'} overflowY={'hidden'} overflowX={{ base: 'auto', md: 'hidden' }} scrollSnapType={'x mandatory'}>
                            <Chart
                                chartType="Calendar"
                                height={'500px'}
                                width={'550px'}
                                data={data}
                                options={options}
                            />
                        </Flex>
                    </Flex>
                    <Flex justify={'space-around'} align={'center'}>
                        <Flex direction={'column'} align={'center'}>
                            <Text
                                fontSize='sm'
                                pt={'0.25rem'}
                            >
                                Próxima aparição calculada:
                            </Text>
                            <Text
                                fontSize='md'
                                pt={'0.25rem'}
                            >
                                15/12/2022
                            </Text>
                        </Flex>
                        <Flex cursor={'pointer'}>
                            <Link href={boss.wiki_url}>
                                <Image src={'/img/fandom.svg'} style={{ width: '80px' }} />

                            </Link>
                        </Flex>
                    </Flex>


                </ModalBody>

                <ModalFooter>
                    <Button mr={2} onClick={onClose}>
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalDetailsBoss
