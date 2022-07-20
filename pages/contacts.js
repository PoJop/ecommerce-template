import { Footer } from "../components/layers/footer/footer";
import Header from "../components/layers/header/header";
import { Main } from "../components/layers/main";

import { BoxWithRightNavSidebar } from "../components/wrappers/box-with-right-nav-sidebar";


export default function Contacts() {
    return (
        <>
            <Header />
            <Main pageTitle={true}>
                <BoxWithRightNavSidebar>
                    <></>
                </BoxWithRightNavSidebar>
            </Main >
            <Footer />
        </>
    )
}
