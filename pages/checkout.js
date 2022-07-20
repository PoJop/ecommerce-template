import { Footer } from "../components/layers/footer/footer";
import Header from "../components/layers/header/header";
import { Main } from "../components/layers/main";
import React from "react";
import Link from "next/link";
import { useCart } from "../contextes/cart-conrext";
import { formatPrice } from "../utils/utils";
import { LockIcon, MasterCardIcon, VisaIcon } from "../asset/icon";
import { Container } from "../components/wrappers/container";

export default function Checkout() {
    const [shippingTab, setShippingTab] = React.useState(1)
    const [payment, setPayment] = React.useState(1)

    return (
        <>
            <Header  key={'header'}/>
            <Main pageTitle={true} pageTitleProps={{ title: "Checkout", breadcrumbs: ['Checkout'] }}>
                <Container>
                    <section className="flex flex-col gap-8 pb-8 lg:flex-row">
                        <div className="flex-[1_1_75%]">
                            <form className="flex flex-col gap-8">
                                <section className="flex flex-col gap-4 ">
                                    <div className="px-4 sm:px-0">
                                        <h2 className="text-[1.5rem] lg:text-[2rem] text-gray-900">
                                            <span className="text-gray-400">1.&nbsp;</span>
                                            Contact Information
                                        </h2>
                                    </div>
                                    <div className="flex flex-col gap-4 p-5 bg-white rounded-md h-max drop-shadow-3xl">
                                        <div className="flex flex-col gap-4 sm:flex-row">
                                            <div className="flex-[1_1_50%]">
                                                <label className="flex flex-col">
                                                    <span className="text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                                                        First Name
                                                        <strong></strong>
                                                    </span>
                                                    <input
                                                        className="rounded custom-input"
                                                    />
                                                </label>
                                            </div>
                                            <div className="flex-[1_1_50%]">
                                                <label className="flex flex-col">
                                                    <span className="text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                                                        Last Name
                                                        <strong></strong>
                                                    </span>
                                                    <input
                                                        className="rounded custom-input"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 sm:flex-row">
                                            <div className="flex-[1_1_50%]">
                                                <label className="flex flex-col">
                                                    <span className="text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                                                        Phone Number
                                                        <strong></strong>
                                                    </span>
                                                    <input
                                                        className="rounded custom-input"
                                                    />
                                                </label>
                                            </div>
                                            <div className="flex-[1_1_50%]">
                                                <label className="flex flex-col">
                                                    <span className="text-gray-900 after:content-['*'] after:ml-0.5 after:text-red-500">
                                                        Email
                                                        <strong></strong>
                                                    </span>
                                                    <input
                                                        className="rounded custom-input"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="flex flex-col gap-4 ">
                                    <div className="px-4 sm:px-0">
                                        <h2 className="text-[1.5rem] lg:text-[2rem] text-gray-900">
                                            <span className="text-gray-400">2.&nbsp;</span>
                                            Shipping
                                        </h2>
                                    </div>
                                    <div className="p-5 bg-white rounded-md h-max drop-shadow-3xl">
                                        <div className="flex flex-col gap-5 sm:flex-row">
                                            <div
                                                className={`flex-[1_1_33%] cursor-pointer flex justify-center flex-col py-3 px-7  rounded border border-dull-gray transition-all ${shippingTab === 1 ? "border-blue-800" : "hover:bg-[#f8f8f8]"}`}
                                                onClick={() => setShippingTab(1)}
                                            >
                                                <div className="flex justify-center mb-[0.55rem]">
                                                    <span className={`block  w-[16px] h-[16px] rounded-full  border border-dull-gray transition-all ${shippingTab === 1 ? "border-blue-800  shadow-[inset_0px_0px_0px_5px_#1E87F0]" : ""}`} />
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-sm text-gray-600 uppercase mb-[0.35rem]">pick up from store</div>
                                                    <div className="text-[.6875rem] text-gray-400">Free, tomorrow</div>
                                                </div>
                                            </div>
                                            <div
                                                className={`flex-[1_1_33%] cursor-pointer flex justify-center flex-col py-3 px-7 rounded border border-dull-gray transition-all ${shippingTab === 2 ? "border-blue-800" : "hover:bg-[#f8f8f8]"}`}
                                                onClick={() => setShippingTab(2)}
                                            >
                                                <div className="flex justify-center mb-[0.55rem]">
                                                    <span className={`block  w-[16px] h-[16px] rounded-full  border border-dull-gray transition-all ${shippingTab === 2 ? "border-blue-800  shadow-[inset_0px_0px_0px_5px_#1E87F0]" : ""}`} />
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-sm text-gray-600 uppercase mb-[0.35rem]">delivery in city</div>
                                                    <div className="text-[.6875rem] text-gray-400">Free, tomorrow</div>
                                                </div>
                                            </div>
                                            <div
                                                className={`flex-[1_1_33%] cursor-pointer flex justify-center flex-col py-3 px-7  rounded border border-dull-gray transition-all ${shippingTab === 3 ? "border-blue-800" : "hover:bg-[#f8f8f8]"}`}
                                                onClick={() => setShippingTab(3)}
                                            >
                                                <div className="flex justify-center mb-[0.55rem]">
                                                    <span className={`block  w-[16px] h-[16px] rounded-full  border border-dull-gray transition-all ${shippingTab === 3 ? "border-blue-800  shadow-[inset_0px_0px_0px_5px_#1E87F0]" : ""}`} />
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-sm text-gray-600 uppercase mb-[0.35rem]">regional delivery</div>
                                                    <div className="text-[.6875rem] text-gray-400">Via Russian Post or postal courier services. Sending to any country</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-3 h-[50vh]">
                                            {shippingTab === 1 && <>1</>}
                                            {shippingTab === 2 && <>2</>}
                                            {shippingTab === 3 && <>3</>}
                                        </div>
                                    </div>
                                </section>
                                <section className="flex flex-col gap-4 ">
                                    <div className="px-4 sm:px-0">
                                        <h2 className="text-[1.5rem] lg:text-[2rem] text-gray-900">
                                            <span className="text-gray-400">3.&nbsp;</span>
                                            Payment
                                        </h2>
                                    </div>
                                    <div className="bg-white rounded-md h-max drop-shadow-3xl">
                                        <div className="flex flex-col gap-5 p-5 sm:flex-row custom-border">
                                            <div
                                                className={`flex-[1_1_33%] cursor-pointer flex justify-center flex-col py-3 px-7  rounded border border-dull-gray transition-all ${payment === 1 ? "border-blue-800" : "hover:bg-[#f8f8f8]"}`}
                                                onClick={() => setPayment(1)}
                                            >
                                                <div className="flex justify-center mb-[0.55rem]">
                                                    <span className={`block  w-[16px] h-[16px] rounded-full  border border-dull-gray transition-all ${payment === 1 ? "border-blue-800  shadow-[inset_0px_0px_0px_5px_#1E87F0]" : ""}`} />
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-sm text-gray-600 uppercase mb-[0.35rem]">payment upon receipt</div>
                                                    <div className="text-[.6875rem] text-gray-400">Cash, credit card</div>
                                                </div>
                                            </div>
                                            <div
                                                className={`flex-[1_1_33%] cursor-pointer flex justify-center flex-col py-3 px-7 rounded border border-dull-gray transition-all ${payment === 2 ? "border-blue-800" : "hover:bg-[#f8f8f8]"}`}
                                                onClick={() => setPayment(2)}
                                            >
                                                <div className="flex justify-center mb-[0.55rem]">
                                                    <span className={`block  w-[16px] h-[16px] rounded-full  border border-dull-gray transition-all ${payment === 2 ? "border-blue-800  shadow-[inset_0px_0px_0px_5px_#1E87F0]" : ""}`} />
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-sm text-gray-600 uppercase mb-[0.35rem]">online by card</div>
                                                    <div className="text-[.6875rem] text-gray-400">Visa, MasterCard</div>
                                                </div>
                                            </div>
                                            <div
                                                className={`flex-[1_1_33%] cursor-pointer flex justify-center flex-col py-3 px-7  rounded border border-dull-gray transition-all ${payment === 3 ? "border-blue-800" : "hover:bg-[#f8f8f8]"}`}
                                                onClick={() => setPayment(3)}
                                            >
                                                <div className="flex justify-center mb-[0.55rem]">
                                                    <span className={`block  w-[16px] h-[16px] rounded-full  border border-dull-gray transition-all ${payment === 3 ? "border-blue-800  shadow-[inset_0px_0px_0px_5px_#1E87F0]" : ""}`} />
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-sm text-gray-600 uppercase mb-[0.35rem]">electronic payment</div>
                                                    <div className="text-[.6875rem] text-gray-400">PayPal, Yandex.Money, QIWI</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center gap-3 p-5 text-center sm:flex-row">
                                            <div className="flex text-sm text-gray-400 "><div><LockIcon /></div>Security of payments is is provided by secure protocols</div>
                                            <div className="flex gap-3"><VisaIcon /><MasterCardIcon /></div>
                                        </div>
                                    </div>
                                </section>
                            </form>
                        </div>
                        <CheckoutInfo />
                    </section>
                </Container>
            </Main >
            <Footer />
        </>
    )
}


const CheckoutInfo = () => {

    const { cartItems, predview, setPredview, deleteItem } = useCart()

    return (
        <>
            <div className="flex-[1_1_25%]">
                <div className="  lg:sticky bg-white rounded-md h-max drop-shadow-3xl lg:top-[80px]">
                    <section className="p-5 pb-4 custom-border">
                        <div className="mb-4 text-2xl text-gray-900">Items in order</div>
                        <div>
                            <ul className="flex flex-col gap-4">
                                {cartItems && cartItems.map((e, i) =>
                                    <li key={i} className="flex gap-2">
                                        <div className="flex-[1_1_70%]">
                                            <h4 className="text-sm text-gray-600 hover:text-blue-800">{e.title}</h4>
                                            <span className="text-sm text-gray-400">{e.quantity}&#215;{formatPrice(Number(e.quantity) * Number(e.price))}</span>
                                        </div>
                                        <div className="flex-[1_1_30%] text-right">
                                            <strong className="text-base font-normal text-gray-600">${formatPrice(e.price)}</strong>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </section>
                    <section className="p-5 pb-4 custom-border">
                        <div className="flex justify-between">
                            <div className="mb-4 text-gray-400">Shipping</div>
                            <div className="text-right text-gray-600">
                                <div>Pick up from store</div>
                                <div className="text-[.875rem] text-gray-400">Free, tomorrow</div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-gray-400">Payment</div>
                            <div className="text-gray-600">Online by card</div>
                        </div>
                    </section>
                    <section className="p-5 pb-4 custom-border">
                        <div className="flex justify-between">
                            <div className="mb-4 text-gray-400">Subtotal</div>
                            <div className="text-gray-600">$3148</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-gray-400 ">Discount</div>
                            <div className="text-red-light">−$29</div>
                        </div>
                    </section>
                    <section className="p-5 pb-4">
                        <div className="flex justify-between">
                            <div className="mb-6 text-gray-400">Total</div>
                            <div className="text-2xl font-bold text-gray-900">$3119</div>
                        </div>
                        <div>
                            <button onClick={() => setPredview(false)} className="uppercase w-full min-w-[120px] transition-all text-center  bg-[#1e80e9c5] hover:bg-blue-800 py-2 rounded text-white">
                                checkout
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}