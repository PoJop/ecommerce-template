import React from "react"
import { CatalogFilter } from "./catalog-filter"
import { CatalogItems } from "./catalog-items"
import { CatalogTopPanel } from "./catalog-top-panel"


export const CatalogContainer = () => {

    const [openFilter, setOpenFilter] = React.useState(false)

    

    return (
        <section className="flex flex-row lg:gap-6 lg:p-[0px] ">
            <>
                {/* Left, the filter panel */}

                <div className="hidden lg:block basis-[30%] drop-shadow-3xl">
                    <CatalogFilter />
                </div>
                <div className="lg:hidden">
                    <MobileFilterPanel openFilter={openFilter} setOpenFilter={setOpenFilter} />
                </div>
            </>

            <>
                {/* Right, a list of products */}

                <div className=" basis-full">
                    <div className="drop-shadow-3xl">
                        <CatalogTopPanel openFilter={openFilter} setOpenFilter={setOpenFilter} />
                        <CatalogItems />
                    </div>
                </div>
            </>
        </section>
    )
}


const MobileFilterPanel = ({ openFilter, setOpenFilter }) => {
    return (
        <>
            <div className={`fixed left-0 top-0 z-[1000] h-screen transition duration-150 ease-out ${!openFilter ? "translate-x-[-100%]" : "translate-x-0"}`}>

                <div className="h-screen bg-white drop-shadow-3xl">
                    <header className="flex justify-between">
                        <h3>Filter</h3>
                        <button onClick={() => setOpenFilter(!openFilter)}>
                            +
                        </button>
                    </header>
                    <CatalogFilter />

                </div>
            </div>
            <div
                onClick={() => setOpenFilter(false)}
                className={`fixed ${!openFilter && "hidden"}  z-[999] blur-sm top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.1)] transition duration-250 ${openFilter ? "opacity-100" : "opacity-0"}`}
            />
        </>
    )
}
