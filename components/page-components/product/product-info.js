import React from "react";
import Link from "next/link"
import { StarIcon } from "../../../asset/icon";
import { useCart } from "../../../contextes/cart-conrext";
import { QuantityInput } from "../../templates/inputs/quantity-inp";

export const ProductInfo = () => {
    const { changeQuantity } = useCart()

    const [quantity, setQuantity] = React.useState(1)

    // React.useEffect(() => {
    //     if (!quantity) {
    //         setQuantity(data.quantity)
    //     } else {
    //         changeQuantity(data.product_id, quantity)
    //     }
    // }, [data.quantity, quantity])

    return (
        <>
            <div className="flex flex-col gap-4 p-1 lg:p-4">
                <div>
                    <Link href={'#'}>
                        <a>
                            <img className="h-[35px]" src="https://chekromul.github.io/uikit-ecommerce-template/images/brands/apple.svg" />
                        </a>
                    </Link>
                </div>
                <div className="flex">
                    <div className="flex gap-1">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>
                    <div>
                        <ul className="flex">
                            {['TOP SELLING'].map((e, i) =>
                                <li key={i}
                                    className={`px-[10px] text-tiny text-white bg-[#faa05a] rounded`}
                                >{e}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div></div>
                <div>
                    <div className="p-4 bg-blue-200 rounded">
                        <div className="mb-4">
                            <del className="text-sm text-gray-400 ">$999.00</del>
                            <div className="text-[32px] font-medium text-gray-600 leading-[1]">$122</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <div className="flex text-gray-400">
                                <QuantityInput quantity={quantity} setQuantity={setQuantity} />
                            </div>
                            <div>
                                <button
                                    className="px-6 py-2 text-white bg-blue-800 rounded"
                                >{"add to cart".toUpperCase()}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-[#F8F8F8] rounded">
                    f
                </div>
                <div>
                    <ul>
                        <li>
                            <span className="text-sm text-gray-400">Diagonal display: </span>
                            <span className="text-sm text-gray-600">15.4</span>
                        </li>
                        <li>
                            <span className="text-sm text-gray-400">CPU: </span>
                            <span className="text-sm text-gray-600">Intel® Core™ i7</span>
                        </li>
                        <li>
                            <span className="text-sm text-gray-400">RAM: </span>
                            <span className="text-sm text-gray-600">16 GB</span>
                        </li>
                        <li>
                            <span className="text-sm text-gray-400">Video Card: </span>
                            <span className="text-sm text-gray-600">AMD Radeon Pro 555</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

