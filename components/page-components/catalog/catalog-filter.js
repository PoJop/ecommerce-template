import { FilterBrands } from "./filter-components/filter-brands"
import { FilterPrice } from "./filter-components/filter-price"

export const CatalogFilter = () => {

    return (
        <>
            <aside className="overflow-y-hidden bg-white rounded-md ">
                <div className="h-full overflow-y-auto ">
                    <FilterPrice />
                    <FilterBrands />
                </div>
            </aside>
        </>
    )
}
