
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import Link from "next/link";
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
                <div className="p-4 mb-6">
                    <Breadcrumbs breadcrumbs={['Home', 'Catalog']} />

                    <div>
                        <h1 className="text-2xl font-normal text-center text-gray-900 lg:text-4xl ">
                            Catalog
                        </h1>
                    </div>

                    <div className="flex justify-center">
                        <strong className="text-sm font-normal text-gray-400">
                            1222 items
                        </strong>
                    </div>
                </div>
                <section className="flex lg:gap-4 h-[200vh] ">
                    <div className="hidden lg:block flex-[1_1_25%] sticky top-20 h-max bg-white drop-shadow-3xl rounded-md">1</div>
                    <div className="flex-[1_1_75%] h-full  rounded-md">
                        <ul className="flex flex-col gap-5">
                            <li className="bg-white rounded-md drop-shadow-3xl">
                                <header className="p-4 custom-border" >Laptops-&-Tablets</header>
                                <div>
                                    <ul className="p-4">
                                        <li>
                                            <Link href={"/catalog/Laptops-&-Tablets/Laptops"}>
                                                <a>Laptops</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="bg-white rounded-md drop-shadow-3xl">1</li>
                            <li className="bg-white rounded-md drop-shadow-3xl">1</li>
                            <li className="bg-white rounded-md drop-shadow-3xl">1</li>
                            <li className="bg-white rounded-md drop-shadow-3xl">1</li>
                        </ul>
                    </div>
                </section>
            </Main>
            <Footer />
        </>
    )
}
