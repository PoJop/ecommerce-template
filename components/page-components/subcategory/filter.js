import React from "react"
import { Accordion } from "../../templates/accordion"


export const SubcategoryFilter = () => {

    return (
        <>
            <aside className="overflow-y-hidden bg-white rounded-md ">
                <div className="h-full overflow-y-auto ">
                    <Accordion title={"Prices"} titleClass={"text-xl"} openDefault={true}>
                        <div className="flex">
                            <PriceInput label="from" placeholder="$59" className="mr-[15px]" />
                            <PriceInput label="to" placeholder="$6559" />
                        </div>
                    </Accordion>
                    <Accordion title={"Brands"} titleClass={"text-xl"} openDefault={true}>
                        <ul>
                            {[
                                { label: "Acer", quality: "177" },
                                { label: "Apple", quality: "18" },
                                { label: "ASUS", quality: "150" },
                                { label: "Dell", quality: "170" },
                                { label: "HP", quality: "498" },
                                { label: "MSI", quality: "54" },
                                { label: "Samsung", quality: "1" },
                                { label: "Sony", quality: "1" },
                            ].map((elem, index) =>
                                <li key={index} className="mb-3 last:mb-0">
                                    <CheckboxInput label={elem.label} quality={elem.quality} />
                                </li>
                            )}
                        </ul>
                    </Accordion>
                    <Accordion title={"Type"} titleClass={"text-xl"} openDefault={true}>
                        <ul>
                            {[
                                { label: "Notebook", quality: "150" },
                                { label: "Ultrabook", quality: "18" },
                                { label: "Transformer", quality: "6" },
                            ].map((elem, index) =>
                                <li key={index} className="mb-3 last:mb-0">
                                    <CheckboxInput label={elem.label} quality={elem.quality} />
                                </li>
                            )}
                        </ul>
                    </Accordion>
                    <Accordion title={"Screen Size"} titleClass={"text-xl"}>
                        <ul>
                            {[
                                { label: "11.6 and smaller", quality: "45" },
                                { label: "12 - 13.5", quality: "178" },
                                { label: "14 - 14.5", quality: "461" },
                                { label: "15 - 15.6", quality: "148" },
                                { label: "17 - 17.3", quality: "73" },
                                { label: "18.4 and larger", quality: "54" },
                            ].map((elem, index) =>
                                <li key={index} className="mb-3 last:mb-0">
                                    <CheckboxInput label={elem.label} quality={elem.quality} />
                                </li>
                            )}
                        </ul>
                    </Accordion>
                    <Accordion title={"Screen Resolution"} titleClass={"text-xl"}>
                        <ul>
                            {[
                                { label: "3840×2160", quality: "12" },
                                { label: "3200×1800", quality: "12" },
                                { label: "2880×1800", quality: "10" },
                                { label: "2560×1600", quality: "7" },
                                { label: "2560×1440", quality: "13" },
                                { label: "1920×1080", quality: "341" },
                                { label: "1600×900", quality: "11" },
                                { label: "1440×900", quality: "13" },
                                { label: "1366×768", quality: "237" },
                                { label: "1024×600", quality: "5" },
                            ].map((elem, index) =>
                                <li key={index} className="mb-3 last:mb-0">
                                    <CheckboxInput label={elem.label} quality={elem.quality} />
                                </li>
                            )}
                        </ul>
                    </Accordion>
                    <Accordion title={"CPU"} titleClass={"text-xl"}>
                        <ul>
                            {[
                                { label: "AMD A-series", quality: "102" },
                                { label: "AMD E-series", quality: "21" },
                                { label: "AMD FX", quality: "1" },
                                { label: "AMD Ryzen", quality: "1" },
                                { label: "Intel Atom", quality: "8" },
                                { label: "Intel Celeron", quality: "38" },
                                { label: "Intel Core M", quality: "6" },
                                { label: "Intel Core i3", quality: "143" },
                                { label: "Intel Core i5", quality: "273" },
                                { label: "Intel Core i7", quality: "218" },
                                { label: "Intel Xeon", quality: "3" },
                                { label: "Intel Pentium", quality: "86" },
                            ].map((elem, index) =>
                                <li key={index} className="mb-3 last:mb-0">
                                    <CheckboxInput label={elem.label} quality={elem.quality} />
                                </li>
                            )}
                        </ul>
                    </Accordion>
                    <Accordion title={"RAM"} titleClass={"text-xl"}>
                        <ul>
                            {[
                                { label: "2 GB", quality: "17" },
                                { label: "4 GB", quality: "359" },
                                { label: "6 GB", quality: "81" },
                                { label: "8 GB", quality: "346" },
                                { label: "12 GB", quality: "13" },
                                { label: "16 GB", quality: "72" },
                                { label: "24 GB", quality: "1" },
                                { label: "32 GB", quality: "11" },
                            ].map((elem, index) =>
                                <li key={index} className="mb-3 last:mb-0">
                                    <CheckboxInput label={elem.label} quality={elem.quality} />
                                </li>
                            )}
                        </ul>
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


const PriceInput = ({ label, className, placeholder }) => {
    const [inputFocus, setInputFocus] = React.useState(false)

    return (
        <div className={`flex flex-[1_1_50%] items-center border-[1.5px] h-[40px] transition-all rounded  ${inputFocus ? "border-[#39f]" : "border-[#e5e5e5]"} ${className}`}>
            <label
                htmlFor="price-input"
                className="flex-[0_0_20%] text-[.6875rem]  text-gray-400 pointer-events-none p-2"
            >{label}</label>
            <input
                id="price-input"
                className="flex-[1_1_20%] w-full text-gray-600"
                placeholder={placeholder}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
            />
        </div>
    )
}

const CheckboxInput = ({ label, className, quality }) => {
    const inputRef = React.useRef()
    const [checked, setChecked] = React.useState(false)
    return (
        <div className={`${className ?? ""} `}>
            <label
                className="flex items-center cursor-pointer"
            >
                <span className={`custom-checkbox ${checked ? "checked" : ""}`}></span>
                <input
                    ref={inputRef}
                    className="checkbox"
                    type="checkbox"
                    onChange={(e) => setChecked(inputRef?.current.checked)}
                />
                <span className="ml-2 text-gray-600 text-[16px]">{label ?? ""}</span>
                <span className="ml-1 text-[.6875rem] text-gray-400 align-end translate-y-[2px]" >{quality ?? ""}</span>
            </label>
        </div>
    )
}