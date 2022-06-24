import React from "react";
import { CloseIcon } from "../../asset/icon";
import { appOverflowHidden } from "../../utils/utils";

export const Sidebar = ({ show, close, position = 'left', children, header = '' }) => {
    const [pos, setPos] = React.useState(null)
    React.useEffect(() => {
        switch (position) {
            case "left":
                setPos("-100%")
                break;
            case "right":
                setPos("100%")
                break;
            default:
                break;
        }
    }, [position])
    React.useEffect(() => { appOverflowHidden(show) }, [show])
    return (
        <>
            {close && position && pos &&
                <>
                    <aside style={{ transform: `translateX(${!show ? pos : 0})` }} className={`fixed ${position === "left" ? "left-0" : "right-0"}  top-0 z-[1000] h-screen transition duration-150 ease-out`}>

                        <div className="flex flex-col h-screen bg-white drop-shadow-3xl w-[100vw] max-w-[270px] lg:max-w-[350px]  ">

                            <header className={`flex justify-between px-4 py-3 border-b border-dull-gray `}>
                                <h3 className="text-2xl text-gray-900">{header}</h3>
                                <button onClick={() => close(false)}><CloseIcon /></button>
                            </header>
                            {children}
                        </div>
                    </aside>
                    <aside
                        onClick={() => close(false)}
                        className={`fixed ${!show && "hidden"}  z-[999] blur-sm top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.1)] transition duration-250 ${show ? "opacity-100" : "opacity-0"}`}
                    />
                </>
            }
        </>
    )
}