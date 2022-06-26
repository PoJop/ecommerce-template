import Link from "next/link";
import { Footer } from "../../components/layers/footer";
import { Header } from "../../components/layers/header/header";
import { Main } from "../../components/layers/main";
import { PageTitle } from "../../components/layers/page-title";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import React from "react";

export default function Catalog() {
    const categoryRef = React.useRef(null)
    const arr = [
        {
            category: "Laptops & Tablets", subcategory: ['Laptops', 'Tablets', 'Peripherals', 'Keyboards', 'Accessories']
        },
        {
            category: "Phones & Gadgets", subcategory: ['Smartphones', 'Mobile Phones', 'Smart watches', 'Charging and batteries', 'Accessories']
        },
        {
            category: "TV & Video", subcategory: ['TV', 'Home Cinema', 'Satellite & Cable TV', 'Projectors', 'DVD & Blu - ray', 'Accessories',]
        },
        { category: "Games & Entertainment", subcategory: ['Gaming consoles', 'Games', 'Software', 'Joysticks & gamepads', 'Accessories'] },
        { category: "Photo", subcategory: ['Cameras', 'Lenses', 'Accessories'] },

    ]
    // React.useEffect(() => {
    //     if (categoryRef.current) {

    //         categoryRef.current.querySelectorAll('.category').forEach(element => {
    //             console.log(element)
    //         });
    //         window.addEventListener('scroll', () => {
    //             categoryRef.current.querySelectorAll('.category').forEach(element => {
    //                 console.log(element.scrollHeight  )
    //             });
    //         })
    //     }
    // }, [categoryRef])
    return (
        <>
            <Header />
            <Main>
                <PageTitle title={'Catalog'} breadcrumbs={['Home', 'Catalog']}>
                    <div className="flex justify-center">
                        <strong className="text-sm font-normal text-gray-400">
                            1222 items
                        </strong>
                    </div>
                </PageTitle>

                <section className="flex pb-8 lg:gap-4 ">
                    <div className="hidden lg:block flex-[1_1_25%] sticky top-20 h-max bg-white drop-shadow-3xl rounded-md">
                        <ul className="flex flex-col gap-2 p-4 text-gray-400">
                            {arr.map((e, i) =>
                                <li key={i}> <AnchorLink offset='100' href={`#categoryAnchor${i}`}>{e.category}</AnchorLink></li>
                            )}
                        </ul>
                    </div>
                    <div className="flex-[1_1_75%] h-full  rounded-md">
                        <ul className="flex flex-col gap-5" ref={categoryRef}>
                            {arr.map((e, i) =>
                                <li key={i} id={`categoryAnchor${i}`} className="bg-white rounded-md category drop-shadow-3xl">
                                    <header className="p-4 custom-border" >{e.category}</header>
                                    <div>
                                        <ul className="p-4">
                                            {e.subcategory.map((e, i) =>
                                                <li key={i}>
                                                    <Link href={"/catalog/Laptops-&-Tablets/Laptops"}>
                                                        <a>{e}</a>
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </section>
            </Main>
            <Footer />
        </>
    )
}