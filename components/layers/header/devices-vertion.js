import React from "react";
import Link from "next/link"
import { Logo } from "../../../asset/logo";
import { Container } from "./header";
import { BurgerMenuIcon, CartIcon } from "../../../asset/icon";
import { useCart } from "../../../contextes/cart-conrext";
import { CartPredview } from "../../cart-predview";
import { Sidebar } from "../../sidebar";
import { Accordion } from "../../accordion/accordion";

export const DevicesVertion = ({ scroll }) => {
    const [burgerMenu, setBurgerMenu] = React.useState(false)

    const { predview, setPredview } = useCart()

    return (
        <>
            <div className="block p-2 lg:hidden bg-[#ffffff] border-b border-dull-gray">
                <Container className={"flex justify-between"}>
                    <div className="flex items-center gap-4">
                        <button onClick={() => { setBurgerMenu(true) }}>
                            <BurgerMenuIcon />
                        </button>
                        <Logo />
                    </div>
                    <div className="flex items-center gap-6">
                        <nav>
                            <ul>
                                <li className="flex align-middle">
                                    <button onClick={() => setPredview(true)}>
                                        <CartIcon color={"#666"} />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Container>

                <Sidebar close={setBurgerMenu} show={burgerMenu} position={"left"} header={"Menu"}>
                    <div className="p-4 custom-border">
                        <a href="#" className="text-base font-bold text-gray-400">8 800 799 99 99</a>
                        <div className="text-[.6875rem] text-gray-400">
                            <div>St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28</div>
                            <div>Daily 10:00–22:00</div>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Accordion title={"Catalog"} titleClass={"text-gray-400 text-sm"} icon={"Arrow"}>

                                </Accordion>
                            </li>
                            <li>
                                <Accordion title={"Brands"} titleClass={"text-gray-400 text-sm"} icon={"Arrow"}>

                                </Accordion>
                            </li>
                            <li>
                                <Accordion title={"Pages"} titleClass={"text-gray-400 text-sm"} icon={"Arrow"}>

                                </Accordion>
                            </li>
                        </ul>
                    </nav>
                </Sidebar>
            </div>
        </>
    )
}
