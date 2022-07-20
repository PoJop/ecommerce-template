import React from "react"


export const usePagination = (dataItems, currentQuantityItems) => {

    const [currentPage, setCurrentPage] = React.useState(0)
    const [pages, setPages] = React.useState(null)
    const [showItems, setShowItems] = React.useState([])

    React.useEffect(() => {
        if (dataItems, currentQuantityItems) {
            let quantity = dataItems.length / currentQuantityItems
            setPages(quantity <= 1 ? 0 : quantity)
        }
    }, [dataItems, currentQuantityItems])

    React.useEffect(() => {
        let currentItems = []
        for (let index = 0; index < currentQuantityItems; index++) {
            let i = currentQuantityItems * currentPage + index
            if (!dataItems[i]) break
            currentItems.push(dataItems[currentQuantityItems * currentPage + index])
        }
        setShowItems(currentItems)
    }, [currentPage, currentQuantityItems])

    return {
        showItems,
        currentPage,
        pages,
        setCurrentPage
    }
}