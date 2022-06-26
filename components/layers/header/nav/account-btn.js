import React from "react";
import { useCustomer } from "../../../../contextes/customer-context";
import { useRouter } from 'next/router'
import { PATH_ACCOUNT_PAGE, PATH_AUTH_PAGE, PATH_BOOKMARK_ACC_FAVORITES, PATH_BOOKMARK_ACC_ORDERS, PATH_BOOKMARK_ACC_PERSONAL, PATH_BOOKMARK_ACC_SETTINGS } from "../../../../config/path-config";
import { CustomerIcon } from "../../../../asset/icon";
import Link from "next/link"

export const AccountBtn = () => {

    const { auth } = useCustomer()
    const [menu, setMenu] = React.useState(false)
    const router = useRouter()

    const handler = () => {
        if (menu) {
            if (!auth) router.push(PATH_AUTH_PAGE)
            else router.push(PATH_ACCOUNT_PAGE)
        }
    }
    
    return (
        <>
            <div
                className="flex flex-col items-end"
                onMouseOver={() => setMenu(true)}
                onMouseOut={() => setMenu(false)}
            >
                <button
                    onClick={handler}
                >
                    <CustomerIcon color={"#666"} />
                </button>
                <aside className={`${menu ? "pointer-events-auto": "pointer-events-none	"} absolute w-[8.5rem] transition-all translate-y-[10px] lg:translate-y-[20px] pt-6 ${menu ? "opacity-100" : "opacity-0"}`}>
                    <div className="bg-white rounded-md h-max drop-shadow-3xl">
                        <nav className="w-full custom-border">
                            <ul className="flex flex-col p-3 text-gray-400">
                                <li className="flex">
                                    <Link href={PATH_ACCOUNT_PAGE + PATH_BOOKMARK_ACC_ORDERS}>
                                        <a className="w-full py-1 hover:text-gray-600">Orders</a>
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link href={PATH_ACCOUNT_PAGE + PATH_BOOKMARK_ACC_FAVORITES}>
                                        <a className="w-full py-1 hover:text-gray-600">Favorites</a>
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link href={PATH_ACCOUNT_PAGE + PATH_BOOKMARK_ACC_PERSONAL}>
                                        <a className="w-full py-1 hover:text-gray-600">Personal</a>
                                    </Link>
                                </li>
                                <li className="flex">
                                    <Link href={PATH_ACCOUNT_PAGE + PATH_BOOKMARK_ACC_SETTINGS}>
                                        <a className="w-full py-1 hover:text-gray-600">Settings</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="p-3 text-gray-400 ">
                            <button className="hover:text-gray-600">
                                Log out
                            </button>
                        </div>
                    </div>
                </aside>
            </div>

        </>
    )
}