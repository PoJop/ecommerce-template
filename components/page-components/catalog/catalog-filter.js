import { Accordion } from "../../accordion/accordion"

export const CatalogFilter = () => {

    return (
        <>
            <aside className="overflow-y-hidden bg-white rounded-md ">
                <div className="h-full overflow-y-auto ">
                    <Accordion title={"Prices"}>
                        212
                    </Accordion>
                    <Accordion title={"Brands"}>
                        121
                    </Accordion>
                    <Accordion title={"Type"}>
                        121
                    </Accordion>
                    <Accordion title={"Screen Size"}>
                        121
                    </Accordion>
                    <Accordion title={"Screen Resolution"}>
                        121
                    </Accordion>
                    <Accordion title={"CPU"}>
                        121
                    </Accordion>
                    <Accordion title={"RAM"}>
                        121
                    </Accordion>
                    <div className="p-4">
                        <button className="w-full py-2 text-center border rounded-md border-[#e5e5e5] hover:border-[#bebebe]">
                            RESET ALL FILTERS
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}
