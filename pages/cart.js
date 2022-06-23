import { Footer } from "../components/layers/footer";
import { Header } from "../components/layers/header/header";
import { Main } from "../components/layers/main";
import { PageTitle } from "../components/layers/page-title";
import Image from 'next/image'
import { QuantityInput } from "../components/templates/inputs/quantity-inp";
import React from "react";
import Link from "next/link";
import { DeleteIcon } from "../asset/icon";

export default function Error() {

    return (
        <>
            <Header />
            <Main >
                <PageTitle title={"Cart"} breadcrumbs={['Home', 'Cart']} />
                <section className="flex flex-col gap-4 pb-8 lg:flex-row">
                    <div className="flex-[1_1_75%] bg-white rounded-md  h-max drop-shadow-3xl">
                        <header className="hidden gap-[5%] p-4 text-sm text-gray-400 custom-border lg:flex">
                            <span className="flex-[1_1_50%] text-center">PRODUCT</span>
                            <span className="flex-[1_1_15%] text-center">PRICE</span>
                            <span className="flex-[1_1_15%] text-center">QUANTITY</span>
                            <span className="flex-[1_1_18%] text-center">SUM</span>
                        </header>
                        <div>
                            <ul>
                                <CartItem />
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
                                    <output>3148</output>
                                </div>

                            </div>
                            <div className="flex justify-between p-2">
                                <div className="text-gray-400 text-[16px]">Subtotal</div>
                                <div className=" text-[16px] text-red-light">
                                    <span>−$</span>
                                    <output>29</output>
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="flex justify-between p-2">
                                <div className="text-gray-400 text-[16px]">Total</div>
                                <div className="text-2xl font-medium text-gray-900">
                                    <span>$</span>
                                    <output>3119</output>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <Link href={''}>
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

const CartItem = () => {

    const [quantity, setQuantity] = React.useState(1)

    return (
        <li className="flex flex-wrap px-5 py-3 lg:flex-nowrap custom-border lg:gap-[5%]">
            <div className="flex-[1_1_100%] lg:flex-[1_1_50%] flex gap-3">
                <div className=" max-w-[250px] max-h-[140px] py-6 box-content	flex-[1_1_35%]">
                    <Image
                        src="https://chekromul.github.io/uikit-ecommerce-template/images/products/2/2-small.jpg"
                        alt="Picture of the author"
                        layout="responsive"
                        height={1}
                        width={2}
                    />
                </div>
                <div className="flex-[1_1_65%] py-6">
                    <div className="text-sm text-gray-400">Laptop</div>
                    <Link href={"#"}>
                        <a className="text-gray-600 text-[16px] hover:text-blue-800">{`Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)`}</a>
                    </Link>
                </div>
            </div>
            <div className="flex-[1_1_33%] lg:flex-[1_1_15%] flex justify-center items-center">
                <div className="text-center">
                    <div className="block text-sm text-gray-400 lg:hidden">Price</div>
                    <div className="text-gray-600 text-[16px]">$1599.00</div>
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
                        <output>1599.00</output>
                    </div>
                </div>
                <button>
                    <DeleteIcon />
                </button>
            </div>
        </li>
    )
}