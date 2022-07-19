import React from "react"
import Link from "next/link"
import { ArrowIcon } from "../../../../../../asset/icon"

export const DropDownElementBrands = () => {

    return (
        <>
            <ul className="flex flex-wrap px-9 max-w-[940px] m-auto p p-5">
                {[
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/apple.svg'
                    },
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/samsung.svg'
                    },
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/sony.svg'
                    },
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/microsoft.svg'
                    },
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/intel.svg'
                    },
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/hp.svg'
                    },
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/lg.svg'
                    },
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/lenovo.svg'
                    },
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/asus.svg'
                    },
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/acer.svg'
                    },
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/dell.svg'
                    },
                    {
                        url: 'https://chekromul.github.io/uikit-ecommerce-template/images/brands/canon.svg'
                    },
                ].map((e, i) =>
                    <BrandItem key={i} img_url={e.url} />
                )}
            </ul>
            <div className="flex justify-center">
                <Link href={'#'}>
                    <a className="flex items-center gap-1 text-gray-400 hover:text-gray-600">
                        SEE ALL BRANDS <ArrowIcon className="h-[6px] rotate-[-90deg]" />
                    </a>
                </Link>
            </div>
        </>
    )
}

const BrandItem = ({ img_url }) => {


    return (
        <li className="flex-[1_1_16.66%] wrap flex justify-center items-center bg-white hover:drop-shadow-xl py-3 px-6 cursor-pointer">
            <figure className="h-[80px]">
                <img
                    className="max-h-[80px]"
                    src={img_url}
                    alt="#"
                />
            </figure>
        </li>
    )
}