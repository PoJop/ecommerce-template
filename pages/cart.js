import { Footer } from "../components/layers/footer";
import { Header } from "../components/layers/header/header";
import { Main } from "../components/layers/main";
import { PageTitle } from "../components/layers/page-title";
import Image from 'next/image'
import { QuantityInput } from "../components/templates/inputs/quantity-inp";
import React from "react";
import Link from "next/link";
import { DeleteIcon } from "../asset/icon";
import { useCart } from "../contextes/cart-conrext";
import { PATH_CATALOG_PAGE } from "../config/path-config";

export default function Error() {

    const { cartItems, deleteItem, predview, setPredview } = useCart()
    const [subtotal, setSubtotal] = React.useState(0)
    const [total, setTotal] = React.useState(0)
    const [promoCode, setPromoCode] = React.useState(0)
    React.useEffect(() => {
        if (cartItems) {
            let sub = 0
            for (let index = 0; index < cartItems.length; index++) {
                sub = sub + cartItems[index].price * cartItems[index].quantity
            }
            setSubtotal(sub)
        }
    }, [cartItems])
    React.useEffect(() => {
        setTotal(subtotal - promoCode)
    }, [subtotal,promoCode])
    return (
        <>
            <Header />
            <Main >
                <PageTitle title={"Cart"} breadcrumbs={['Home', 'Cart']} />
                <section className="flex flex-col gap-4 pb-8 lg:flex-row">
                    <div className="flex-[1_1_75%] bg-white rounded-md  h-max drop-shadow-3xl">
                        {cartItems && cartItems.length > 0 &&
                            <header className="hidden gap-[5%] p-4 text-sm text-gray-400 custom-border lg:flex">
                                <span className="flex-[1_1_50%] text-center">PRODUCT</span>
                                <span className="flex-[1_1_15%] text-center">PRICE</span>
                                <span className="flex-[1_1_15%] text-center">QUANTITY</span>
                                <span className="flex-[1_1_18%] text-center">SUM</span>
                            </header>
                        }
                        <div>
                            <ul>
                                {cartItems && <>
                                    {cartItems.length > 0 ?
                                        cartItems.map((e, i) =>
                                            <CartItem key={i} data={e} />)
                                        :
                                        <div className="flex flex-col items-center justify-center py-8 custom-border">
                                            <h4
                                                className="mb-4 text-xl text-gray-900"
                                            >Cart is empty</h4>
                                            <Link href={PATH_CATALOG_PAGE}>
                                                <a
                                                    className="w-full max-w-[160px]  min-w-[120px] transition-all text-center  bg-[#1e80e9c5] hover:bg-blue-800 py-2 rounded text-white"
                                                >Go to catalog</a>
                                            </Link>
                                        </div>
                                    }
                                </>}
                            </ul>
                        </div>
                        <div className="p-4">
                            <label className="flex items-center gap-2 text-sm text-gray-900">
                                Promo Code
                                <div className="flex items-center px-3 text-center border border-dull-gray rounded text-gray-600 text-[16px]">
                                    <input
                                        className="w-[100px] p-2 focus-visible:outline-none" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                    >
                                        <path fill="none" stroke="#999" d="M10 5L15 9.5 10 14"></path>
                                        <path fill="none" stroke="#999" d="M4 9.5L15 9.5"></path>
                                    </svg>
                                </div>
                            </label>
                        </div>
                    </div>
                    <aside className=" py-1 flex-[1_1_25%] sticky bg-white rounded-md top-20 h-max drop-shadow-3xl">
                        <div className="p-3 custom-border">
                            <div className="flex justify-between p-2">
                                <div className="text-gray-400 text-[16px]">Subtotal</div>
                                <div className=" text-[16px] text-gray-600">
                                    <span>$</span>
                                    <output>{subtotal}</output>
                                </div>

                            </div>
                            <div className="flex justify-between p-2">
                                <div className="text-gray-400 text-[16px]">Subtotal</div>
                                <div className=" text-[16px] text-red-light">
                                    <span>−$</span>
                                    <output>{promoCode}</output>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="flex justify-between p-2">
                                <div className="text-gray-400 text-[16px]">Total</div>
                                <div className="text-2xl font-medium text-gray-900">
                                    <span>$</span>
                                    <output>{total}</output>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <Link href={'#'}>
                                    <a className="w-full  min-w-[120px] transition-all text-center  bg-[#1e80e9c5] hover:bg-blue-800 py-2 rounded text-white">
                                        {"checkout".toUpperCase()}</a>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </section>
            </Main >
            <Footer />
        </>
    )
}

const CartItem = ({ data }) => {
    const { deleteItem, changeQuantity } = useCart()

    const [quantity, setQuantity] = React.useState(null)

    React.useEffect(() => {
        if (!quantity) {
            setQuantity(data.quantity)
        } else {
            changeQuantity(data.product_id, quantity)
        }
    }, [data.quantity, quantity])

    return (
        <li className="flex flex-wrap px-5 py-3 lg:flex-nowrap custom-border lg:gap-[5%]">
            <div className="flex-[1_1_100%] lg:flex-[1_1_50%] flex gap-3">
                <div className="  h-[140px] py-6 box-content flex-[1_1_50%]">
                    <img
                        className="object-contain h-[140px] w-[450px] m-auto"
                        src={data.image.url}
                        alt=""
                    />
                </div>
                <div className="flex-[1_1_65%] py-6">
                    <div className="text-sm text-gray-400">{data.label}</div>
                    <Link href={data.app_product_route}>
                        <a className="text-gray-600 text-[16px] hover:text-blue-800">{data.title}</a>
                    </Link>
                </div>
            </div>
            <div className="flex-[1_1_33%] lg:flex-[1_1_15%] flex justify-center items-center">
                <div className="text-center">
                    <div className="block text-sm text-gray-400 lg:hidden">Price</div>
                    <div className="text-gray-600 text-[16px]">${data.price}</div>
                </div>
            </div>
            <div className="flex-[1_1_33%] lg:flex-[1_1_15%] flex justify-center items-center">
                <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            </div>
            <div className="flex-[1_1_33%] lg:flex-[1_1_18%] flex gap-2 sm:gap:0 sm:justify-between justify-end items-center">
                <div className="text-center">
                    <div className="block text-sm text-gray-400 lg:hidden">Sum</div>
                    <div className="text-gray-600 text-[16px]">
                        <span>$</span>
                        <output>{data.price * quantity}</output>
                    </div>
                </div>
                <button
                    className="w-2 py-2"
                    onClick={() => { deleteItem(data.product_id) }}
                >
                    <DeleteIcon />
                </button>
            </div>
        </li>
    )
}