import React from "react"
import { Sidebar } from "../../sidebar"
import { CatalogFilter } from "./catalog-filter"
import { CatalogItems } from "./catalog-items"
import { CatalogTopPanel } from "./catalog-top-panel"


export const CatalogContainer = () => {

    const [showFilter, setShowFilter] = React.useState(false)



    return (
        <section className="flex flex-row lg:gap-6 lg:p-[0px] ">
            <>
                {/* Left, the filter panel */}

                <div className="hidden lg:block basis-[30%] drop-shadow-3xl">
                    <CatalogFilter />
                </div>
                <div className="lg:hidden">

                    <Sidebar close={setShowFilter} show={showFilter} position={"left"} header={"Filter"}>
                        <CatalogFilter />
                    </Sidebar>
                </div>
            </>

            <>
                {/* Right, a list of products */}

                <div className=" basis-full">
                    <div className="drop-shadow-3xl">
                        <CatalogTopPanel openFilter={showFilter} setOpenFilter={setShowFilter} />
                        <CatalogItems />
                    </div>
                </div>
            </>
        </section>
    )
}
