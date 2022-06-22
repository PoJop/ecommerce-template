import React, { useState } from 'react';
import Slider from "react-slick";


export const ProductImeges = () => {
    const sliderRef = React.useRef(null)
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(1)
    const [widthViewport, setWidthViewport] = React.useState(null)
    React.useEffect(() => {
        setWidthViewport(window.innerWidth)
        window.addEventListener("resize", () => setWidthViewport(window.innerWidth), false);
    }, [])
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: index => setCurrentSlideIndex(++index),
        className: 'slide-custom',
        nextArrow: <></>,
        prevArrow: <></>
    };
    const settings2 = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>
    };

    const arrImages = [
        'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-large.jpg',
        'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-add-1-large.jpg',
        'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-add-2-large.jpg',
        'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-add-3-large.jpg',
        'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-add-4-large.jpg'
    ]

    return (
        <aside className='flex flex-col lg:border-r lg:border-dull-gray'>
            <div className='h-[80%] flex-[1_1_80%] '>
                <Slider {...settings} ref={sliderRef}  >
                    {arrImages.map((e, i) =>
                        <div key={i}>
                            <figure className='w-full h-full px-2 py-4 md:px-12'>
                                <img src={e} className="object-contain max-h-[700px] m-auto" />
                            </figure>
                        </div>
                    )}
                </Slider>
            </div>
            <div className=" justify-center flex-[1_1_20%] flex pb-4">

                <div className="w-[60%] ">
                    {widthViewport > 640 ?
                        <Slider {...settings2} >
                            {arrImages.map((e, i) =>
                                <div key={i} className="">
                                    <button
                                        onClick={() => sliderRef.current.slickGoTo(i)}
                                        className={`border rounded ${currentSlideIndex === i + 1 ? " border-sky-500" : "border-[#9994] "} p-4`}>
                                        <figure >
                                            <img src={e} className="w-[40px] h-[40px] " />
                                        </figure>
                                    </button>
                                </div>
                            )}
                        </Slider> :
                        <div className='flex justify-center gap-3 '>
                            {arrImages.map((e, i) =>
                                <div key={i} className="">
                                    <button
                                        onClick={() => sliderRef.current.slickGoTo(i)}
                                        className={`border border-gray-600 rounded-full opacity-60  ${currentSlideIndex === i + 1 ? " bg-gray-600" : "bg-transparent"} w-[10px] h-[10px]`}>

                                    </button>
                                </div>
                            )}
                        </div>
                    }
                </div>
            </div>
        </aside>
    )
}