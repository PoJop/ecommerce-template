import { BenefitsStarIcon, BenefitsPhoneIcon, BenefitsGelocationIcon, BenefitsMessageIcon, BenefitsSmileyIcon } from "../../asset/icon"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import React from "react";

export const Benefits = () => {
    const benefits = [
        {
            icon: <BenefitsStarIcon />,
            title: "Mauris placerat",
            description: "Donec mollis nibh dolor, sit amet auctor",
        },
        {
            icon: <BenefitsPhoneIcon />,
            title: "Lorem ipsum",
            description: "Sit amet, consectetur adipiscing elit",
        },
        {
            icon: <BenefitsGelocationIcon />,
            title: "Proin pharetra",
            description: "Nec quam a fermentum ut viverra",
        },
        {
            icon: <BenefitsMessageIcon />,
            title: "Praesent ultrices",
            description: "Praesent ultrices, orci nec finibus",
        },
        {
            icon: <BenefitsSmileyIcon />,
            title: "Duis condimentum",
            description: "Pellentesque eget varius arcu",
        },
    ]
    const [widthViewport, setWidthViewport] = React.useState(null)

    React.useEffect(() => {
        setWidthViewport(window.innerWidth)
        window.addEventListener("resize", () => setWidthViewport(window.innerWidth), false);
    }, [])

    return (
        <>
            <section className="h-full bg-white">
                <div className="h-full px-1  sm:px-5  py-10 m-auto max-w-[1200px] lg:max-w-[1256px]">
                    <ul className="flex h-full gap-4">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={widthViewport > 1024 ? 5 : widthViewport > 640 ? 2 : 1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            pagination={true} modules={[Pagination]}
                        >
                            {benefits.map((e, i) =>
                                <SwiperSlide key={i}>
                                    <Item
                                        data={e}
                                    />
                                </SwiperSlide>
                            )}
                        </Swiper>

                    </ul>
                </div>
            </section>
        </>
    )
}

const Item = ({ data }) => {
    const { icon, title, description } = data
    return (
        <li className="flex flex-col items-center justify-center sm:justify-start sm:flex-row">
            <div className="min-w-[65px] flex  justify-center items-top ">
                {icon}
            </div>
            <div>
                <div className="flex justify-center sm:justify-start ">
                    <strong className="text-[16px] text-gray-600 font-normal  text-center sm:text-start">
                        {title}
                    </strong>
                </div>
                <div>
                    <p className="text-sm text-center text-gray-400 sm:text-start">
                        {description}
                    </p>
                </div>
            </div>
        </li>
    )
}