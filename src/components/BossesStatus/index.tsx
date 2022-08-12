import { Container } from "./style"
import { color } from "../../utils/gerals"
import { Image, Tooltip } from "@chakra-ui/react"




const BossStatus: React.FC<{
    image: string | undefined;
    status?: any;
    width: string;
    height: string;
    scaleGray: number | null | undefined;
    display?: string;
}> = ({ image, status, width, height, scaleGray, display }) => {
    return (
        <Tooltip label={display}>
            <Container style={{ width: `${width}`, height: `${height}` }}>
                <div
                    className="alo"
                    style={{ background: `${color(status)}`, color: "#fff" }}
                >
                    <div className="fundo">
                        <Image src={image} filter={`grayscale(${scaleGray})`} />
                    </div>
                </div>
            </Container>
        </Tooltip>
    );
};

export default BossStatus
