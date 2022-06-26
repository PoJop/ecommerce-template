
import Link from 'next/link'
import { PATH_ACCOUNT_PAGE, PATH_BOOKMARK_ACC_FAVORITES, PATH_BOOKMARK_ACC_ORDERS, PATH_BOOKMARK_ACC_PERSONAL } from '../../../config/path-config'


export const AccountNavigation = ({ accountSection }) => {

    const AccountTabBtn = ({ title, tabName = '', quantity = null }) => (

        <Link href={`${PATH_ACCOUNT_PAGE}${tabName}`}>
            <a
                className={`block py-2 px-4 transition-all text-sm lg:text-[16px] w-full text-left ${accountSection === tabName.toLocaleLowerCase() ? "shadow-[inset_2px_0_0_#1e87f0] text-gray-900 font-bold" : " text-gray-400  hover:shadow-[inset_2px_0_0_#1e87f0] hover:text-gray-600"}`}
            >
                {title}
                {quantity && <span>{`(${quantity})`}</span>}
            </a>
        </Link>
    )

    return (
        <>
            <div>
                <AccountTabBtn title="Orders" tabName={PATH_BOOKMARK_ACC_ORDERS} quantity={2} />
                <AccountTabBtn title="Favorites" tabName={PATH_BOOKMARK_ACC_FAVORITES} quantity={3} />
                <AccountTabBtn title="Personal Info" tabName={PATH_BOOKMARK_ACC_PERSONAL} />
            </div>
        </>
    )
}

