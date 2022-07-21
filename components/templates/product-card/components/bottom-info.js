import React from "react"
import Link from "next/link"

import { PATH_CATALOG_PAGE } from "../../../../config/path-config"

const BottomInfo = ({ format, data }) => {
    const { id, Label, title } = data

    const firstBoxStyleFormat = {
        "grid": "mb-[20px]",
        "row": "md:border-r md:border-[#e5e5e5] md:pr-[20px] grow"
    }[format]
    
    const description = [
        { name: "Diagonal display", value: "15.4" },
        { name: "CPU", value: "Intel® Core™ i7" },
        { name: "RAM", value: "16 GB" },
        { name: "Video Card", value: "AMD Radeon Pro 555" },
    ]

    return (
        <div className={`flex-[0_0_60%] flex flex-col ${firstBoxStyleFormat}`}>
            <strong className="font-normal text-gray-400 text-tiny">
                {Label}
            </strong>
            <div className="grow">
                <Link href={`${PATH_CATALOG_PAGE}/${'Laptops-&-Tablets'}/${'Laptops'}/${id}`}>
                    <a>
                        <h2 className="text-base text-gray-600 cursor-pointer lg:text-lg hover:text-blue-800">
                            {title}
                        </h2>
                    </a>
                </Link >
            </div >
            {format === "row" &&
                <ul className={`hidden md:block text-sm text-gray-400 `}>
                    {description.map((elem, index) =>
                        <li key={index}>
                            <span>{elem.name}: </span>
                            <span className="text-gray-600">{elem.value}</span>
                        </li>
                    )}
                </ul>
            }
        </div >
    )
}

export default React.memo(BottomInfo)