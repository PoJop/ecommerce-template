import { Footer } from "../components/layers/footer/footer";
import { Header } from "../components/layers/header/header";
import { Main } from "../components/layers/main";
import { Container } from "../components/wrappers/container";
import { BoxWithRightNavSidebar } from "../components/wrappers/box-with-right-nav-sidebar"

export default function Delivery() {
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
