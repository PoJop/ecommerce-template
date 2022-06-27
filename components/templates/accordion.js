import React from "react";
import useResizeObserver from '@react-hook/resize-observer'
import { ArrowIcon } from "../../asset/icon";

const useSize = (target) => {
    const [size, setSize] = React.useState()

    React.useLayoutEffect(() => {
        setSize(target.current.getBoundingClientRect())
    }, [target])

    useResizeObserver(target, (entry) => setSize(entry.contentRect))
    return size
}

export const Accordion = ({ title, titleClass, children, icon = 'plus' }) => {
    const [open, setOpen] = React.useState(false)
    const target = React.useRef(null)
    const size = useSize(target)

    return (
        <div className="p-2 custom-border">
            <div className="p-2 text-2xl">
                <button
                    className={`flex gap-4 items-center justify-between w-full text-left  hover:text-gray-600 ${titleClass}`}
                    onClick={() => setOpen(!open)}
                >{title}
                    {icon === 'plus' &&
                        <div>
                            <svg
                                className="w-[12px]"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path fill="#666666" d="M0 6H14V8H0z"></path>
                                <path fill="#666666" d="M8 0H22V2H8z" transform={`rotate(${open ? "-90 0 2" : "90 8 0"} )`}></path>
                            </svg>
                        </div>
                    }
                    {icon === 'Arrow' &&
                        <span style={{ transform: `rotate(${open ? "0" : "90deg"} )` }} className="transition-all">
                            <ArrowIcon />
                        </span>
                    }
                </button>
            </div>
            <div
                style={{ height: `${open && size ? size.height + 16 : "0"}px`, transition: "ease-in .1s" }}
                className={`overflow-hidden`}
            >
                <div ref={target} className="p-2 ">
                    {children}
                </div>
            </div>
        </div>
    )
}