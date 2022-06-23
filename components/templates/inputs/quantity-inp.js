import React from "react";

export const QuantityInput = ({ quantity = 1, setQuantity = () => { } }) => {

    const handlerChange = (value) => {
        setQuantity(value.length > 3 ? quantity : value)
        validation()
    }
    const validation = () => {
        if (quantity.toString().substring(0, 1) === '0' && quantity.length > 2) setQuantity(1)
    }

    return (
        <>
            <div className="flex gap-2">
                <button
                    onClick={() => handlerChange(quantity - 1)}
                    disabled={quantity <= 1}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 20 20"
                    >
                        <path d="M1 9H19V10H1z"></path>
                    </svg>

                </button>
                <input
                    className="w-[50px] focus-visible:outline-[#1e87f06b] transition-all p-2 text-center border border-dull-gray rounded text-gray-600 text-[16px]"
                    value={quantity}
                    onBlur={() => { quantity.length === 0 && setQuantity(1) }}
                    onChange={(e) => handlerChange(e.target.value.replace(/[^0-9]/g,""))}
                />
                <button
                    onClick={() => handlerChange(quantity + 1)}
                    disabled={quantity >= 999}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9 1H10V18H9z"></path>
                        <path d="M1 9H18V10H1z"></path>
                    </svg>
                </button>
            </div>
        </>
    )
}