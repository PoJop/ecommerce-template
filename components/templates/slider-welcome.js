import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { PictureFormats } from "./img/picture-formats";

export const SliderWelcome = () => {

    const settings = {
        cssMode: true,
        navigation: true,
        mousewheel: true,
        keyboard: true,
        autoplay: { delay: 6000, disableOnInteraction: false, },
        pagination: { clickable: true, },
        modules: [Navigation, Pagination, Mousewheel, Keyboard, Autoplay]
    }

    return (
        <>
            <div className="slider_welcome">
                <Swiper {...settings}>
                    {[
                        ["https://chekromul.github.io/uikit-ecommerce-template/images/promo/macbook-new.jpg"],
                        ["https://chekromul.github.io/uikit-ecommerce-template/images/promo/iphone.jpg"],
                        ["https://chekromul.github.io/uikit-ecommerce-template/images/promo/ipad.jpg"],
                    ].map((elem, index) =>
                        <SwiperSlide key={index}>
                            <PictureFormats image={elem} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </>
    )
} 