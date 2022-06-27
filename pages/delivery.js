import { Footer } from "../components/layers/footer";
import { Header } from "../components/layers/header/header";
import { Main } from "../components/layers/main";
import { PageTitle } from "../components/layers/page-title";
import { RightSideber } from "../components/page-components/faq/right-sideber";


export default function Delivery() {
    return (
        <>
            <Header />
            <Main >
                <PageTitle />
                <section className="flex gap-4 pb-8">
                    <div className="bg-white rounded-md drop-shadow-3xl flex-[1_1_75%]">

                    </div>
                    <aside className="hidden lg:block bg-white rounded-md drop-shadow-3xl flex-[1_1_25%] h-full sticky top-[80px]">
                        <RightSideber />
                    </aside>
                </section>
            </Main >
            <Footer />
        </>
    )
}
