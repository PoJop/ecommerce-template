import React from "react";
import Link from "next/link";

export const Navigation = () => {

    return (
        <>
            <div className="flex flex-[1_1_25%] ">
                <nav className="flex-[1_1_50%]">
                    <ul className="flex flex-col gap-2">
                        {[
                            { title: 'Catalog', path: '#' },
                            { title: 'Brands', path: '#' },
                            { title: 'Delivery', path: '#' },
                            { title: 'FAQ', path: '#' },
                            { title: 'Payment', path: '#' },
                        ].map((e, i) =>
                            <li key={i}>
                                <Link href={e.path}>
                                    <a
                                        className="text-sm text-white opacity-50 hover:opacity-70"
                                    >{e.title}</a>
                                </Link>
                            </li>
                        )}
                    </ul>

                </nav>
                <nav className="flex-[1_1_50%]">
                    <ul className="flex flex-col gap-2">
                        {[
                            { title: 'About', path: '#' },
                            { title: 'Contacts', path: '#' },
                            { title: 'Blog', path: '#' },
                            { title: 'News', path: '#' },
                        ].map((e, i) =>
                            <li key={i}>
                                <Link href={e.path}>
                                    <a
                                        className="text-sm text-white opacity-50 hover:opacity-70"
                                    >{e.title}</a>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    )
}