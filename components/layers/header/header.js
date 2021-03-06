import React from "react";
import { Logo } from "../../../asset/logo";
import { useCart } from "../../../contextes/cart-conrext";
import { CartPredview } from "../../templates/cart-predview";
import { DesktopVertion } from "./desktop-vertion/desktop-vertion";
import { DevicesVertion } from "./devices-vertion";


const Header = () => {

    const [scroll, setScroll] = React.useState(0)
    const { predview, setPredview } = useCart()

    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            setScroll(window.scrollY)
        });
    }, [])
    return (
        <>
            <header className="fixed top-0 left-0 w-full  z-[900]">
                <DevicesVertion />
                <DesktopVertion scroll={scroll} />
                <CartPredview close={setPredview} show={predview} position={"right"} />
            </header>
        </>
    )
}
export default React.memo(Header)

export const Container = ({ children, className }) => {

    return (
        <div className={`m-auto max-w-[1200px] ${className}`}>
            {children}
        </div>
    )
} 