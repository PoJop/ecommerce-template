import React from "react"
import Link from "next/link"

import { FavoritesBtn } from "../../buttons/favorites-btn"
import { AddToCartBtn } from "../../buttons/add-to-cart-btn"
import { formatPrice } from "../../../../utils/utils"
import { useApp } from "../../../../contextes/app-context"
import { useRouter } from "next/router"

const BottomBtn = ({ format, data }) => {
    const { id, Label, title, price } = data
    const { viewport } = useApp()
    const router = useRouter()
    const extended_data = {
        ...data,
        quantity: 1,
        app_product_route: !router.asPath.includes('[') && router.asPath + `/${id}`
    }
    const secondBoxStyleFormat = {
        "row": "md:flex-col md:pl-[20px] w-full md:w-[190px] md:items-start justify-between md:justify-start ",
        "grid": "justify-between"
    }[format]
    const discountStyleFormat = {
        "grid": "md:absolute",
    }[format]
    const btnStyleFormat = {
        "row": "md:flex-col md:flex-col-reverse md:w-full",
        "grid": "",
    }[format]


    return (
        <div className={`flex  items-end  ${secondBoxStyleFormat}`}>
            <div className="mb-1">
                <del className={`${discountStyleFormat} text-sm text-gray-400 translate-y-[-15px]`}>
                    ${formatPrice(999.00)}
                </del>
                <div className="text-xl font-medium text-gray-600">
                    ${formatPrice(price)}
                </div>
            </div>
            <div className={`flex gap-2 mb-1 ${btnStyleFormat}`}>
                <FavoritesBtn text={format === "row" && viewport.w > 768} />
                <AddToCartBtn data={extended_data} form={format === "row" && viewport.w > 768 ? "square" : "circle"} />
            </div>
        </div>
    )
}

export default React.memo(BottomBtn)