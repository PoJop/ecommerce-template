import Link from "next/link";
import React from "react";

export const Breadcrumbs = ({ breadcrumbs = [] }) => {

    return (
        <>
            <div>
                <ul className="flex-wrap justify-center hidden gap-4 sm:flex breadcrumbs">
                    {breadcrumbs.map((e, i) =>
                        <li
                            className={`flex gap-4 text-sm ${breadcrumbs.length === i + 1 ? "text-gray-600" : "text-gray-400"}`}
                            key={i}
                        >{e}</li>
                    )}
                </ul>
                <div className="flex justify-center sm:hidden">
                    <Link href={''}>
                        <a className="flex items-center gap-4 text-sm text-gray-400">
                            <svg className="w-[20px]" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M10.25 6.75L4.75 12l5.5 5.25M19.25 12H5"
                                ></path>
                            </svg>
                            {breadcrumbs[breadcrumbs.length - 2]}
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}