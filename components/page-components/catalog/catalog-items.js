import Link from "next/link"
import { useCatalog } from "../../../contextes/catalog-context"

export const CatalogItems = () => {

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
            price: 100
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

                    <div className={`grid grid-cols-1 ${productDisplayFormat === "grid" && "md:grid-cols-3"}`} >
                        {products.map((e, i) => <Item key={e.id} data={e} />)}
                    </div>
                </>

                <>
                    <div>
                        <button className="w-full">
                            + Load more
                        </button>
                    </div>
                </>
            </div>

            <>
                {/* Pagination */}

                <div className="flex justify-center w-full">
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

const Item = ({ data }) => {

    const { id, Label, title, image, price } = data
    const { productDisplayFormat } = useCatalog()

    return (
        <article className={`flex flex-row p-5 gap-4  ${productDisplayFormat === "grid" && "md:flex-col"} border-[0.5px] border-dull-gray hover:drop-shadow-xl bg-white transition-all cursor-pointer`}>

            <div className="absolute"></div>
            <div className="p-2 flex-[1_0_80px] max-h-[120px]  md:max-h-[200px] max-w-[120px] md:max-w-none">
                <img className="object-contain max-h-[120px] md:max-h-[200px] m-auto" src={image.url} />
            </div>
            <div className={`flex flex-col ${productDisplayFormat === "row" && "md:flex-row"} gap-2 grow`}>
                <div className="flex-[1_0_70%]">
                    {/* Product Label */}
                    <div>
                        <strong>{Label}</strong>
                    </div>
                    {/* Product title */}
                    <div>
                        <Link href={`/product/${id}`}>
                            <a><h2>{title}</h2></a>
                        </Link>

                    </div>
                </div>
                <div className={`flex justify-between mt-2 flex-[1_0_30%] ${productDisplayFormat === "row" && "md:flex-col"}`}>
                    <div>
                        <div></div>
                        <div>${price}</div>
                    </div>
                    <div>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </article>
    )
}