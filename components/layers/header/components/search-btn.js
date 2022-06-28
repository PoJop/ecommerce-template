import { SearchIcon } from "../../../../asset/icon"


export const SearchBtn = ({ search, setSearch, type = 'mob' }) => {

    return (
        <>
            <button
                onMouseOver={() => type === 'mob' && setSearch(true)}
                onMouseOut={() => type === 'mob' && setSearch(false)}
                onClick={() => {
                    type === 'desk' &&
                        setSearch(!search)
                }}
            >
                <SearchIcon color={"#666"} />
            </button>
        </>
    )
}