import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Footer } from "../../../../components/layers/footer/footer";
import Header from "../../../../components/layers/header/header";
import { Main } from "../../../../components/layers/main";

import { RelatedProducts } from "../../../../components/templates/related-products";
import { ProductImeges } from "../../../../components/page-components/product/product-images";
import { ProductInfo } from "../../../../components/page-components/product/product-info";
import { Container } from "../../../../components/wrappers/container";
import SubcategoryItems from "../../../../components/page-components/subcategory/items";




export default function SingleProduct() {


    return (
        <>
            <Head>
                <title>{'Apple MacBook Pro 15 Touch Bar MPTU2LL/A 256GB (Silver)'}</title>
            </Head>

            <Header />
            <Main benefits={true} pageTitle={true} pageTitleProps={{
                title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
                breadcrumbs: ['Apple MacBook Pro 15 Touch Bar MPTU2LL/A 256GB (Silver)']
            }}>

                <Container>
                    <div className="bg-white rounded-md drop-shadow-3xl ">

                        <ProductWelcome />

                        <ProductInfoNavigation />

                    </div>

                </Container>
                <Container>
                    <RelatedProducts />
                </Container>
            </Main >
            <Footer />
        </>
    )
}


const ProductWelcome = () => {

    const router = useRouter()

    return (
        <section className="border-b border-dull-gray px-4 lg:px-[40px] flex flex-col lg:flex-row ">
            <div className="lg:flex-[1_1_60%] overflow-hidden">
                <ProductImeges />
            </div>
            <div className="lg:flex-[1_1_40%]">
                <ProductInfo />
                Product id {router.query.product_id}
            </div>
        </section>
    )
}


const ProductInfoNavigation = () => {

    const [tab, setTab] = React.useState("overview")

    const handlerChangeTab = (index) => setTab(index)

    const tabButtonStyle = (index) => tab === index
        ? "bg-blue-800 text-white"
        : "text-gray-500 opacity-70 hover:opacity-100"
    React.useEffect(() => {
        console.log("rerender")
    }, [])
    return (
        <section className="min-h-[54vh] ">
            <div className="sticky z-[300] overflow-x-hidden bg-white top-14 m-auto w-[100%]">
                <ul className="m-auto overflow-x-auto w-[100%] whitespace-nowrap text-center p-4">
                    {["overview", "specifications", "accessories", "reviews", "q&a"].map((e, i) =>
                        <li key={i} className="inline line-through flex-shrink-1 mr-[5px] last:mr-[0]" >
                            <button
                                className={`rounded-md transition-all py-[2px] px-2 ${tabButtonStyle(e)}`}
                                onClick={() => handlerChangeTab(e)}>
                                {e}
                            </button>
                        </li>
                    )}
                </ul>
            </div>
            <div className="">
                {tab === "overview" && <>1</>}
                {tab === "specifications" && <>2</>}
                {tab === "accessories" && <Accessories />}
                {tab === "reviews" && <>4</>}
                {tab === "q&a" && <>5</>}
            </div>
        </section>
    )
}

const Accessories = () => {

    return (
        <SubcategoryItems buttonLoadMore={false} pagination={false} />
    )
}