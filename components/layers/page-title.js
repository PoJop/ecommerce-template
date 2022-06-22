import React from "react";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";


export const PageTitle = ({ children, title, breadcrumbs = [] }) => {

    return (
        <>
            <div className="py-4 mb-6">
                <Breadcrumbs breadcrumbs={breadcrumbs} />

                <div>
                    <h1 className="text-2xl font-normal text-center text-gray-900 lg:text-4xl ">
                        {title}
                    </h1>
                </div>

                {children}
            </div>
        </>
    )
}