
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
                    <div>
                        <>
                            {/* Breadcrumbs */}

                            <div>{''}</div>
                        </>
                        <>
                            {/* Catalog title */}

                            <div>
                                <h1 className="text-3xl text-center">Laptops</h1>
                            </div>
                        </>
                        <>
                            {/*  */}

                            <div>
                                <strong>{"12 items"}</strong>
                            </div>
                        </>
                    </div>

                    <CatalogContainer />
                </CatalogProvider>
            </Main>
            <Footer />
        </>
    )
}
