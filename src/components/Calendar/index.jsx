
import { PluralOuSing, Porcentagem } from "../../utils/gerals"
import { Badge, Box, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stat, StatArrow, StatHelpText,  Text, Tooltip, } from "@chakra-ui/react"
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const Calendar = ({ boss }) => {

    console.log(boss);
    function dataChart(prediction_frame) {
        if (prediction_frame) {
            let final = [];
            // let detalhes = [
            //     {
            //         type: "date",
            //         id: "Date",
            //     },
            //     {
            //         type: "number",
            //         id: "Won/Loss",
            //     },
            // ];

            // final.push(detalhes);

            for (let ele of prediction_frame) {
                let cem = ele.colour_frame * 100;
                let arred = cem.toFixed(1);
                final.push({ date: ele.date, count: arred });
            }

            return final;
        }
    }

    const today = new Date();
    const randomValues = getRange(200).map((index) => {
        return {
            date: shiftDate(today, -index),
            count: getRandomInt(1, 3),
        };
    });

    function shiftDate(date, numDays) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + numDays);
        return newDate;
    }

    function getRange(count) {
        return Array.from({ length: count }, (_, i) => i);
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const value = [
        { date: "2016/01/11", count: 2 },
        { date: "2016/01/12", count: 20 },
        { date: "2016/01/13", count: 10 },
        ...[...Array(17)].map((_, idx) => ({
            date: `2016/02/${idx + 10}`,
            count: idx,
            content: "",
        })),
        { date: "2016/04/11", count: 2 },
        { date: "2016/05/01", count: 5 },
        { date: "2016/05/02", count: 5 },
        { date: "2016/05/04", count: 11 },
    ];

    return (
        <Box
            maxH={"200px"}
            overflowY={"auto"}
            css={{
                "&::-webkit-scrollbar": {
                    width: "4px",
                },
                "&::-webkit-scrollbar-track": {
                    width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "#000",
                    borderRadius: "24px",
                },
            }}
        >
            <CalendarHeatmap
                startDate={shiftDate(today, -150)}
                endDate={today}
                values={randomValues}
                classForValue={(value) => {
                    if (!value) {
                        return "color-empty";
                    }
                    return `color-github-${value.count}`;
                }}
                tooltipDataAttrs={(value) => {
                    return <Tooltip label={value.date}></Tooltip>;
                }}
                showWeekdayLabels={true}
                onClick={(value) =>
                    alert(`Clicked on value with count: ${value.count}`)
                }
            />
        </Box>
    );
};

export default Calendar;
