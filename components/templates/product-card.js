import React from "react";
import Link from "next/link"
import { AddToCartBtn } from "./buttons/add-to-cart-btn";
import { FavoritesBtn } from "./buttons/favorites-btn";
import { useCatalog } from "../../contextes/catalog-context";
import { PATH_CATALOG_PAGE } from "../../config/path-config";
import { useRouter } from "next/router";
import { formatPrice } from "../../utils/utils";

export const ProductCard = ({ data }) => {

    const { id, Label, title, image, price } = data
    const { productDisplayFormat } = useCatalog()

    const router = useRouter()

    const extended_data = {
        ...data,
        quantity: 1,
        app_product_route: !router.asPath.includes('[') && router.asPath + `/${id}`
    }

    return (
        <article
            className={"flex justify-between flex-row p-2 sm:p-5 gap-4 hover:drop-shadow-xl bg-white transition-all" + " " +
                `${productDisplayFormat === "grid" && "md:flex-col"}`}
        >

            <div
                className={`max-h-[120px] w-full h-full
                    ${productDisplayFormat === "grid" ? "grow": ""} 
                    ${productDisplayFormat === "row" ? "w-[200px]" : ""}`
                }
            >
                <ProductLabels />
                <ProductImage image={image} />
            </div>

            <div
                className={"flex h-full w-full flex-[1_0_60%] flex-col gap-3 grow md:grow-0 py-[20px]" + " " +
                    `${productDisplayFormat === "row" && "md:flex-row grow  md:flex-[1_0_80%]"}`}
            >
                <div className="flex-[0_0_70%]">
                    {/* Product Label */}
                    <div>
                        <strong className="font-normal text-gray-400 text-tiny">{Label}</strong>

                    </div>
                    {/* Product title */}
                    <div>
                        <Link href={`${PATH_CATALOG_PAGE}/${'Laptops-&-Tablets'}/${'Laptops'}/${id}`}>
                            <a><h2 className="text-base text-gray-600 cursor-pointer lg:text-lg hover:text-blue-800">{title}</h2></a>
                        </Link>
                    </div>
                </div>
                <div className={`flex justify-between mt-2 flex-[1_0_30%] ${productDisplayFormat === "row" && "md:flex-col"}`}>
                    <div>
                        {/* <del className="absolute">$999.00</del> */}
                        <div className="text-xl font-medium text-gray-600">${formatPrice(price)}</div>

                    </div>
                    <div className="flex gap-2">
                        <FavoritesBtn />
                        <AddToCartBtn data={extended_data} />
                    </div>
                </div>
            </div>
        </article>
    )
}

const ProductLabels = () => {

    return (
        <div className="flex justify-end gap-2 text-white">
            <ul className="absolute">
                {['TOP SELLING'].map((e, i) =>
                    <li key={i}
                        className={`px-[3px] text-[10px] bg-[#faa05a] rounded`}
                    >{e}</li>
                )}
            </ul>
        </div>
    )
}
const ProductImage = ({ image }) => {

    return (
        <div className={`p-1 sm:p-2 flex-[1_0_80px] flex sm:max-h-[120px] max-w-[200px] md:max-w-none`}>
            <img
                className="object-contain max-h-[120px] h-[120px] min-w-[90px] md:max-h-[175px] m-auto"
                src={image.url}
                alt="#"
            />
        </div>
    )
}