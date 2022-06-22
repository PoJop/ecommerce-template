import { useRouter } from "next/router";
import React from "react";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Footer } from "../../components/layers/footer";
import { Header } from "../../components/layers/header/header";
import { Main } from "../../components/layers/main";
import { ProductImeges } from "../../components/page-components/product/product-images";
import { ProductInfo } from "../../components/page-components/product/product-info";



export default function SingleProduct() {
    const router = useRouter()
    const [tab, setTab] = React.useState(0)
    const tabs = ["OVERVIEW", "SPECIFICATIONS", "ACCESSORIES", "REVIEWS", "Q&A"]
    //   {router.query.id} 



    return (
        <>
            <Header />
            <Main >
                <div className="py-6 mb-6 ">
                    <Breadcrumbs breadcrumbs={['Home', 'Catalog', 'Laptops & Tablets', 'Laptops', 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)']} />

                    <div>
                        <h1 className="text-2xl font-normal text-center text-gray-900 lg:text-4xl ">
                            {`Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)`}

                        </h1>
                    </div>

                    <div className="flex justify-center">
                        <strong className="text-sm font-normal text-gray-400">
                            12 items
                        </strong>
                    </div>
                </div>
                <div className="bg-white drop-shadow-3xl">
                    <section className="border-b border-dull-gray px-[40px]">
                        <div className="flex flex-col lg:flex-row ">
                            <div className="lg:flex-[1_1_60%]  overflow-hidden	">
                                <div>
                                    <ProductImeges />
                                </div>
                            </div>
                            <div className="lg:flex-[1_1_40%]">
                                <div>
                                    <ProductInfo />
                                    Product id {router.query.id}
                                </div>
                            </div>
                        </div>

                    </section>


                    <section className="h-[200vh]">
                        <div className="sticky overflow-hidden top-16">
                            <ul className="flex justify-center gap-6 py-4 overflow-x-auto">
                                {tabs.map((e, i) =>
                                    <li key={i}>
                                        <button
                                            className={`rounded-md transition-all ${tab === i ? "bg-blue-800 text-white" : "text-gray-500 opacity-70 hover:opacity-100"} py-[2px] px-4 `}
                                            onClick={() => setTab(i)}>{e.toUpperCase()}</button>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div>
                            {tab === 0 && <>1</>}
                            {tab === 1 && <>2</>}
                            {tab === 2 && <>3</>}
                            {tab === 3 && <>4</>}
                            {tab === 4 && <>5</>}
                        </div>
                    </section>
                </div>
            </Main >
            <Footer />
        </>
    )
} 