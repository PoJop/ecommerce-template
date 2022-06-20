
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Footer } from "../../components/layers/footer";
import { Header } from "../../components/layers/header/header";
import { Main } from "../../components/layers/main";
import { CatalogContainer } from "../../components/page-components/catalog/catalog-container";
import { CatalogProvider } from "../../contextes/catalog-context";

export default function Catalog() {


    return (
        <>
            <Header />
            <Main>
                <CatalogProvider>
                    <div className="p-4 mb-6">
                        <Breadcrumbs breadcrumbs={['Home', 'Catalog', 'Laptops & Tablets', 'Laptops']} />

                        <div>
                            <h1 className="text-4xl font-normal text-center text-gray-900 ">
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
                </CatalogProvider>
            </Main>
            <Footer />
        </>
    )
}
