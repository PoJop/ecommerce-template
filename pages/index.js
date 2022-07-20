import React from "react";
import Head from 'next/head'

import Header from "../components/layers/header/header";
import { Main } from "../components/layers/main";
import { Footer } from "../components/layers/footer/footer";

import { Container } from "../components/wrappers/container";
import { SliderWelcome } from "../components/templates/slider-welcome";
import SubcategoryItems from "../components/page-components/subcategory/items";
import Link from "next/link";
import { ArrowIcon, EmailIcon } from "../asset/icon";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function Home() {


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header key={'header'} />
      <Main benefits={true}>

        <Container padding={"none"} width={"none"}>
          <SliderWelcome />
        </Container>

        <Container className={"bg-[#ffff]"}>
          <MemoSeeCategories />
        </Container>

        <Container className={"py-[20px]"}>
          <h2 className="text-center text-gray-900 text-1.4xl lg:text-3xl2 mb-[20px]">
            Trending Items
          </h2>
          <div className="drop-shadow-3xl">
            <SubcategoryItems buttonLoadMore={false} pagination={false} />
          </div>
          <PartitionRedirectionButton title={"SHOP ALL"} />
        </Container>

        {/* <Container className={"bg-[#ffff]"}>
          <h2 className="text-center text-gray-900 text-1.4xl lg:text-3xl2 mb-[20px]">
            Popular Brands
          </h2>
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {[
              { icon: "https://chekromul.github.io/uikit-ecommerce-template/images/brands/apple.svg", path: "#" },
              { icon: "https://chekromul.github.io/uikit-ecommerce-template/images/brands/samsung.svg", path: "#" },
              { icon: "https://chekromul.github.io/uikit-ecommerce-template/images/brands/sony.svg", path: "#" },
              { icon: "https://chekromul.github.io/uikit-ecommerce-template/images/brands/microsoft.svg", path: "#" },
              { icon: "https://chekromul.github.io/uikit-ecommerce-template/images/brands/intel.svg", path: "#" },
              { icon: "https://chekromul.github.io/uikit-ecommerce-template/images/brands/hp.svg", path: "#" },
              { icon: "https://chekromul.github.io/uikit-ecommerce-template/images/brands/lg.svg", path: "#" },
              { icon: "https://chekromul.github.io/uikit-ecommerce-template/images/brands/asus.svg", path: "#" },
              { icon: "https://chekromul.github.io/uikit-ecommerce-template/images/brands/acer.svg", path: "#" },
              { icon: "https://chekromul.github.io/uikit-ecommerce-template/images/brands/dell.svg", path: "#" },
              { icon: "https://chekromul.github.io/uikit-ecommerce-template/images/brands/canon.svg", path: "#" },
            ].map((elem, index) =>
              <SwiperSlide key={index}>
                <figure >
                  <img src={elem.icon} alt="#" />
                </figure>
              </SwiperSlide>
            )}

          </Swiper>
        </Container> */}

        <Container className={"py-[20px]"}>
          <h2 className="text-center text-gray-900 text-1.4xl lg:text-3xl2 mb-[20px]">
            Blog
          </h2>
          <MemoBlog />
        </Container>

        <Container className={"bg-[#ffff]"}>
          <div className="flex flex-col flex-wrap justify-between sm:flex-row p-[20px]">
            <About />

            <LatestNews />
          </div>
        </Container>
        <Container className={"bg-[#1e87f0]"} >
          <SubscribeForUpdates />
        </Container>
      </Main >
      <Footer />
    </>
  )
}

const SeeCategories = () => {

  const categories = [
    {
      image: "https://chekromul.github.io/uikit-ecommerce-template/images/catalog/laptops.png",
      title: "Laptops",
      price: 149
    },
    {
      image: "https://chekromul.github.io/uikit-ecommerce-template/images/catalog/smartphones.png",
      title: "Smartphones",
      price: 99
    },
    {
      image: "https://chekromul.github.io/uikit-ecommerce-template/images/catalog/tablets.png",
      title: "Tablets",
      price: 129
    },
    {
      image: "https://chekromul.github.io/uikit-ecommerce-template/images/catalog/watches.png",
      title: "Smart Watches",
      price: 49
    },
    {
      image: "https://chekromul.github.io/uikit-ecommerce-template/images/catalog/consoles.png",
      title: "Gaming Consoles",
      price: 399
    },
    {
      image: "https://chekromul.github.io/uikit-ecommerce-template/images/catalog/cameras.png",
      title: "Cameras",
      price: 129
    },
  ]

  return (
    <section className="py-[40px]">
      <ul className="grid grid-cols-1 p-4 vsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[15px]">
        {categories.map((elem, index) =>
          <Link href={"#"}>
            <a className="transition-all">
              <li key={index} className="flex flex-col items-center justify-center p-3 text-gray-400 hover:text-gray-600 transition-all hover:shadow-[0_14px_25px_rgb(0_0_0/16%)] cursor-pointer ">
                <div className="">
                  <figure className="w-[180px] h-[140px] lg:w-[150px] lg:h-[110px]">
                    <img
                      src={elem.image}
                      className="object-contain w-full h-full p-2"
                    />
                  </figure>
                </div>
                <div className="mt-3 text-center ">
                  <div className="text-[16px] truncate  max-w-[150px] ">{elem.title}</div>
                  <div className="text-gray-400 text-[.6875rem]">from ${elem.price}</div>
                </div>
              </li>
            </a>
          </Link>
        )}
      </ul>
      <PartitionRedirectionButton title={"SEE ALL CATEGORIES"} />

    </section>
  )
}
const MemoSeeCategories = React.memo(SeeCategories)



const Blog = () => {

  return (
    <section className="h-full">
      <div className="flex flex-wrap justify-between">
        {[
          {
            image: "https://chekromul.github.io/uikit-ecommerce-template/images/articles/macbook-photo.jpg",
            date: "May 21, 2018",
            title: "Everything You Need to Know About the MacBook Pro",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare."

          },
          {
            image: "https://chekromul.github.io/uikit-ecommerce-template/images/articles/macos.jpg",
            date: "May 21, 2018",
            title: "Apple introduces macOS Mojave",
            description: "Praesent consequat justo eu massa malesuada posuere. Donec ultricies tincidunt nisl, sed euismod nulla venenatis maximus. Maecenas sit amet semper tellus. Pellentesque imperdiet finibus sapien, a consectetur eros auctor a."

          },
        ].map((elem, index) =>
          <article
            key={index}
            className="flex-[1_0_100%] sm:flex-[1_0_45%] first:mr-[30px] flex flex-col transition-all cursor-pointer rounded  shadow-[0_5px_15px_rgb(0_0_0/8%)] hover:shadow-[0_14px_25px_rgb(0_0_0/16%)]"
          >
            <div className="object-cover h-[50vw]  max-h-[420px] sm:h-[25vw] sm:max-h-[300px]">
              <img src={elem.image} className="object-cover w-full h-full rounded-t" />
            </div>
            <div className="p-[20px] flex-[1_0_44%]">
              <div><time className="text-sm text-gray-400">{elem.date}</time></div>
              <div><h3 className="text-2xl text-gray-900 mt-[5px] mb-[10px]">{elem.title}</h3></div>
              <div><p className="text-gray-600">{elem.description}</p></div>
            </div>
          </article>
        )}
      </div>

      <PartitionRedirectionButton title={"SEE ALL ARTICLES"} />
    </section>
  )
}

const MemoBlog = React.memo(Blog)

const LatestNews = () => {

  return (
    <section className="flex-[1_1_45%]">
      <h2 className="text-center sm:text-start  text-gray-900 text-1.4xl lg:text-3xl2 mb-[20px]">
        Latest News
      </h2>
      <div>
        <ul>
          {[
            {
              date: "June 4, 2018",
              title: "Highlights from WWDC",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare."
            },
            {
              date: "June 4, 2018",
              title: "Apple introduces macOS Mojave",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare."
            },
            {
              date: "May 29, 2018",
              title: "iOS 11.4 brings stereo pairs and multi-room audio with AirPlay 2",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales eget ipsum id aliquam. Nam consectetur interdum nibh eget sodales. Cras volutpat efficitur ornare."
            },
          ].map((elem, index) =>
            <li className="border-b border-[#e5e5e5] last:border-none  mt-[10px]">
              <article className="mb-[10px]">
                <div><time className="text-sm text-gray-400">{elem.date}</time></div>
                <Link href={'#'}><a><h3 className="text-2xl text-gray-900 mt-[5px] mb-[10px]">{elem.title}</h3></a></Link>
                <div><p className="text-gray-600">{elem.description}</p></div>
              </article>
            </li>
          )}
        </ul>
      </div>
      <PartitionRedirectionButton position={"start"} title={"SEE ALL NEWS"} />
    </section>
  )
}

const About = () => {
  return (
    <section className="flex-[1_1_45%] mb-[30px] sm:mr-[30px]">
      <h2 className="text-center sm:text-start  text-gray-900 text-1.4xl lg:text-3xl2 mb-[20px]">
        About
      </h2>
      <div className="text-gray-600">
        <p className="mb-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at neque vulputate, vestibulum magna in, accumsan urna. Nulla feugiat ipsum ex, molestie porttitor nibh faucibus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit lorem ut finibus semper. Donec ac vehicula erat, nec consequat massa.
        </p>
        <p>
          Quisque rhoncus fermentum sapien id congue. Nam at rutrum turpis. Aliquam sagittis imperdiet tortor vel dignissim. Ut ipsum nunc, egestas et odio id, vestibulum posuere orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
      <PartitionRedirectionButton position={"start"} title={"READ MORE"} />
    </section>
  )
}

const SubscribeForUpdates = () => {

  const [focusInput, setFocusInput] = React.useState(false)
  React.useEffect(() => {
    console.log(focusInput)
  }, [focusInput])

  return (
    <sectino>
      <div className="text-center text-[#fff] px-[20px] pt-[20px]">
        <div className="text-1.4xl">Subscribe for updates</div>
        <div className="opacity-70">Be aware of new products and special offers.</div>
      </div>
      <div className="p-[20px]">
        <form className="flex flex-col items-center justify-center sm:flex-row">
          <div className={`border rounded bg-[rgba(255,255,255,.1)] w-full sm:w-[285px] flex items-center border-[#fff] transition-all ${focusInput ? "border-opacity-100" : "border-opacity-20"}`}>
            <EmailIcon className="w-[40px] opacity-40" />
            <input
              onFocus={() => setFocusInput(true)}
              onBlur={() => setFocusInput(false)}
              type="email"
              placeholder="Your email"
              className={` bg-transparent  text-[rgba(255,255,255,.7)] h-[40px] w-full `}
            />
          </div>
          <div className="pt-[15px] sm:pl-[15px]">
            <button className="bg-[#fff] text-gray-600 h-full rounded px-[30px] text-sm min-h-[38px]">
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </sectino>
  )
}



const PartitionRedirectionButton = ({ title, path = "#", position = "center" }) => {
  const positionStyle = {
    "center": "sm:justify-center",
    "start": "sm:justify-start",
    "end": "sm:justify-end"
  }[position]
  return (

    <div className={`flex justify-center mt-[20px] ${positionStyle}`}>
      <Link href={path}>
        <a className="flex items-center text-gray-400 uppercase stroke-gray-400 hover:text-gray-600 hover:stroke-[#666] partition-redirect-btn-hover">
          {title}
          <ArrowIcon className=" max-h-[6px] ml-1" />
        </a>
      </Link>
    </div>
  )
}
