import Link from "next/link"
import React from "react"
import { DeleteIcon } from "../../asset/icon"
import { PATH_CART_PAGE, PATH_CHECKOUT_PAGE } from "../../config/path-config"
import { useCart } from "../../contextes/cart-conrext"
import { formatPrice } from "../../utils/utils"
import { Sidebar } from "../templates/sidebar"

export const CartPredview = () => {

    const { cartItems, predview, setPredview, deleteItem } = useCart()
    const [subtotal, setSubtotal] = React.useState(0)
    React.useEffect(() => {
        if (cartItems) {
            let sub = 0
            for (let index = 0; index < cartItems.length; index++) {
                sub = sub + cartItems[index].price * cartItems[index].quantity
            }
            setSubtotal(sub)
        }
    }, [cartItems])
    return (
        <Sidebar close={setPredview} show={predview} position={"right"} header={"Cart"}>

            <div className="overflow-y-auto ">
                <div className="p-4">
                    {cartItems && cartItems.length > 0 ?
                        <ul>
                            {cartItems.map((e, i) =>
                            
                                <li
                                    key={i}
                                    className="flex p-2 border-b border-dull-gray last:border-b-0 cart-predview-item">
                                    <div className="flex-[1_1_25%] p-2">
                                        <img src={e.image.url} />
                                    </div>
                                    <div className="flex-[1_1_75%]">
                                        <div>
                                            <span className="text-[.6875rem] text-gray-400">{e.Label}</span>
                                            <Link href={e.app_product_route}>
                                                <a  onClick={() => setPredview(false)}>
                                                    <h4 className="text-sm text-gray-600 hover:text-blue-800">{e.title}</h4>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <strong className="text-sm font-normal text-gray-600">${formatPrice(e.price)}</strong>
                                            <span className="text-[.6875rem] text-gray-400">{e.quantity}&#215;{formatPrice(Number(e.quantity) * Number(e.price))}</span>
                                        </div>
                                    </div>
                                    <div className="transition-all ">
                                        <button
                                            className="w-2 py-2"
                                            onClick={() => { deleteItem(e.product_id) }}
                                        >
                                            <DeleteIcon />
                                        </button>
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
                <div className="p-4 border-t border-dull-gray">
                    <div className="flex justify-between">
                        <strong className="text-xl font-normal text-gray-400">Subtotal</strong>
                        <output className="text-xl font-medium text-gray-900" >${formatPrice(subtotal)}</output>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <Link href={PATH_CART_PAGE}>
                            <a onClick={() => setPredview(false)} className="flex-[1_1_45%] min-w-[120px] transition-all text-center py-2 rounded text-gray-900 border border-[#9996] hover:border-gray-400">
                                {"view cart".toUpperCase()}</a>
                        </Link>
                        <Link href={PATH_CHECKOUT_PAGE}>
                            <a onClick={() => setPredview(false)} className="flex-[1_1_45%] min-w-[120px] transition-all text-center  bg-[#1e80e9c5] hover:bg-blue-800 py-2 rounded text-white">
                                {"checkout".toUpperCase()}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}