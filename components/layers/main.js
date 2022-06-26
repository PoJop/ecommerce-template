import React from "react";


export const Main = ({ children }) => {

    return (
        <main className=" w-full min-custom_100vh bg-[#f8f8f8]">
            <div className="m-auto max-w-[1200px] lg:max-w-[1256px]">
                <div className=" pt-[50px] lg:pt-[130px] px-0 sm:px-7 lg:px-9">
                    {children}
                </div>
            </div>
        </main>
    )
}