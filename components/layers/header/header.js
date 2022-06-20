import React from "react";


export const Header = () => {

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-[#ffffff] border-b border-dull-gray z-[900]">
                <DevicesVertion />
                <DesktopVertion />
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
const DesktopVertion = () => {

    return (
        <>
            <div className="hidden p-4 lg:block">
                DesktopVertion
            </div>
        </>
    )
}