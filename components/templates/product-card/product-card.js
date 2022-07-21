import React from "react";

import { useCatalog } from "../../../contextes/catalog-context";

import ContainerTop from "./components/container-top";
import ContainerBottom from "./components/container-bottom";


export const ProductCard = ({ data }) => {

    const { productDisplayFormat: format } = useCatalog()

    const articleFormat = {
        "grid": "md:flex-col",
        "row": "border-b border-[#e5e5e5]"
    }[format]

    return (
        <article className={`flex justify-between flex-row bg-white transition-all ${"md:hover:drop-shadow-xl"} ${articleFormat}`}>
            <ContainerTop
                data={data}
                format={format}
            />
            <ContainerBottom
                data={data}
                format={format}
            />
        </article >
    )
}








