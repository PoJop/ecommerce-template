import Link from "next/link"
import React from "react"
import { useCart } from "../contextes/cart-conrext"
import { Sidebar } from "./sidebar"

export const CartPredview = () => {

    const { cartItems, predview, setPredview } = useCart()


    return (
        <Sidebar close={setPredview} show={predview} position={"right"}>
            <header className="flex justify-between p-4 border-b border-dull-gray">
                <h3 className="text-2xl text-gray-900">Cart</h3>
                <button onClick={() => setPredview(false)}>s</button>
            </header>
            <div className="p-4">
                {cartItems.length > 0 ? <ul>
                    {cartItems.map((e, i) =>
                        <></>
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
                <div>
                    <Link href={''}><a>{"view cart".toUpperCase()}</a></Link>
                    <Link href={''}><a>{"checkout".toUpperCase()}</a></Link>
                </div>
            </footer>
        </Sidebar>
    )
}