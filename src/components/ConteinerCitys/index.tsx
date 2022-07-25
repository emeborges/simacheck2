import { BossesDetailsProps } from '../../utils/types'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"

import ConteinerBosses from 'components/ConteinerBosses'

const ConteinerCitys: React.FC<{ bosses: BossesDetailsProps[] }> = ({
    bosses,
}) => {

    const groupBy = (key: string, arr: BossesDetailsProps[]) =>
        arr.reduce((cache: any, product: any) => {
            const property = product[key];
            if (property in cache) {
                return {
                    ...cache,
                    [property]: cache[property].concat(product),
                };
            }
            return { ...cache, [property]: [product] };
    }, {})

    const loresGroup = (key: string, arr: BossesDetailsProps[]) =>
        arr.reduce(
            (acc: any, cur: any) => {
                const property = cur[key];
                const ver = acc.items.includes(property);

                if (ver) {
                    acc;
                } else {
                    acc.items.push(property);
                }

                return acc;
            },
            {
                items: [],
            }
    )

    console.log(bosses)

    const lores = loresGroup("city", bosses);
    const bossesPorLore = groupBy("city", bosses);

    return (
        <Accordion  allowMultiple>

                {lores.items.map((lore:string) =>{
                    return (
                        <Box mb={'0.5rem'} >
                            <AccordionItem>
                                <AccordionButton
                                    _expanded={{ bg: "#131313", color: "white" }}
                                    >
                                    <Box flex="1" textAlign="center">
                                        {lore}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    <ConteinerBosses bosses={bossesPorLore[lore]} />
                                </AccordionPanel>
                            </AccordionItem>
                        </Box>
                    );
                })}

        </Accordion>
    );
};

export default ConteinerCitys;
