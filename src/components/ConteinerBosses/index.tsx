import { BossesDetailsProps } from '../../utils/types'
import BossStatus from "../BossesStatus"
import { Porcentagem } from "../../utils/gerals"
import { Flex, Stat, StatArrow, StatHelpText, StatLabel, Text, useDisclosure } from "@chakra-ui/react"
import ModalDetailsBoss from '../ModalDetailsBoss'
import { useState } from 'react'




const ConteinerBosses: React.FC<{ bosses: BossesDetailsProps[] }> = ({ bosses }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [clickedBoss, setClickedBoss] = useState({})

    function openModal(boss:BossesDetailsProps) {
        setClickedBoss(boss)
        onOpen()
    }

    return (
        <Flex wrap={'wrap'} justify={'space-between'}>
            {bosses?.map((boss =>
                <>
                    <Flex
                        shadow={'0 1px 5px 0 rgb(0 0 0 / 10%), 0 1px 5px 0 rgb(0 0 0 / 6%)'}
                        m={'0.25rem 0rem'}
                        w={{ base: '100%', md: '48%', lg: '18rem' }}
                        h={'6rem'}
                        align={'center'}
                        cursor={'pointer'}
                        onClick={() => openModal(boss)}
                    >
                        <BossStatus
                            width='5rem'
                            height='5rem'
                            image={boss?.image_url}
                            status={boss?.colour_frame}
                        />
                        <Flex
                            minW={'70%'}
                            maxW={'70%'}
                            direction={'column'}
                        >
                            <Flex
                                direction={'column'}
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
                                    {boss?.display_name}
                                </Text>
                                <Text
                                    fontSize='xs'
                                >
                                    {boss?.lore}
                                </Text>
                            </Flex>
                            <Flex>

                            </Flex>
                            <Flex
                                justify={'s'}
                                width={'100%'}
                            >
                                <Stat>
                                    <StatLabel
                                        fontSize={'80%'}
                                    >
                                        Resp 1:
                                    </StatLabel>
                                    <StatHelpText>
                                        <StatArrow type={boss.colour_frame! > 0.5 ? 'increase' : 'decrease'} />
                                        {Porcentagem(boss.current_prob!)}%
                                    </StatHelpText>
                                </Stat>
                                <Stat >
                                    <StatLabel fontSize={'80%'}>Chance:</StatLabel>
                                    <StatHelpText>
                                        <StatArrow type={boss.colour_frame! > 0.5 ? 'increase' : 'decrease'} />
                                        {Porcentagem(boss.current_prob!)}%
                                    </StatHelpText>
                                </Stat>
                                <Stat >
                                    <StatLabel fontSize={'80%'}>Chance:</StatLabel>
                                    <StatHelpText>
                                        <StatArrow type={boss.colour_frame! > 0.5 ? 'increase' : 'decrease'} />
                                        {Porcentagem(boss.current_prob!)}%
                                    </StatHelpText>
                                </Stat>
                                <Stat >
                                    <StatLabel fontSize={'80%'}>Chance:</StatLabel>
                                    <StatHelpText>
                                        <StatArrow type={boss.colour_frame! > 0.5 ? 'increase' : 'decrease'} />
                                        {Porcentagem(boss.current_prob!)}%
                                    </StatHelpText>
                                </Stat>
                            </Flex>
                        </Flex>
                    </Flex>
                </>
            ))
            }

            <ModalDetailsBoss boss={clickedBoss} isOpen={isOpen} onClose={onClose} />





        </Flex >
    )
}

export default ConteinerBosses
