import React from "react";
import { Footer } from "../../components/layers/footer";
import { Header } from "../../components/layers/header/header";
import { Main } from "../../components/layers/main";
import { useCustomer } from "../../contextes/customer-context";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ProductCard } from "../../components/templates/product-card";
import { useCatalog } from "../../contextes/catalog-context";
import { PATH_ACCOUNT_PAGE } from "../../config/path-config";



export default function Account() {

    const { auth } = useCustomer()
    const [accountTab, setAccountTab] = React.useState('orders')
    const router = useRouter()
    // React.useEffect(() => {
    //     if (!auth) router.push(PATH_AUTH_PAGE)
    // }, [auth])

    React.useEffect(() => {
        let r = router.asPath
        if (r.indexOf('#') !== -1)
            setAccountTab(r.substring(r.indexOf('#') + 1, r.length))
        else setAccountTab('orders')
    }, [router])

    const AccountTabBtn = ({ title, tabName = '', quantity = null }) => (

        <Link href={`${PATH_ACCOUNT_PAGE}#${tabName}`}>
            <a
                className={`block py-2 px-4 transition-all w-full text-left ${accountTab === tabName.toLocaleLowerCase() ? "shadow-[inset_2px_0_0_#1e87f0] text-gray-900 font-bold" : " text-gray-400  hover:shadow-[inset_2px_0_0_#1e87f0] hover:text-gray-600"}`}

            >{title} {quantity && <span>{`(${quantity})`}</span>}</a>
        </Link>
    )

    const AccountTabContent = ({ title, children }) => (
        <div>
            <header className="p-4 custom-border">
                <h1 className="text-[2rem] text-gray-900">{title}</h1>
            </header>
            <div>
                {children}
            </div>
        </div>
    )

    if (!auth) return <></>

    return (
        <>
            <Header />
            <Main >
                <section className="py-8">
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <aside className="flex-[1_1_25%] lg:sticky lg:top-[80px] h-full bg-white rounded-md drop-shadow-3xl">
                            <div className="p-4 custom-border">

                            </div>
                            <div>
                                <AccountTabBtn title="Orders" tabName="orders" quantity={2} />
                                <AccountTabBtn title="Favorites" tabName="favorites" quantity={3} />
                                <AccountTabBtn title="Personal Info" tabName="info" />
                            </div>
                        </aside>
                        <section className="flex-[1_1_75%]  bg-white rounded-md  drop-shadow-3xl">
                            {accountTab === 'orders' &&
                                <AccountTabContent title={"Orders"}>
                                    <Orders />
                                </AccountTabContent>
                            }
                            {accountTab === 'favorites' &&
                                <AccountTabContent title={"Favorites"}>
                                    <Favorites />
                                </AccountTabContent>
                            }
                            {accountTab === 'info' &&
                                <AccountTabContent title={"Personal Info"}>
                                    <Info />
                                </AccountTabContent>
                            }
                        </section>
                    </div>
                </section>
            </Main >
            <Footer />
        </>
    )
}

const Orders = () => {

    return (
        <div>
            <ul>
                {[1, 2].map((e, i) =>
                    <li key={i} className="p-4 custom-border last:border-none">
                        <div>
                            <Link href={'#'}>
                                <a className="text-xl text-gray-900">#36637649</a>
                            </Link>
                            &nbsp;
                            <span className="text-sm text-gray-400">from June 17, 2018</span>
                        </div>
                        <div className="py-6">
                            <table className="w-full">
                                <tbody className="w-full">
                                    <tr className="w-full custom-border ">
                                        <th className="py-[7px] lg:py-[10px] lg:w-[300px] text-gray-400 font-normal  block lg:table-cell">
                                            Items
                                        </th>
                                        <td className="py-[7px] lg:py-[10px] text-gray-600 block lg:table-cell ">
                                            7
                                        </td>
                                    </tr>
                                    <tr className="w-full custom-border">
                                        <th className="py-[7px] lg:py-[10px] lg:w-[300px] text-gray-400 font-normal block lg:table-cell">
                                            Shipping
                                        </th>
                                        <td className="py-[7px] lg:py-[10px] text-gray-600 block lg:table-cell ">
                                            Pick up from store
                                        </td>
                                    </tr>
                                    <tr className="w-full custom-border">
                                        <th className="py-[7px] lg:py-[10px] lg:w-[300px] text-gray-400 font-normal block lg:table-cell">
                                            Payment
                                        </th>
                                        <td className="py-[7px] lg:py-[10px] text-gray-600 block lg:table-cell ">
                                            Online by card
                                        </td>
                                    </tr>
                                    <tr className="w-full custom-border">
                                        <th className="py-[7px] lg:py-[10px] lg:w-[300px] text-gray-400 font-normal block lg:table-cell">
                                            Total
                                        </th>
                                        <td className="py-[7px] lg:py-[10px] text-gray-600 block lg:table-cell ">
                                            $4896.00
                                        </td>
                                    </tr>
                                    <tr className="w-full">
                                        <th className="py-[7px] lg:py-[10px] lg:w-[300px] text-gray-400 font-normal block lg:table-cell">
                                            Status
                                        </th>
                                        <td className="py-[7px] lg:py-[10px] text-gray-600 block lg:table-cell">
                                            <span>Processing</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
const Favorites = () => {
    const products = [
        {
            id: 1,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 1599
        },
        {
            id: 2,
            Label: 'Laptop',
            title: 'Apple MacBook 12" MNYN2LL/A 512GB (Rose Gold)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/2/2-medium.jpg'
            },
            price: 1549
        },
        {
            id: 3,
            Label: 'Laptop',
            title: 'Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/3/3-medium.jpg'
            },
            price: 1199
        },
    ]
    const { setProductDisplayFormat } = useCatalog()
    React.useEffect(() => {
        setProductDisplayFormat('row')
    }, [])
    return (
        <div>
            <ul>
                {products.map((e, i) =>
                    <li key={i} className="custom-border last:border-none">
                        <ProductCard data={e} />
                    </li>
                )}
            </ul>
        </div>
    )
}
const Info = () => {

    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </div>
    )
}