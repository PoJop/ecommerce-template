import React from "react"
import Link from "next/link"
import { catalo_json } from "../../../../../../jsonData/catalog-json"

export const DropDownElementCatalog = () => {

    return (
        <>
            <ul className="flex px-9">
                {catalo_json.map((e, i) =>
                    <CategoryItem key={i} data={e} />
                )}
            </ul>
        </>
    )
}

const CategoryItem = ({ data }) => {

    const {
        icon,
        category,
        category_path,
        subcategory
    } = data

    return (
        <li className="flex flex-col flex-[1_1_20%] p-4 border-r border-dull-gray last:border-none">
            <div className="flex justify-center mb-4 ">
                {icon}
            </div>
            <div className="mb-2">
                <Link href={category_path}>
                    <a className="text-gray-600 font-[500] cursor-pointer text-[16px]">

                        {category}

                    </a>
                </Link>
            </div>
            <div>
                <ul className="flex flex-col gap-2">
                    {subcategory.map((e, i) =>
                        <SubcategoryItem key={i} data={e} />
                    )}
                </ul>
            </div>
        </li>
    )
}

const SubcategoryItem = ({ data }) => {

    return (
        <li>
            <Link href={'#'}>
                <a className="text-sm text-gray-400 cursor-pointer hover:text-gray-600">
                    {data}
                </a>
            </Link>
        </li>
    )
}