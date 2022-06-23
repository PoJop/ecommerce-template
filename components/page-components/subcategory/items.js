import { useCatalog } from "../../../contextes/catalog-context"
import { ProductCard } from "../../templates/product-card"

export const SubcategoryItems = () => {

    const products = [
        {
            id: 1,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 100
        },
        {
            id: 2,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 100
        },
        {
            id: 3,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 100.01
        },
        {
            id: 4,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 100
        },
        {
            id: 5,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 100
        },
        {
            id: 6,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 100
        },
    ]

    const { productDisplayFormat } = useCatalog()

    return (
        <>
            <div className={`rounded-b-lg bg-white `}>
                <>
                    {/* List of products */}

                    <div className={`catalog-items grid grid-cols-1 ${productDisplayFormat === "grid" && "md:grid-cols-3"}`} >
                        {products.map((e, i) => <ProductCard key={e.id} data={e} />)}
                    </div>
                </>

                <>
                    <div>
                        <button className="w-full py-3 text-gray-900">
                            {' + Load more'.toUpperCase()}
                        </button>
                    </div>
                </>
            </div>

            <>
                {/* Pagination */}

                <div className="flex justify-center w-full py-6">
                    <ul className="flex gap-2 ">
                        {[1, 2, 3, 4].map((e, i) =>
                            <li key={i}>
                                <button>{e}</button>
                            </li>
                        )}
                    </ul>
                </div>
            </>
        </>
    )
}

