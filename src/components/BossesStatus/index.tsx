import { Container } from "./style"
import { color } from "../../utils/gerals"
import { Image } from "@chakra-ui/react"




const BossStatus: React.FC<{
    image: string | undefined;
    status?: any;
    width: string;
    height: string;
    scaleGray: number | null | undefined;
}> = ({ image, status, width, height, scaleGray }) => {
    return (
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
    );
};

export default BossStatus
