import React from "react";
import { Logo } from "../../../asset/logo";
import { Container } from "./header";
import { BurgerMenuIcon, CartIcon, CloseIcon, CustomerIcon, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../../../asset/icon";
import { useCart } from "../../../contextes/cart-conrext";
import { Accordion } from "../../templates/accordion";
import { Sidebar } from "../../templates/sidebar";
import Link from "next/link";
import { PATH_ABOUT_PAGE, PATH_BLOG_PAGE, PATH_COMPARE_PAGE, PATH_CONTACTS_PAGE, PATH_FAQ_PAGE, PATH_HOME_PAGE, PATH_NEWS_PAGE } from "../../../config/path-config"
import { pages } from "../../../config/navigetion-config";
import { AccountBtn } from "./components/account-btn";
import { SearchBtn } from "./components/search-btn";
import { SearchPanel } from "./components/search-panel";

export const DevicesVertion = ({ scroll }) => {
    const [burgerMenu, setBurgerMenu] = React.useState(false)
    const [search, setSearch] = React.useState(false)

    const { predview, setPredview, cartItems } = useCart()

    return (
        <>
            <div className="block py-2 px-3 sm:px-7 lg:px-9 lg:hidden bg-[#ffffff] border-b border-dull-gray">
                <Container className={"flex justify-between"}>
                    <div className="flex items-center gap-4">
                        <button onClick={() => { setBurgerMenu(true) }}>
                            <BurgerMenuIcon />
                        </button>

                        <Link href={PATH_HOME_PAGE}>
                            <a><Logo /></a>
                        </Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <nav>
                            <ul className="flex gap-7">
                                <li className="flex align-middle"
                                >
                                    <SearchBtn search={search} setSearch={setSearch} />
                                </li>
                                <li className="flex align-middle">
                                    <AccountBtn />
                                </li>
                                <li className="flex align-middle">
                                    <button
                                        className="flex flex-col items-center"
                                        onClick={() => setPredview(true)}>
                                        <span
                                            className="absolute rounded-full text-white translate-x-[8px] translate-y-[-7px] px-[5px] bg-blue-800 text-[.625rem]"
                                        >{cartItems && cartItems.length}</span>
                                        <CartIcon color={"#666"} />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Container>

                <Sidebar close={setBurgerMenu} show={burgerMenu} position={"left"} header={"Menu"}>
                    <div className="overflow-y-auto">


                        <div className="p-4 custom-border">
                            <address>
                                <a href="#" className="text-base font-bold text-gray-400">8 800 799 99 99</a>
                                <div className="text-[.6875rem] text-gray-400">
                                    <div>St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28</div>
                                    <div>Daily 10:00–22:00</div>
                                </div>
                            </address>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Accordion title={"Catalog"} titleClass={"text-gray-400 text-sm"} icon={"Arrow"}>

                                    </Accordion>
                                </li>
                                <li>
                                    <Accordion title={"Brands"} titleClass={"text-gray-400 text-sm"} icon={"Arrow"}>

                                    </Accordion>
                                </li>
                                <li>
                                    <Accordion title={"Pages"} titleClass={"text-gray-400 text-sm"} icon={"Arrow"}>
                                        <ul>
                                            {pages.map((e, i) =>
                                                <li key={i} className="flex w-full ">
                                                    <Link href={e.path}>
                                                        <a className="flex-grow p-3 text-sm text-gray-400">{e.title}</a>
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </Accordion>
                                </li>
                                {[
                                    { title: 'Blog', path: PATH_BLOG_PAGE },
                                    { title: 'About', path: PATH_ABOUT_PAGE },
                                    { title: 'Contacts', path: PATH_CONTACTS_PAGE },
                                    { title: 'Compare', path: PATH_COMPARE_PAGE },
                                ].map((e, i) =>
                                    <li key={i}>
                                        <div className="p-4 custom-border">
                                            <Link href={e.path}>
                                                <a className="flex flex-grow w-full text-sm text-gray-400 ">
                                                    {e.title}
                                                </a>
                                            </Link>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </nav>
                        <nav>
                            <ul className="py-3 custom-border">
                                {[
                                    { title: 'News', path: PATH_NEWS_PAGE },
                                    { title: 'FAQ', path: PATH_FAQ_PAGE },
                                    { title: 'Payment', path: PATH_CONTACTS_PAGE },
                                ].map((e, i) =>
                                    <li key={i}>
                                        <div className="px-4 py-1">
                                            <Link href={e.path}>
                                                <a className="flex flex-grow w-full text-sm text-gray-400 ">
                                                    {e.title}
                                                </a>
                                            </Link>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </nav>
                        <div>
                            <ul className="flex justify-center gap-3 py-5">
                                {[
                                    { elem: <FacebookIcon color="#999" />, path: '#' },
                                    { elem: <TwitterIcon color="#999" />, path: '#' },
                                    { elem: <YoutubeIcon color="#999" />, path: '#' },
                                    { elem: <InstagramIcon color="#999" />, path: '#' },
                                ].map((e, i) =>
                                    <li key={i}>
                                        <a href={e.path}
                                            className="text-sm opacity-50 hover:opacity-70"
                                        >
                                            {e.elem}
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </Sidebar>
            </div>
            <SearchPanel search={search} setSearch={setSearch} className={"block lg:hidden"} />
        </>
    )
}
