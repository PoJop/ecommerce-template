import React from "react";

export const Sidebar = ({ show, close, position = 'left', children }) => {
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
    return (
        <>
            {close && position && pos &&
                <>
                    <aside style={{transform: `translateX(${!show ? pos : 0})`}} className={`fixed ${position === "left" ? "left-0" : "right-0"}  top-0 z-[1000] h-screen transition duration-150 ease-out`}>

                        <div className="flex flex-col h-screen bg-white drop-shadow-3xl lg:w-[350px]">
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