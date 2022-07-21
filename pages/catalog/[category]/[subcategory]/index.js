import React, { Suspense } from "react";
import { useRouter } from "next/router";
import Header from "../../../../components/layers/header/header";
import { Main } from "../../../../components/layers/main";
import { SubcategoryFilter } from "../../../../components/page-components/subcategory/filter";
import { Sidebar } from "../../../../components/templates/sidebar";
import { SubcategoryTopPanel } from "../../../../components/page-components/subcategory/top-panel";
// import { SubcategoryItems } from "../../../../components/page-components/subcategory/items";
import { usePagination } from "../../../../hooks/usePagination";
import { Footer } from "../../../../components/layers/footer/footer";
import { Container } from "../../../../components/wrappers/container";

const SubcategoryItems = React.lazy(async () => await import("../../../../components/page-components/subcategory/items.js"))
export default function Subcategory() {
    const router = useRouter()
    const { category, subcategory } = router.query
    const [showFilter, setShowFilter] = React.useState(false)

    return (
        <>
            <Header />
            <Main benefits={true} pageTitle={true}>
                <Container>
                    <section className="pb-8 ">
                        <div className="flex flex-row lg:gap-6 lg:p-[0px] ">
                            <>
                                {/* Left, the filter panel */}

                                <div className="hidden lg:block basis-[30%] drop-shadow-3xl">
                                    <SubcategoryFilter />
                                </div>
                                <div className="lg:hidden">

                                    <Sidebar close={setShowFilter} show={showFilter} position={"left"} header={"Filter"}>
                                        <SubcategoryFilter />
                                    </Sidebar>
                                </div>
                            </>

                            <>
                                {/* Right, a list of products */}

                                <div className=" basis-full">
                                    <div className="drop-shadow-3xl">
                                        <SubcategoryTopPanel openFilter={showFilter} setOpenFilter={setShowFilter} />
                                        <Suspense fallback={<div>Загрузка...</div>}>
                                            <SubcategoryItems observer={false}/>
                                        </Suspense>
                                    </div>
                                </div>
                            </>
                        </div>
                    </section>
                </Container>
            </Main>
            <Footer />
        </>
    )
}