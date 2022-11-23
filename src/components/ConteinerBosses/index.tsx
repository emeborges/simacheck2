import { BossesDetailsProps } from '../../utils/types'
import { color, Porcentagem } from "../../utils/gerals"
import {
    Flex,
    Image,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import ModalDetailsBoss from '../ModalDetailsBoss'
import { useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";




const ConteinerBosses: React.FC<{ bosses: BossesDetailsProps[] }> = ({ bosses }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [clickedBoss, setClickedBoss] = useState<BossesDetailsProps>();

    function openModal(boss:BossesDetailsProps) {
        setClickedBoss(boss)
        onOpen()
    }

    return (
        <Flex wrap={"wrap"} justify={"space-around"}>
            {bosses?.map((boss) => (
                <Flex
                    shadow={
                        "0 1px 5px 0 rgb(0 0 0 / 10%), 0 1px 5px 0 rgb(0 0 0 / 6%)"
                    }
                    m={"0.2rem 0.2rem"}
                    w={{ base: "100%", md: "32%", lg: "15rem" }}
                    flexDir={"column"}
                    align={"center"}
                    justify={"center"}
                    cursor={"pointer"}
                    onClick={() => openModal(boss)}
                    key={boss.boss}
                >
                    <Flex w={"100%"} direction={"column"}>
                        <Flex
                            direction={"column"}
                            pb={"0.75rem"}
                            bg={color(boss.oa_colour_frame!, 0.3)}
                            transition={"0.2s all"}
                            _hover={{
                                bg: color(boss.oa_colour_frame!, 0.4),
                            }}
                        >
                            <Text
                                fontSize="lg"
                                minW={"100%"}
                                as={"span"}
                                isTruncated
                                position={"relative"}
                                p={"0.5rem 0.5rem 0rem"}
                                _after={{
                                    content: "''",
                                    width:
                                        boss.oa_colour_frame! === 0
                                            ? "5%"
                                            : `${Porcentagem(
                                                  boss.oa_colour_frame!
                                              )}%`,
                                    height: "15%",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    bg: `${color(boss.oa_colour_frame!)}`,
                                    zIndex: -1,
                                }}
                            >
                                {boss?.display_name}
                            </Text>
                            <Text fontSize="xs" p={"0rem 0.5rem 0rem"}>
                                {boss?.lore}
                            </Text>
                        </Flex>
                        <Text fontSize={"0.9rem"} p={"0.5rem 0.5rem 0rem"}>
                            {boss?.resp.length > 1 ? "Resps:" : "Resp:"}
                        </Text>
                        <Flex
                            width={"100%"}
                            justify={"space-between"}
                            p={"0rem 0.5rem 0.5rem"}
                        >
                            <Flex
                                w={"50%"}
                                maxW={"7rem"}
                                flexWrap={"wrap"}
                                justify={"space-between"}
                            >
                                {boss?.resp.map((resp) => (
                                    <Flex
                                        key={resp.colour_frame}
                                        minW={"2.5rem"}
                                        display={"flex"}
                                        justify={"center"}
                                        fontSize={"0.9rem"}
                                        color={"gray.500"}
                                        align={"center"}
                                    >
                                        <IoMdArrowDropup fontSize={"1rem"} />
                                        {Porcentagem(resp.current_prob!)}%
                                    </Flex>
                                ))}
                            </Flex>
                            <Flex w={"50%"} justify={"center"}>
                                <Image src={boss.gif_url} />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            ))}

            <ModalDetailsBoss
                boss={clickedBoss}
                isOpen={isOpen}
                onClose={onClose}
            />
        </Flex>
    );
}

export default ConteinerBosses
