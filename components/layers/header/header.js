import React from "react";
import { Logo } from "../../../asset/logo";
import { DesktopVertion } from "./desktop-vertion";


export const Header = () => {

    const [scroll, setScroll] = React.useState(0)

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
            </header>
        </>
    )
}

const DevicesVertion = () => {

    return (
        <>
            <div className="block p-2 lg:hidden">
                DevicesVertion
            </div>
        </>
    )
}


export const Container = ({ children, className }) => {

    return (
        <div className={`m-auto max-w-[1200px] ${className}`}>
            {children}
        </div>
    )
} 