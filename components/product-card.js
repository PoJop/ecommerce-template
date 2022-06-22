import React from "react";
import Link from "next/link"
import { AddToCartBtn } from "./buttons/add-to-cart-btn";
import { FavoritesBtn } from "./buttons/favorites-btn";
import { useCatalog } from "../contextes/catalog-context";

export const ProductCard = ({ data }) => {

    const { id, Label, title, image, price } = data
    const { productDisplayFormat } = useCatalog()

    return (
        <article className={`flex flex-row p-2 sm:p-5 gap-4  ${productDisplayFormat === "grid" && "md:flex-col"} hover:drop-shadow-xl bg-white transition-all `}>

            <div>
                <div className="flex justify-end gap-2 text-white ">
                    <ul className="absolute">
                        {['TOP SELLING'].map((e, i) =>
                            <li key={i}
                                className={`px-[3px] text-[10px] bg-[#faa05a] rounded`}
                            >{e}</li>
                        )}
                    </ul>
                </div>
                <div className="p-1 sm:p-2 flex-[1_0_80px] flex h-full sm:max-h-[120px]  md:max-h-[200px] max-w-[120px] md:max-w-none">
                    <img className="object-contain max-h-[120px] min-w-[90px] md:max-h-[175px] m-auto" src={image.url} />
                </div>
            </div>
            <div className={`flex flex-col p-2 ${productDisplayFormat === "row" && "md:flex-row"}  grow`}>
                <div className="flex-[1_0_70%]">
                    {/* Product Label */}
                    <div>
                        <strong className="font-normal text-gray-400 text-tiny">{Label}</strong>
                    </div>
                    {/* Product title */}
                    <div>
                        <Link href={`/product/${id}`}>
                            <a><h2 className="text-base text-gray-600 cursor-pointer lg:text-lg hover:text-blue-800">{title}</h2></a>
                        </Link>

                    </div>
                </div>
                <div className={`flex justify-between mt-2 flex-[1_0_30%] ${productDisplayFormat === "row" && "md:flex-col"}`}>
                    <div>
                        {/* <del className="absolute">$999.00</del> */}
                        <div className="text-xl font-medium text-gray-600">${price}</div>
                    </div>
                    <div className="flex gap-2">
                        <FavoritesBtn />
                        <AddToCartBtn />
                    </div>
                </div>
            </div>
        </article>
    )
}