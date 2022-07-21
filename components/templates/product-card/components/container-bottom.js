import React from "react"

import BottomBtn from "./bottom-btn"
import BottomInfo from "./bottom-info"

const ContainerBottom = ({ data, format }) => {

    const bottomStyleFormat = {
        "grid": "sm:px-[20px] sm:pb-[20px]",
        "row": "sm:py-[20px] md:flex-row grow w-full"
    }[format]


    return (
        <div className={`flex flex-col flex-[1_1_100%] grow p-[15px] pl-0 ${"md:grow-0"} ${bottomStyleFormat}`}>
            <BottomInfo
                data={data}
                format={format}
            />
            <BottomBtn
                data={data}
                format={format}
            />
        </div >
    )
}

export default React.memo(ContainerBottom)