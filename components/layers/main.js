import React from "react";


export const Main = ({ children }) => {

    return (
        <main className=" w-full  bg-[#f8f8f8]">
            <div className="m-auto max-w-[1200px] ">
                <div className=" mt-[100px]">
                    {children}
                </div>
            </div>
        </main>
    )
}