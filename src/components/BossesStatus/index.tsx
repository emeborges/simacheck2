import { Container } from "./style"
import { color } from "../../utils/gerals"
import { Image } from "@chakra-ui/react"




const BossStatus: React.FC<{ image: string | undefined, status?: any,width: string, height: string }> = ({ image, status, width, height }) => {

    function Chance(status: number) {
        if (status > 0.7) {
            return 'Altas Chances!'
        } else if (status > 0.4) {
            return 'Chances medianas'
        } else {
            return 'Baixa chance'
        }
    }

    return (
        <Container style={{ width: `${width}`, height: `${height}` }}>
            <div className="alo" style={{ background: `${color(status)}` }}>
                <div className="fundo">
                    <Image src={image} />
                </div>
            </div>
            {status &&
            <div className="legenda">
                <h5>{Chance(status)}</h5>
            </div>
            }
        </Container>
    )
}

export default BossStatus
