import { Footer } from "../components/layers/footer";
import { Header } from "../components/layers/header/header";
import { Main } from "../components/layers/main";
import { PageTitle } from "../components/layers/page-title";


export default function About() {
    return (
        <>
            <Header />
            <Main >
                <PageTitle />
                <div className="h-[100vh]"></div>
            </Main >
            <Footer />
        </>
    )
}
