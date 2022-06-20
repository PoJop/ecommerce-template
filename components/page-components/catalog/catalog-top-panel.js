import React from "react"
import { useCatalog } from "../../../contextes/catalog-context"

export const CatalogTopPanel = ({ openFilter, setOpenFilter }) => {

    const { productDisplayFormat, setProductDisplayFormat } = useCatalog()


    return (
        <>
            <div className="flex justify-between p-2 bg-white rounded-t-lg ">
                <>
                    {/*Left side */}

                    <div>1</div>

                </>

                <>
                    {/*Right side*/}

                    <div className={`flex flex-row-reverse gap-2`}>

                        <>
                            {/* List of product display formats, desktop only */}

                            <div className="hidden md:block">
                                <ul className={`flex gap-2`}>
                                    {["grid", "row"].map((e, i) =>
                                        <li key={i} className={`${productDisplayFormat === e ? "opacity-100" : "opacity-50"}`}>
                                            <button onClick={() => setProductDisplayFormat(e)}>
                                                {e === "grid" && <IconGrid />}
                                                {e === "row" && <IconRow />}
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </>

                        <>
                            {/* Button to open the filter panel, only devices */}

                            <div className=" lg:hidden">
                                <button onClick={() => setOpenFilter(!openFilter)}>
                                    Filter
                                </button>
                            </div>
                        </>

                    </div>
                </>
            </div>
        </>
    )
}

const IconGrid = () => {
    return (
        <svg
        className="w-[15px] h-[15px]"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
        >
            <path
                fill="#333"
                d="M0 2V0h2v2H0zM4 2V0h2v2H4zM8 2V0h2v2H8zM8 6V4h2v2H8zM4 6V4h2v2H4zM0 6V4h2v2H0zM8 10V8h2v2H8zM4 10V8h2v2H4zM0 10V8h2v2H0z"
            ></path>
        </svg>
    );
}
const IconRow = () => {
    return (
        <svg
            className="w-[15px] h-[15px]"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
        >
            <path
                fill="#333"
                d="M0 2V0h2v2H0zM4 2V0h6v2H4zM4 6V4h6v2H4zM0 6V4h2v2H0zM4 10V8h6v2H4zM0 10V8h2v2H0z"
            ></path>
        </svg>
    );
}
