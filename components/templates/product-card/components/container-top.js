import React from "react"

const ContainerTop = ({ data, format }) => {

    const { image } = data

    const topStyleFormat = {
        "grid": "md:grow",
        "row": ""
    }[format]

    const imageFormatStyle = {
        "grid": "md:h-[195px]",
        "row": "md:h-[235px]"
    }[format]

    const blockFormatStyle = {
        "grid": "md:w-auto md:h-full",
        "row": " md:w-[250px] md:h-full"
    }[format]


    return (
        <div className={`flex-[0_0_35%] ${'md:flex-[0_0_24%]'} ${topStyleFormat}`}>
            <div className="flex justify-end gap-2 text-white">
                <ul className="absolute p-[20px] ">
                    {['TOP SELLING'].map((elem, index) =>
                        <li
                            key={index}
                            className={`px-[3px] text-[10px] bg-[#faa05a] rounded`}
                        >
                            {elem}
                        </li>
                    )}
                </ul>
            </div>
            <div className={`flex ${"h-[200px]"} ${blockFormatStyle}  `}>
                <img
                    className={`object-contain m-auto p-[15px] md:p-[20px] ${"h-[200px]"} ${imageFormatStyle}`}
                    src={image.url}
                    alt="#"
                />
            </div>
        </div>
    )
}

export default React.memo(ContainerTop)