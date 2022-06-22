import React from "react";
import Link from "next/link"
import { ProductCard } from "./product-card";
import { useCatalog } from "../contextes/catalog-context";
import Slider from "react-slick";
import { ArrowIcon } from "../asset/icon";

export const RelatedProducts = ({ data }) => {
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
    const [widthViewport, setWidthViewport] = React.useState(null)
    React.useEffect(() => {
        setWidthViewport(window.innerWidth)
        window.addEventListener("resize", () => setWidthViewport(window.innerWidth), false);
    }, [])
    const sliderRef = React.useRef(null)
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(1)
    React.useEffect(() => {
        // sliderRef.current.slickGoTo(currentSlideIndex)
        console.log(currentSlideIndex)
    }, [currentSlideIndex])

    const settings = {
        infinite: false,
        speed: 500,
        // slidesToShow: 1,
        slidesToScroll: 1,
        // afterChange: index => setCurrentSlideIndex(++index),
        nextArrow: <></>,
        prevArrow: <></>
    };
    return (
        <>
            <div className="pb-10">
                <div className="p-4">
                    <h2 className="text-2xl text-gray-900">Related Products</h2>
                    {/* <div>
                    <button onClick={() => {
                        setCurrentSlideIndex(currentSlideIndex - 1)
                        // sliderRef.current.slickGoTo( 2)
                    }}><ArrowIcon /></button>
                    <button onClick={() => {
                        setCurrentSlideIndex(currentSlideIndex + 1)
                        // sliderRef.current.slickGoTo(1)
                    }}><ArrowIcon /></button>
                </div> */}
                </div>
                <div className="drop-shadow-3xl ">
                    <Slider {...settings} ref={sliderRef} slidesToShow={widthViewport > 1024 && 4 || widthViewport > 768 && 3 || widthViewport < 768 && 1}  >
                        {products.map((e, i) => <ProductCard key={e.id} data={e} />)}
                    </Slider>
                </div>
                {/* <div className={`catalog-items grid grid-cols-1 ${productDisplayFormat === "grid" && "md:grid-cols-3"}`} >
                {products.map((e, i) => <ProductCard key={e.id} data={e} />)}
            </div> */}
            </div>
        </>
    )
}
