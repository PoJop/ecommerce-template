import React from "react";
import { useRouter } from "next/router";
import { Breadcrumbs } from "../../../components/breadcrumbs/breadcrumbs";
import { Footer } from "../../../components/layers/footer";
import { Header } from "../../../components/layers/header/header";
import { Main } from "../../../components/layers/main";
import { CatalogContainer } from "../../../components/page-components/catalog/catalog-container";


export default function Subcategory() {
    const router = useRouter()
    const { category, subcategory } = router.query
    React.useEffect(() => {
        console.log(category, subcategory)
    }, [category, subcategory])

    return (
        <>
            <Header />
            <Main>
                <div className="p-4 mb-6">
                    <Breadcrumbs breadcrumbs={['Home', 'Catalog', category, subcategory]} />

                    <div>
                        <h1 className="text-2xl font-normal text-center text-gray-900 lg:text-4xl">
                            Laptops
                        </h1>
                    </div>

                    <div className="flex justify-center">
                        <strong className="text-sm font-normal text-gray-400">
                            12 items
                        </strong>
                    </div>
                </div>

                <CatalogContainer />
            </Main>
            <Footer />
        </>
    )
}
