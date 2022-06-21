import React from "react";
import { CartIcon } from "../../asset/icon";

export const AddToCartBtn = () => {

    return (
        <>
            <div className="bg-blue-800 rounded-full cursor-pointer w-[36px] h-[36px] flex justify-center align-middle">
                <button>
                    <CartIcon />
                </button>
            </div>
        </>
    )
}