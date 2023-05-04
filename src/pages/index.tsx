import { withsLogin } from 'utils/withsLogin';
import Container from '../components/Container';
import { Home } from '../components/Home';

interface Props {
    acess: boolean
}

const Index = ({ acess }: Props) => {
return(
    <Container maxW={"100vw"} overflowX={"hidden"}>
        <Home acess={acess} />
    </Container>
)};

export default Index

export const getServerSideProps = withsLogin()
