import React from "react";
import { Footer } from "../components/layers/footer/footer";
import { Header } from "../components/layers/header/header";
import { Main } from "../components/layers/main";
import { useRouter } from 'next/router'
import { useCustomer } from "../contextes/customer-context";
import { Summary } from "../components/page-components/account/summary";
import { Orders } from "../components/page-components/account/sections/orders";
import { Favorites } from "../components/page-components/account/sections/favorites";
import { Personal } from "../components/page-components/account/sections/personal";
import { Settings } from "../components/page-components/account/sections/settings";
import { PATH_ACCOUNT_PAGE, PATH_AUTH_PAGE, PATH_BOOKMARK_ACC_FAVORITES, PATH_BOOKMARK_ACC_ORDERS, PATH_BOOKMARK_ACC_PERSONAL, PATH_BOOKMARK_ACC_SETTINGS } from "../config/path-config";
import { SidebarPagesNav } from "../components/templates/sidebar-pages-nav";
import { Container } from "../components/wrappers/container";



export default function Account() {

    const { auth } = useCustomer()
    const [currentBookmark, setCurrentBookmark] = React.useState(PATH_BOOKMARK_ACC_ORDERS)

    const router = useRouter()

    React.useEffect(() => {
        let route = router.asPath
        let bookmark_i = route.indexOf('#')
        if (bookmark_i !== -1)
            setCurrentBookmark(route.substring(bookmark_i, route.length))
        else setCurrentBookmark(PATH_BOOKMARK_ACC_ORDERS)
    }, [router])

    React.useEffect(() => {
        if (!auth) router.push(PATH_AUTH_PAGE)
    }, [])

    let quantity = 1
    if (!auth) return <></>

    return (
        <>
            <Header />
            <Main >
                <Container>
                    <section className="py-8">
                        <div className="flex flex-col gap-4 lg:flex-row">
                            <aside className="flex-[1_1_25%] lg:sticky lg:top-[80px] h-full bg-white rounded-md drop-shadow-3xl">
                                <Summary />
                                <SidebarPagesNav
                                    currentPath={currentBookmark}
                                    mainPath={PATH_ACCOUNT_PAGE}
                                    list={[
                                        { title: "Orders", bookmark: PATH_BOOKMARK_ACC_ORDERS, elem: <>{quantity && <span>{`(${quantity})`}</span>}</> },
                                        { title: "Favorites", bookmark: PATH_BOOKMARK_ACC_FAVORITES, elem: <>{quantity && <span>{`(${quantity})`}</span>}</> },
                                        { title: "Personal Info", bookmark: PATH_BOOKMARK_ACC_PERSONAL },
                                    ]}
                                />
                            </aside>
                            <section className="flex-[1_1_75%]  bg-white rounded-md  drop-shadow-3xl">
                                {currentBookmark === PATH_BOOKMARK_ACC_ORDERS &&
                                    <AccountSectionContent title={"Orders"}>
                                        <Orders />
                                    </AccountSectionContent>
                                }
                                {currentBookmark === PATH_BOOKMARK_ACC_FAVORITES &&
                                    <AccountSectionContent title={"Favorites"}>
                                        <Favorites />
                                    </AccountSectionContent>
                                }
                                {currentBookmark === PATH_BOOKMARK_ACC_PERSONAL &&
                                    <AccountSectionContent title={"Personal Info"}>
                                        <Personal />
                                    </AccountSectionContent>
                                }
                                {currentBookmark === PATH_BOOKMARK_ACC_SETTINGS &&
                                    <AccountSectionContent title={"Settings"}>
                                        <Settings />
                                    </AccountSectionContent>
                                }
                            </section>
                        </div>
                    </section>
                </Container>
            </Main >
            <Footer />
        </>
    )
}

const AccountSectionContent = ({ title, children }) => {
    return (
        <div>
            <header className="p-4 custom-border">
                <h1 className="text-[1.4rem] lg:text-[2rem] text-gray-900">{title}</h1>
            </header>
            <div>
                {children}
            </div>
        </div>
    )
}