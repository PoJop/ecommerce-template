import Link from "next/link"
import React from "react"
import { useCart } from "../contextes/cart-conrext"
import { Sidebar } from "./sidebar"

export const CartPredview = () => {

    const { cartItems, predview, setPredview } = useCart()


    return (
        <Sidebar close={setPredview} show={predview} position={"right"} header={"Cart"}>

            <div className="p-4">
                {cartItems.length > 0 ? <ul>
                    {cartItems.map((e, i) =>
                        <li key={i} className="flex border-b border-dull-gray last:border-b-0">
                            <div className="flex-[1_1_25%] p-2">
                                <img src={e.image.url} />
                            </div>
                            <div className="flex-[1_1_75%]">
                                <div>
                                    <span className="text-[.6875rem] text-gray-400">{e.Label}</span>
                                    <Link href={'#'}>
                                        <a>
                                            <h4 className="text-sm text-gray-600 hover:text-blue-800">{e.title}</h4>
                                        </a>
                                    </Link>
                                </div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <strong className="text-sm font-normal text-gray-600">${e.price}</strong>
                                    <span className="text-[.6875rem] text-gray-400">{1}&#215;{e.price}</span>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
                    :
                    <div>
                        <h4>Cart is empty</h4>
                    </div>
                }

            </div>
            <footer className="p-4 border-t border-dull-gray">
                <div className="flex justify-between">
                    <strong className="text-xl font-normal text-gray-400">Subtotal</strong>
                    <output className="text-xl font-medium text-gray-900" >$122</output>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    <Link href={''}>
                        <a className="flex-[1_1_45%] min-w-[120px] transition-all text-center py-2 rounded text-gray-900 border border-[#9996] hover:border-gray-400">
                            {"view cart".toUpperCase()}</a>
                    </Link>
                    <Link href={''}>
                        <a className="flex-[1_1_45%] min-w-[120px] transition-all text-center  bg-[#1e80e9c5] hover:bg-blue-800 py-2 rounded text-white">
                            {"checkout".toUpperCase()}</a>
                    </Link>
                </div>
            </footer>
        </Sidebar>
    )
}