import { SearchIcon } from "../../../../asset/icon"


export const SearchBtn = ({ search, setSearch }) => {

    return (
        <>
            <div
                onMouseOver={(e) => setSearch(true)}
                onMouseOut={(e) => setSearch(false)}
            >
                <SearchIcon color={"#666"}/>
            </div>
        </>
    )
}