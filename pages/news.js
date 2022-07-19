import { Footer } from "../components/layers/footer/footer";
import { Header } from "../components/layers/header/header";
import { Main } from "../components/layers/main";

import { BoxWithRightNavSidebar } from "../components/wrappers/box-with-right-nav-sidebar";
import { Container } from "../components/wrappers/container";


export default function News() {
    return (
        <>
            <Header />
            <Main pageTitle={true}>
                <Container>
                    <BoxWithRightNavSidebar>
                        <></>
                    </BoxWithRightNavSidebar>
                </Container>
            </Main >
            <Footer />
        </>
    )
}
