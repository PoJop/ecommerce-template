import React from "react";
import Link from "next/link"
import { Logo } from "../../../asset/logo";
import { Container } from "./header";
import { ArrowIcon, CartIcon } from "../../../asset/icon";
import { useCart } from "../../../contextes/cart-conrext";
import { CartPredview } from "../../cart-predview";

export const DesktopVertion = ({ scroll }) => {

    const [dropDown, setDropDown] = React.useState({ open: false, index: 0 })
    const [Element, setElement] = React.useState(<></>)

    const { predview, setPredview } = useCart()

    const arrNavDropDown = [
        { title: "Catalog", path: '', element: <>1</> },
        { title: "Brands", path: '', element: <>2</> },
        { title: "Pages", path: '', element: <>3</> },
    ]

    return (
        <>
            <div className={` hidden p-2 lg:block bg-gray-950  transition-all duration-[80ms] ${scroll > 30 && "h-0 overflow-hidden p-0"}`}>
                <Container>
                    <div className="flex justify-between">
                        <div></div>
                        <div>
                            <nav>
                                <ul className="flex gap-7">
                                    {["News", "FAQ", "Payment"].map((e, i) =>
                                        <li key={i}>
                                            <Link href={'#'}>
                                                <a className="text-sm text-gray-400">{e}</a>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Container>
            </div>


            <div className="hidden p-4 lg:block bg-[#ffffff] border-b border-dull-gray">
                <Container className={"flex justify-between"}>
                    <div className="flex items-center gap-6">
                        <Logo />
                        <nav>
                            <ul className="flex gap-4 text-sm">
                                {arrNavDropDown.map((e, i) =>
                                    <li
                                        key={i}
                                        className="px-2 text-gray-400 transition-all cursor-pointer hover:text-gray-600"
                                        onMouseOver={() => {
                                            setDropDown({ ...dropDown, open: true, index: i })
                                            setElement(e.element)
                                        }}
                                        onMouseOut={() => {
                                            setDropDown({ ...dropDown, open: false })
                                            setElement(<></>)
                                        }}
                                    >
                                        <Link href={'#'}>
                                            <a className="flex items-center gap-2 ">
                                                {e.title.toUpperCase()}
                                                <span className={`w-max ${dropDown.open && dropDown.index === i && "rotate-180"} transition-all  `}>
                                                    <ArrowIcon />
                                                </span>
                                            </a>
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <Link href={'#'}>
                                        <a className="px-2 text-gray-400 hover:text-gray-600">
                                            BLOG
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        <a className="px-2 text-gray-400 hover:text-gray-600">
                                            ABOUT
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        <a className="px-2 text-gray-400 hover:text-gray-600">
                                            CONTACTS
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-6">
                        <nav>
                            <ul>
                                <li>
                                    <button onClick={() => setPredview(true)}>
                                        <CartIcon color={"#666"} />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </div>
            {dropDown &&
                <div className="bg-white drop-shadow-xl">
                    {Element}
                </div>
            }
        </>
    )
}
