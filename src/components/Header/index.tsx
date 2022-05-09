import HeaderMobile from "components/HeaderMobile";
import HeaderWeb from "components/HeaderWeb";
import useWindowDimensions from "utils/useWindowDimension";



const Header: React.FC = () => {
    const { width } = useWindowDimensions();

    return (
        <>
            {width > 800 ? <HeaderWeb /> : <HeaderMobile />}
        </>
    )
}

export default Header
