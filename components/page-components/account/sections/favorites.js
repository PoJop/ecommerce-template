import React from "react"
import { useCatalog } from "../../../../contextes/catalog-context"
import { ProductCard } from "../../../templates/product-card"

export const Favorites = () => {
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
    ]
    const { setProductDisplayFormat } = useCatalog()

    React.useEffect(() => {
        setProductDisplayFormat('row')
    }, [])

    return (
        <div>
            <ul>
                {products.map((e, i) =>
                    <li key={i} className="custom-border last:border-none">
                        <ProductCard data={e} />
                    </li>
                )}
            </ul>
        </div>
    )
}