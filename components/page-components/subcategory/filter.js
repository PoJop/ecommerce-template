import { Accordion } from "../../templates/accordion"


export const SubcategoryFilter = () => {

    return (
        <>
            <aside className="overflow-y-hidden bg-white rounded-md ">
                <div className="h-full overflow-y-auto ">
                    <Accordion title={"Prices"} titleClass={"text-xl"} openDefault={true}>
                        <div>
                            <PriceInput label="from" />
                            <PriceInput label="to" />
                        </div>
                    </Accordion>
                    <Accordion title={"Brands"} titleClass={"text-xl"} openDefault={true}>
                        121
                    </Accordion>
                    <Accordion title={"Type"} titleClass={"text-xl"} openDefault={true}>
                        121
                    </Accordion>
                    <Accordion title={"Screen Size"} titleClass={"text-xl"}>
                        121
                    </Accordion>
                    <Accordion title={"Screen Resolution"} titleClass={"text-xl"}>
                        121
                    </Accordion>
                    <Accordion title={"CPU"} titleClass={"text-xl"}>
                        121
                    </Accordion>
                    <Accordion title={"RAM"} titleClass={"text-xl"}>
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


const PriceInput = ({ label }) => {

    return (
        <div>
            <label htmlFor="price-input">{label}</label>
            <input id="price-input" />
        </div>
    )
}