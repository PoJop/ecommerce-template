import React from "react";

export const Breadcrumbs = ({ breadcrumbs = [] }) => {

    return (
        <>
            <div>
                <ul className="flex justify-center gap-4 breadcrumbs">
                    {breadcrumbs.map((e, i) =>
                        <li
                            className={`flex gap-4 text-sm ${breadcrumbs.length === i + 1 ? "text-gray-600" : "text-gray-400"}`}
                            key={i}
                        >{e}</li>
                    )}
                </ul>
            </div>
        </>
    )
}