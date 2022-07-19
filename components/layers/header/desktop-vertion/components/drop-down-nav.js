import React from "react"
import Link from "next/link"
import { PATH_CATALOG_PAGE } from "../../../../../config/path-config"
import { ArrowIcon } from "../../../../../asset/icon"
import { DropDownElementCatalog } from "./drop-down-elements/drop-down-element-catalog"
import { DropDownElementBrands } from "./drop-down-elements/drop-down-element-brands"


export const DropDownNav = ({ dropDown, setDropDown }) => {

    const { open, index } = dropDown

    const isOpen = (i) => open && index === i

    const openArrowStyle = (i) =>
        isOpen(i) ? "rotate-180" : ""

    const openContainerStyle = (i) =>
        isOpen(i) ? "after:content-[''] after:absolute after:w-[10rem] after:h-[4rem] after:mt-5" : ""


    return (
        <>
            {[
                { title: "Catalog", path: PATH_CATALOG_PAGE, element: <DropDownElementCatalog /> },
                { title: "Brands", path: '#', element: <DropDownElementBrands /> },
                { title: "Pages", path: '#', element: <>3</> },
            ].map((e, i) =>
                <li
                    key={i}
                    className={`px-2 text-gray-400 transition-all cursor-pointer hover:text-gray-600 items-center flex flex-col ${openContainerStyle(i)}`}
                    onMouseOver={() => {
                        setDropDown({ ...dropDown, open: true, index: i, element: e.element })
                    }}
                    onMouseOut={() => {
                        setDropDown({ ...dropDown, open: false, element: <></> })
                    }}
                >
                    <Link href={e.path}>
                        <a className={`flex items-center gap-2  `}>
                            {e.title.toUpperCase()}
                            <span className={`w-max transition-all ${openArrowStyle(i)}`}>
                                <ArrowIcon className="w-[11px]" />
                            </span>
                        </a>
                    </Link>
                </li>
            )}
        </>
    )
}