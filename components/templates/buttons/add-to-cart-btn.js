import React from "react";
import { CartIcon } from "../../../asset/icon";
import { useCart } from "../../../contextes/cart-conrext";

export const AddToCartBtn = ({ data }) => {
    const [disabled, setDisabled] = React.useState(false)
    const { id, Label, title, image, price } = data
    const { addItem, cartItems } = useCart()
    React.useEffect(() => {
        if (cartItems) {
            for (let index = 0; index < cartItems.length; index++) {
                if (cartItems[index].product_id === id) {
                    setDisabled(true)
                    break
                }
            }
        }
    }, [cartItems])
    const handlerAdd = () => {
        addItem(data)
    }
    return (
        <>
            <div>
                <button onClick={() => handlerAdd()} disabled={disabled} className="items-center bg-blue-800 rounded-full cursor-pointer w-[36px] h-[36px] flex justify-center align-middle">
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
                        <CartIcon />
                    }
                </button>
            </div>
        </>
    )
}