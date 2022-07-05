import React from "react"
import { animateScroll as scroll } from 'react-scroll'
import { ArrowIcon } from "../../asset/icon"



export const Pagination = ({ pages = 0, currentPage, setCurrentPage }) => {

    const [pageNum, setPageNum] = React.useState([])

    React.useEffect(() => {
        if (pages) {
            const arr = []
            for (let index = 0; index < pages; index++) {
                arr.push(index)
            }
            setPageNum(arr)
        }
    }, [pages, currentPage])

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            delay: 10,
            smooth: true,
        })
    }
    return (
        <>
            <div className="flex justify-center w-full gap-3 py-6">
                <ul className="flex gap-3 ">
                    {pages !== 0 && pageNum && pageNum.map((num, i) =>
                        <li key={i} className={`${currentPage === num ? "text-gray-600" : "text-gray-400"}`}>
                            <button
                                onClick={() => {
                                    scrollToTop()
                                    setCurrentPage(num)
                                }}
                            >{num + 1}</button>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}
