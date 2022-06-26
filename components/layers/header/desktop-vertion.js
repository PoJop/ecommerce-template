import React from "react";
import Link from "next/link"
import { Logo } from "../../../asset/logo";
import { Container } from "./header";
import { ArrowIcon, CartIcon, CustomerIcon } from "../../../asset/icon";
import { useCart } from "../../../contextes/cart-conrext";
import { PATH_CATALOG_PAGE, PATH_HOME_PAGE } from "../../../config/path-config";
import { AccountBtn } from "./nav/account-btn";

export const DesktopVertion = ({ scroll }) => {

    const [dropDown, setDropDown] = React.useState({ open: false, index: 0 })
    const [Element, setElement] = React.useState(<></>)

    const { predview, setPredview, cartItems } = useCart()

    const arrNavDropDown = [
        { title: "Catalog", path: PATH_CATALOG_PAGE, element: <>1</> },
        { title: "Brands", path: '#', element: <>2</> },
        { title: "Pages", path: '#', element: <>3</> },
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
                        <Link href={PATH_HOME_PAGE}>
                            <a><Logo /></a>
                        </Link>
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
                                        <Link href={e.path}>
                                            <a className="flex items-center gap-2 ">
                                                {e.title.toUpperCase()}
                                                <span className={`w-max  ${dropDown.open && dropDown.index === i && "rotate-180"} transition-all  `}>
                                                    <ArrowIcon className="w-[11px]" />
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
                            <ul className="flex gap-7">
                                <li className="flex align-middle">
                                   <AccountBtn />
                                </li>
                                <li>
                                    <button
                                        className="flex flex-col items-center"
                                        onClick={() => setPredview(true)}>
                                        <span
                                            className="absolute rounded-full text-white translate-x-[10px] translate-y-[-7px] px-[5px] bg-blue-800 text-[.625rem]"
                                        >{cartItems && cartItems.length}</span>
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
