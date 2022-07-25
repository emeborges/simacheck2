import { Container } from "./style"
import { color } from "../../utils/gerals"
import { Image } from "@chakra-ui/react"




const BossStatus: React.FC<{ image: string | undefined, status?: any,width: string, height: string }> = ({ image, status, width, height }) => {

    return (

        <Container style={{ width: `${width}`, height: `${height}` }}>
            <div className="alo" style={{ background: `${color(status)}`, color: '#fff' }}>
                <div className="fundo">
                    <Image src={image} />
                </div>
            </div>

        </Container>

    )
}

export default BossStatus
