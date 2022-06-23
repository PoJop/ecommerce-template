import React from "react";
import Link from "next/link"
import { AddToCartBtn } from "./buttons/add-to-cart-btn";
import { FavoritesBtn } from "./buttons/favorites-btn";
import { useCatalog } from "../../contextes/catalog-context";
import Skeleton from '@mui/material/Skeleton';

export const ProductCard = ({ data }) => {

    const { id, Label, title, image, price } = data
    const { productDisplayFormat } = useCatalog()

    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => { setLoading(false) }, 2000)
    }, [])

    return (
        <article className={`flex flex-row p-2 sm:p-5 gap-4  ${productDisplayFormat === "grid" && "md:flex-col"} hover:drop-shadow-xl bg-white transition-all `}>

            <div >
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
                    {loading ?
                        <div className="w-[100vw] h-[100vh] max-h-[120px] min-w-[90px] md:max-h-[200px]">
                            <Skeleton animation="wave" width="100%" height="100%" />
                        </div>
                        :
                        <img className="object-contain max-h-[120px] min-w-[90px] md:max-h-[175px] m-auto" src={image.url} />
                    }
                </div>
            </div>
            <div className={`flex flex-col gap-3 ${productDisplayFormat === "row" && "md:flex-row"}  py-[20px]`}>
                <div className="flex-[0_0_70%]">
                    {/* Product Label */}
                    <div>
                        {loading ?
                            <Skeleton variant="text" animation="wave" width="25%" /> :
                            <strong className="font-normal text-gray-400 text-tiny">{Label}</strong>
                        }
                    </div>
                    {/* Product title */}
                    <div>
                        {loading ?
                            <>
                                <Skeleton variant="text" animation="wave" width="100%" />
                                <Skeleton variant="text" animation="wave" width="100%" />
                                <Skeleton variant="text" animation="wave" width="100%" />
                            </> :
                            <Link href={`/product/${id}`}>
                                <a><h2 className="text-base text-gray-600 cursor-pointer lg:text-lg hover:text-blue-800">{title}</h2></a>
                            </Link>
                        }
                    </div>
                </div>
                <div className={`flex justify-between mt-2 flex-[1_0_30%] ${productDisplayFormat === "row" && "md:flex-col"}`}>
                    <div>
                        {loading ?
                            <Skeleton variant="text" animation="wave" width="70px" /> :
                            <>
                                {/* <del className="absolute">$999.00</del> */}
                                <div className="text-xl font-medium text-gray-600">${price}</div>
                            </>
                        }
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