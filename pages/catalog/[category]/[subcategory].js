import React from "react";
import { useRouter } from "next/router";
import { Breadcrumbs } from "../../../components/breadcrumbs/breadcrumbs";
import { Footer } from "../../../components/layers/footer";
import { Header } from "../../../components/layers/header/header";
import { Main } from "../../../components/layers/main";
import { CatalogContainer } from "../../../components/page-components/catalog/catalog-container";
import { PageTitle } from "../../../components/layers/page-title";


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
                <PageTitle title={'Laptops'} breadcrumbs={['Home', 'Catalog', category, subcategory]}>
                    <div className="flex justify-center">
                        <strong className="text-sm font-normal text-gray-400">
                            12 items
                        </strong>
                    </div>
                </PageTitle>

                <CatalogContainer />
            </Main>
            <Footer />
        </>
    )
}
