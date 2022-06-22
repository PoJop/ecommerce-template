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
                                <li>
                                    <button onClick={() => setPredview(true)}>
                                        <CartIcon color={"#666"} />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Container>
               
                <Sidebar close={setBurgerMenu} show={burgerMenu} position={"left"}>
                    <nav>
                        <ul>
                            <li>
                                <Accordion title={"Catalog"}>

                                </Accordion>
                            </li>
                            <li>
                                <Accordion title={"Brands"}>

                                </Accordion>
                            </li>
                            <li>
                                <Accordion title={"Pages"}>

                                </Accordion>
                            </li>
                        </ul>
                    </nav>
                </Sidebar>
            </div>
        </>
    )
}
