import React from "react";
import Link from "next/link"
import { Logo } from "../../../../asset/logo";
import { Container } from "../header";
import { ArrowIcon, CartIcon, CustomerIcon, GeolocationIcon, PhoneIcon, WatchIcon } from "../../../../asset/icon";
import { useCart } from "../../../../contextes/cart-conrext";
import { PATH_ABOUT_PAGE, PATH_BLOG_PAGE, PATH_CATALOG_PAGE, PATH_CONTACTS_PAGE, PATH_FAQ_PAGE, PATH_HOME_PAGE, PATH_NEWS_PAGE } from "../../../../config/path-config";
import { AccountBtn } from "../components/account-btn";
import { SearchPanel } from "../components/search-panel";
import { SearchBtn } from "../components/search-btn";
import { DropDownNav } from "./components/drop-down-nav";
import { hiddenPageScrolling } from "../../../../utils/utils";

export const DesktopVertion = ({ scroll }) => {

    const [dropDown, setDropDown] = React.useState({
        open: false,
        index: 0,
        element: <></>,
    })

    React.useEffect(() => {
        hiddenPageScrolling(dropDown.open)
    }, [dropDown.open])

    const [search, setSearch] = React.useState(false)

    const { predview, setPredview, cartItems } = useCart()

    return (
        <>
            <div className={` hidden p-2 lg:block bg-gray-950  px-0 sm:px-7 lg:px-10  transition-all duration-[80ms] ${scroll > 30 && "h-0 overflow-hidden p-0"}`}>
                <Container>
                    <div className="flex justify-between ">
                        <div>
                            <address>
                                <ul className="flex gap-4">
                                    <li>
                                        <a
                                            className="flex gap-2 text-sm text-white underline opacity-50 underline-offset-4 decoration-dotted hover:opacity-70"
                                            href={`tel:${'88007999999'}`}>
                                            <PhoneIcon /><span className="oblique">8 800 799 99 99</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div
                                            className="flex gap-2 text-sm text-white underline opacity-50 underline-offset-4 decoration-dotted"
                                        >
                                            <GeolocationIcon /><span>St. Petersburg, Nevsky Prospect 28</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className="flex gap-2 text-sm text-white opacity-50"
                                        >
                                            <WatchIcon /><span>Daily 10:00–22:00</span>
                                        </div>
                                    </li>
                                </ul>
                            </address>
                        </div>
                        <div>
                            <nav>
                                <ul className="flex gap-7">
                                    {[
                                        { title: 'News', path: PATH_NEWS_PAGE },
                                        { title: 'FAQ', path: PATH_FAQ_PAGE },
                                        { title: 'Payment', path: PATH_CONTACTS_PAGE },
                                    ].map((e, i) =>
                                        <li key={i}>
                                            <Link href={e.path}>
                                                <a className="text-sm text-gray-400">
                                                    {e.title}
                                                </a>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Container>
            </div>


            <div className="hidden p-3 px-0 sm:px-7 lg:px-10 lg:block bg-[#ffffff] border-b border-dull-gray">
                <Container className={"flex justify-between"}>
                    <div className="flex items-center gap-6">
                        <Link href={PATH_HOME_PAGE}>
                            <a><Logo /></a>
                        </Link>
                        <nav>
                            <ul className="flex gap-4 text-sm">

                                <DropDownNav
                                    dropDown={dropDown}
                                    setDropDown={setDropDown}
                                />

                                {[
                                    { title: 'BLOG', path: PATH_BLOG_PAGE },
                                    { title: 'ABOUT', path: PATH_ABOUT_PAGE },
                                    { title: 'CONTACTS', path: PATH_CONTACTS_PAGE },
                                ].map((e, i) =>
                                    <li key={i}>
                                        <Link href={e.path}>
                                            <a className="px-2 text-gray-400 hover:text-gray-600">
                                                {e.title.toLocaleUpperCase()}
                                            </a>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-6">
                        <nav>
                            <ul className="flex gap-7">
                                <li className="flex align-middle">
                                    <SearchBtn search={search} setSearch={setSearch} type="desk" />
                                </li>
                                <li className="flex align-middle">
                                    <AccountBtn />
                                </li>
                                <li>
                                    <button
                                        className="flex flex-col items-center"
                                        onClick={() => setPredview(true)}>
                                        <span
                                            className="absolute rounded-full text-white translate-x-[10px] translate-y-[-7px] px-[5px] bg-blue-800 text-[.625rem]"
                                        >{cartItems && cartItems.length}</span>
                                        <CartIcon color={"#666"} />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </div>
            {dropDown.open &&
                <div
                    className="bg-white drop-shadow-xl"
                    onMouseOver={() => {
                        setDropDown({ ...dropDown, open: true, })
                    }}
                    onMouseOut={() => {
                        setDropDown({ ...dropDown, open: false, })
                    }}
                >
                    {dropDown.element}
                </div>
            }

            {/* <SearchPanel search={search} setSearch={setSearch} className={"hidden lg:block"} type="desk" /> */}
        </>
    )
}
