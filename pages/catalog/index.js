
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import { Footer } from "../../components/layers/footer";
import { Header } from "../../components/layers/header/header";
import { Main } from "../../components/layers/main";
import { CatalogContainer } from "../../components/page-components/catalog/catalog-container";
import { CatalogProvider } from "../../contextes/catalog-context";
import { PageTitle } from "../../components/layers/page-title";

export default function Catalog() {


    return (
        <>
            <Header />
            <Main>
                <PageTitle title={'Catalog'} breadcrumbs={['Home', 'Catalog']}>
                    <div className="flex justify-center">
                        <strong className="text-sm font-normal text-gray-400">
                            1222 items
                        </strong>
                    </div>
                </PageTitle>

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
