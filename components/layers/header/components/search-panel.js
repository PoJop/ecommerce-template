import { CloseIcon } from "../../../../asset/icon"


export const SearchPanel = ({ search, setSearch, className, type = 'mob' }) => {

    return (
        <>
            {search &&
                <div
                    onMouseOver={() => type === 'mob' && setSearch(true)}
                    onMouseOut={() => type === 'mob' && setSearch(false)}
                    onClick={() => {
                        type === 'desk' &&
                            setSearch(!search)
                    }}
                    className={` bg-white drop-shadow-xl ${className} `}
                >
                    <form className="flex items-center p-3">
                        <div className="grow">
                            <input
                                className="w-full p-1 text-xl text-gray-600 focus:outline-none"
                                placeholder="Search..."
                            />
                        </div>
                        <div>
                            <button
                                onClick={(e) => {
                                    e.preventDefault()
                                    setSearch(false)
                                }}
                            >
                                <CloseIcon />
                            </button>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}