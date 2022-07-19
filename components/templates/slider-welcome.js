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
                        ["https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001webp.webp", "https://img.freepik.com/free-photo/fried-chicken-breast-cheese-tomato-french-fries-ketchup-and-green-salad-side-view-jpg_141793-1782.jpg?w=2000"],
                        ["https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001webp.webp"],
                        ["https://st3.depositphotos.com/6579288/16320/i/600/depositphotos_163200234-stock-photo-kolobok-bun-sings-a-song.jpg"],
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