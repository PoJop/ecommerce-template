import Link from "next/link";
import { Footer } from "../components/layers/footer/footer";
import Header from "../components/layers/header/header";
import { Main } from "../components/layers/main";

import { BoxWithRightNavSidebar } from "../components/wrappers/box-with-right-nav-sidebar";
import { Container } from "../components/wrappers/container";


export default function News() {
    return (
        <>
            <Header />
            <Main pageTitle={true}>
                <Container>
                    <BoxWithRightNavSidebar>
                        <ul className="p-[20px]">
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
                                <li key={index} className="border-b border-[#e5e5e5] last:border-none  mt-[10px] first:mt-0">
                                    <article className="mb-[10px]">
                                        <div><time className="text-sm text-gray-400">{elem.date}</time></div>
                                        <Link href={'#'}><a><h3 className="text-2xl text-gray-900 mt-[5px] mb-[10px] hover:text-[#1e87f0]">{elem.title}</h3></a></Link>
                                        <div><p className="text-gray-600">{elem.description}</p></div>
                                    </article>
                                </li>
                            )}
                        </ul>
                    </BoxWithRightNavSidebar>
                </Container>
            </Main >
            <Footer />
        </>
    )
}
