import React from "react";
import { RightSideber } from "../page-components/faq/right-sideber";


export const BoxWithRightNavSidebar = ({ children }) => {

    return (
        <div className="flex gap-4 pb-8">
            <div className="bg-white rounded-md drop-shadow-3xl flex-[1_1_75%]">
                {children}
            </div>
            <aside className="hidden lg:block bg-white rounded-md drop-shadow-3xl flex-[1_1_25%] h-full sticky top-[80px]">
                <RightSideber />
            </aside>
        </div>
    )
}