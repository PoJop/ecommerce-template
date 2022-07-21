import React from "react";
import { CartIcon } from "../../../asset/icon";
import { useCart } from "../../../contextes/cart-conrext";

export const AddToCartBtn = ({ data, form = "square" }) => {
    const [disabled, setDisabled] = React.useState(false)
    const { id, Label, title, image, price } = data
    const { addItem, cartItems } = useCart()
    React.useEffect(() => {
        if (cartItems) {
            for (let index = 0; index <= cartItems.length; index++) {
                if (cartItems[index]?.product_id === id) {
                    setDisabled(true)
                    break
                } else {
                    setDisabled(false)
                }
            }
        }
    }, [cartItems])

    const handlerAdd = () => addItem(data)

    const btnForm = {
        "square": "bg-blue-800 rounded text-white uppercase leading-10 w-full flex justify-center min-h-[40px] items-center",
        "circle": "items-center bg-blue-800 rounded-full cursor-pointer w-[36px] h-[36px] flex justify-center align-middle"
    }[form]

    return (
        <>
            <div>
                <button onClick={handlerAdd} disabled={disabled} className={btnForm}>
                    {disabled ?
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M5.75 12.867l2.59 3.547a2 2 0 003.26-.043l6.65-9.621"
                            ></path>
                        </svg> :
                        <>
                            {form === "circle" ? <CartIcon /> : <span className="px-[30px]">add to cart</span>}
                        </>
                    }
                </button>
            </div>
        </>
    )
}