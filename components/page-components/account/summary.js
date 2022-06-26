import Link from 'next/link'
import { LogOutIcon, SettingsIcon } from '../../../asset/icon'
import { PATH_ACCOUNT_PAGE } from '../../../config/path-config'



export const Summary = ({ data = {
    avatar: { url: 'https://chekromul.github.io/uikit-ecommerce-template/images/avatar.jpg' },
    name: 'Thomas Bruns',
    registr_date: 'Joined June 6, 2018'
} }) => {

    const { avatar: { url }, name, registr_date } = data

    return (
        <>
            <div className="flex flex-col items-center gap-4 p-4 custom-border">
                <div>
                    <img
                        className="rounded-full w-[170px] lg:w-[100px] h-auto "
                        src={url}
                        alt="#"
                    />
                </div>
                <div>
                    <div className="text-xl text-center text-gray-900">
                        {name}
                    </div>
                    <div className="text-sm text-center text-gray-400">
                        {registr_date}
                    </div>
                </div>
                <div className="flex gap-2">
                    <div>
                        <Link href={`${PATH_ACCOUNT_PAGE}#settings`}>
                            <a
                                className={`block py-1 px-3 text-sm text-gray-900 transition-all rounded-sm w-full text-left border border-dull-gray hover:border-gray-400 `}
                            >
                                <span className="flex items-center gap-1"><SettingsIcon/> SETTINGS</span>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <button
                            className="h-full px-3 py-1 border rounded-sm border-dull-gray hover:border-gray-400"
                        >
                            <LogOutIcon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}