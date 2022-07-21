import React from "react";
import Link from "next/link";

import AnchorLink from 'react-anchor-link-smooth-scroll'

import Header from "../../components/layers/header/header";
import { Main } from "../../components/layers/main";
import { Footer } from "../../components/layers/footer/footer";
import { Container } from "../../components/wrappers/container";

import { catalo_json } from "../../jsonData/catalog-json";



export default function Catalog() {

    return (
        <>
            <Header />
            <Main benefits={true} pageTitle={true} pageTitleProps={{ title: "Catalog", breadcrumbs: ['Home', 'Catalog'] }}>
             

                <Container>
                    <section className="flex pb-8 lg:gap-4 ">
                        <div className="hidden lg:block flex-[1_1_25%] sticky top-20 h-max bg-white drop-shadow-3xl rounded-md">
                            <ul className="flex flex-col gap-2 p-4 text-gray-400">
                                {catalo_json.map((e, i) =>
                                    <li key={i}>
                                        <AnchorLink offset='100' href={`#categoryAnchor${i}`}>
                                            {e.category}
                                        </AnchorLink>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="flex-[1_1_75%] h-full  rounded-md">
                            <ul className="flex flex-col gap-5">
                                {catalo_json.map((e, i) =>
                                    <li // category
                                        key={i}
                                        id={`categoryAnchor${i}`}
                                        className="bg-white rounded-md category drop-shadow-3xl"
                                    >
                                        <header className="p-4 custom-border">
                                            <Link href={"#"}>
                                                <a className=" text-gray-900 hover:text-[#1e87f0]">{e.category}</a>
                                            </Link>
                                        </header>
                                        <ul className="p-4">
                                            {e.subcategory.map((e, i) =>
                                                <li // subcategory
                                                    key={i}
                                                    className="mb-2 last:mb-0"
                                                >
                                                    <Link href={"/catalog/Laptops-&-Tablets/Laptops"}>
                                                        <a className="text-[#1e87f0] hover:text-[#0f6ecd]">{e}</a>
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </section>
                </Container>
            </Main>
            <Footer />
        </>
    )
}