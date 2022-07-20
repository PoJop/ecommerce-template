import { Footer } from "../components/layers/footer/footer";
import Header from "../components/layers/header/header";
import { Main } from "../components/layers/main";


export default function About() {
    return (
        <>
            <Header />
            <Main benefits={true} pageTitle={true}>
                <div className="h-[100vh]"></div>
            </Main >
            <Footer />
        </>
    )
}
