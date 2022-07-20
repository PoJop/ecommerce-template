import React from "react"
import { useCatalog } from "../../../contextes/catalog-context"
import { usePagination } from "../../../hooks/usePagination"
import { Pagination } from "../../templates/pagination"
import { ProductCard } from "../../templates/product-card"
import useResizeObserver from '@react-hook/resize-observer'

const useSize = (target) => {
    const [size, setSize] = React.useState()

    React.useLayoutEffect(() => {
        setSize(target.current.getBoundingClientRect())
    }, [target])

    useResizeObserver(target, (entry) => setSize(entry.contentRect))
    return size
}
const SubcategoryItems = ({ buttonLoadMore = true, pagination = true }) => {

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
        {
            id: 4,
            Label: 'Laptop',
            title: 'ASUS Zenbook UX330UA-FC020T (Rose Gold)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/4/4-medium.jpg'
            },
            price: 749
        },
        {
            id: 5,
            Label: 'Laptop',
            title: 'Dell XPS 15 9560-8968 (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/5/5-medium.jpg'
            },
            price: 949
        },
        {
            id: 6,
            Label: 'Laptop',
            title: 'Apple MacBook Air 13" MQD32LL/A 128GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/6/6-medium.jpg'
            },
            price: 849
        },
        {
            id: 7,
            Label: 'Laptop',
            title: 'Dell XPS 15 9560-8968 (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/5/5-medium.jpg'
            },
            price: 949
        },
        {
            id: 8,
            Label: 'Laptop',
            title: 'Apple MacBook Air 13" MQD32LL/A 128GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/6/6-medium.jpg'
            },
            price: 849
        },
        {
            id: 9,
            Label: 'Laptop',
            title: 'Dell XPS 15 9560-8968 (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/5/5-medium.jpg'
            },
            price: 949
        },
        {
            id: 10,
            Label: 'Laptop',
            title: 'Apple MacBook Air 13" MQD32LL/A 128GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/6/6-medium.jpg'
            },
            price: 849
        },
        {
            id: 11,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 1599
        },
        {
            id: 12,
            Label: 'Laptop',
            title: 'Apple MacBook 12" MNYN2LL/A 512GB (Rose Gold)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/2/2-medium.jpg'
            },
            price: 1549
        },
        {
            id: 13,
            Label: 'Laptop',
            title: 'Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/3/3-medium.jpg'
            },
            price: 1199
        },
        {
            id: 14,
            Label: 'Laptop',
            title: 'ASUS Zenbook UX330UA-FC020T (Rose Gold)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/4/4-medium.jpg'
            },
            price: 749
        },
        {
            id: 15,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 1599
        },
        {
            id: 16,
            Label: 'Laptop',
            title: 'Apple MacBook 12" MNYN2LL/A 512GB (Rose Gold)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/2/2-medium.jpg'
            },
            price: 1549
        },
        {
            id: 17,
            Label: 'Laptop',
            title: 'Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/3/3-medium.jpg'
            },
            price: 1199
        },
        {
            id: 18,
            Label: 'Laptop',
            title: 'ASUS Zenbook UX330UA-FC020T (Rose Gold)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/4/4-medium.jpg'
            },
            price: 749
        },
        {
            id: 19,
            Label: 'Laptop',
            title: 'Dell XPS 15 9560-8968 (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/5/5-medium.jpg'
            },
            price: 949
        },
        {
            id: 20,
            Label: 'Laptop',
            title: 'Apple MacBook Air 13" MQD32LL/A 128GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/6/6-medium.jpg'
            },
            price: 849
        },
        {
            id: 21,
            Label: 'Laptop',
            title: 'Dell XPS 15 9560-8968 (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/5/5-medium.jpg'
            },
            price: 949
        },
        {
            id: 22,
            Label: 'Laptop',
            title: 'Apple MacBook Air 13" MQD32LL/A 128GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/6/6-medium.jpg'
            },
            price: 849
        },
        {
            id: 23,
            Label: 'Laptop',
            title: 'Dell XPS 15 9560-8968 (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/5/5-medium.jpg'
            },
            price: 949
        },
        {
            id: 34,
            Label: 'Laptop',
            title: 'Apple MacBook Air 13" MQD32LL/A 128GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/6/6-medium.jpg'
            },
            price: 849
        },
        {
            id: 35,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 1599
        },
        {
            id: 36,
            Label: 'Laptop',
            title: 'Apple MacBook 12" MNYN2LL/A 512GB (Rose Gold)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/2/2-medium.jpg'
            },
            price: 1549
        },
        {
            id: 37,
            Label: 'Laptop',
            title: 'Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/3/3-medium.jpg'
            },
            price: 1199
        },
        {
            id: 38,
            Label: 'Laptop',
            title: 'ASUS Zenbook UX330UA-FC020T (Rose Gold)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/4/4-medium.jpg'
            },
            price: 749
        },
    ]

    const [quantityItems, setQuantityItems] = React.useState(8)
    const [grid, setGrid] = React.useState(4)

    const { productDisplayFormat } = useCatalog()
    const { showItems, currentPage, setCurrentPage, pages } = usePagination(products, quantityItems)
    const target = React.useRef(null)
    const size = useSize(target)

    const changeGrid = () => {
        let maxWidth = size?.width > 960
        setGrid(maxWidth ? 4 : 3)
        setQuantityItems(maxWidth ? 8 : 9)
    }
    React.useEffect(() => changeGrid, [size])

    const styleGridCols = {
        "3": "md:grid-cols-3 catalog-items-3",
        "4": "md:grid-cols-4 catalog-items-4"
    }[`${grid}`]

    return (
        <>
            <div className={`rounded-b-lg bg-white `} ref={target}>
                <>
                    {/* List of products */}

                    <div className={`grid grid-cols-1 ${productDisplayFormat === "grid" && styleGridCols}`} >
                        {showItems && showItems.map((e, i) => <ProductCard key={i} data={e} />)}
                    </div>
                </>

                <>
                    {buttonLoadMore && pages > 0 &&
                        <div>
                            <button
                                className="w-full py-3 text-gray-900"
                                onClick={() => {
                                    setCurrentPage(0)
                                    setQuantityItems(quantityItems + quantityItems)
                                }}
                            >
                                {' + Load more'.toUpperCase()}
                            </button>
                        </div>
                    }
                </>
            </div>

            <>
                {/* Pagination */}

                {pagination && <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
            </>
        </>
    )
}

export default React.memo(SubcategoryItems)