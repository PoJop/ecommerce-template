import React from "react";


export const Header = () => {

    const [scroll, setScroll] = React.useState(0)

    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            setScroll(window.scrollY)
        });
    }, [])
    React.useEffect(() => {
        console.log(scroll)
    }, [scroll])

    return (
        <>
            <header className="fixed top-0 left-0 w-full border-b border-dull-gray z-[900]">
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
const DesktopVertion = ({ scroll }) => {

    return (
        <>
            <div className={`hidden p-4 lg:block bg-gray-950  transition-all duration-[80ms] ${scroll > 30 && "h-0 overflow-hidden p-0"}`}>

            </div>
            <div className="hidden p-4 lg:block bg-[#ffffff]">
                DesktopVertion
            </div>
        </>
    )
}