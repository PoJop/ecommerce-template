import { useRouter } from "next/router";
import React from "react";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Footer } from "../../components/layers/footer";
import { Header } from "../../components/layers/header/header";
import { Main } from "../../components/layers/main";
import { ProductImeges } from "../../components/page-components/product/product-images";
import { ProductInfo } from "../../components/page-components/product/product-info";
import { RelatedProducts } from "../../components/related-products";



export default function SingleProduct() {
    const router = useRouter()
    const [tab, setTab] = React.useState(0)
    const tabs = ["OVERVIEW", "SPECIFICATIONS", "ACCESSORIES", "REVIEWS", "Q&A"]
    //   {router.query.id} 



    return (
        <>
            <Header />
            <Main >
                <div className="py-6 mb-6 rounded-md ">
                    <Breadcrumbs breadcrumbs={['Home', 'Catalog', 'Laptops & Tablets', 'Laptops', 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)']} />

                    <div>
                        <h1 className="text-2xl font-normal text-center text-gray-900 lg:text-4xl ">
                            {`Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)`}

                        </h1>
                    </div>
                </div>
                <div className="bg-white rounded-md drop-shadow-3xl ">
                    <section className="border-b border-dull-gray px-4 lg:px-[40px]">
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


                    <section className="h-[50vh] py-4">
                        <div className="sticky w-full overflow-x-hidden bg-white top-14">
                            <div className="m-auto w-[100%] ">
                                <ul className=" m-auto overflow-x-auto w-[100%] whitespace-nowrap text-center p-4">
                                    {tabs.map((e, i) =>
                                        <li key={i} className="inline line-through flex-shrink-1 mr-[5px] last:mr-[0]" >
                                            <button
                                                className={`rounded-md transition-all ${tab === i ? "bg-blue-800 text-white" : "text-gray-500 opacity-70 hover:opacity-100"} py-[2px] px-2 `}
                                                onClick={() => setTab(i)}>{e.toUpperCase()}</button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="p-4">
                            {tab === 0 && <>1</>}
                            {tab === 1 && <>2</>}
                            {tab === 2 && <>3</>}
                            {tab === 3 && <>4</>}
                            {tab === 4 && <>5</>}
                        </div>
                    </section>

                </div>
                    <RelatedProducts />
            </Main >
            <Footer />
        </>
    )
} 