import React from "react";
import { EmailIcon, FacebookIcon, GeolocationIcon, InstagramIcon, PhoneIcon, TwitterIcon, WatchIcon, YoutubeIcon } from "../../asset/icon";
import { Logo } from "../../asset/logo";
import Link from "next/link";
import { Container } from "./header/header";


export const Footer = () => {

    return (
        <>
            <footer className="px-4 py-10 sm:px-7 lg:px-9 bg-gray-950 ">
                <Container>
                    <div className="flex flex-col gap-10 lg:flex-row">
                        <div className="flex-[1_1_25%] flex flex-col gap-4">
                            <div><Logo color="#fff" /></div>
                            <div>
                                <p className="text-sm text-white opacity-70">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eros. Nulla quis ante sed tortor efficitur facilisis.
                                </p>
                            </div>
                            <div>
                                <ul className="flex gap-3">
                                    {[
                                        { elem: <FacebookIcon />, path: '#' },
                                        { elem: <TwitterIcon />, path: '#' },
                                        { elem: <YoutubeIcon />, path: '#' },
                                        { elem: <InstagramIcon />, path: '#' },
                                    ].map((e, i) =>
                                        <li key={i}>
                                            <a href={e.path}
                                                className="text-sm opacity-50 hover:opacity-70"
                                            >
                                                {e.elem}
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-[1_1_25%] ">
                            <nav className="flex-[1_1_50%]">
                                <ul className="flex flex-col gap-2">
                                    {[
                                        { title: 'Catalog', path: '#' },
                                        { title: 'Brands', path: '#' },
                                        { title: 'Delivery', path: '#' },
                                        { title: 'FAQ', path: '#' },
                                        { title: 'Payment', path: '#' },
                                    ].map((e, i) =>
                                        <li key={i}>
                                            <Link href={e.path}>
                                                <a
                                                    className="text-sm text-white opacity-50 hover:opacity-70"
                                                >{e.title}</a>
                                            </Link>
                                        </li>
                                    )}
                                </ul>

                            </nav>
                            <nav className="flex-[1_1_50%]">
                                <ul className="flex flex-col gap-2">
                                    {[
                                        { title: 'About', path: '#' },
                                        { title: 'Contacts', path: '#' },
                                        { title: 'Blog', path: '#' },
                                        { title: 'News', path: '#' },
                                    ].map((e, i) =>
                                        <li key={i}>
                                            <Link href={e.path}>
                                                <a
                                                    className="text-sm text-white opacity-50 hover:opacity-70"
                                                >{e.title}</a>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </nav>
                        </div>
                        <div className="flex-[1_1_25%]">
                            <address>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <a
                                            className="flex gap-2 text-sm text-white underline opacity-50 underline-offset-4 decoration-dotted hover:opacity-70"
                                            href={`tel:${'88007999999'}`}>
                                            <PhoneIcon /><span className="oblique">8 800 799 99 99</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="flex gap-2 text-sm text-white underline opacity-50 underline-offset-4 decoration-dotted hover:opacity-70"
                                            href={`#`}>
                                            <EmailIcon /><span>example@example.com</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div
                                            className="flex gap-2 text-sm text-white opacity-50"
                                        >
                                            <GeolocationIcon /><span>St. Petersburg, Nevsky Prospect 28</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            className="flex gap-2 text-sm text-white opacity-50"
                                        >
                                            <WatchIcon /><span>Daily 10:00–22:00</span>
                                        </div>
                                    </li>
                                </ul>
                            </address>
                        </div>
                        <div className="flex-[1_1_25%]">
                            <form>
                                <label>
                                    <div className="mb-2 text-sm text-white opacity-50">Subscribe for updates</div>
                                    <div className="flex items-center bg-[#393939] rounded-md border border-dull-gray">
                                        <input
                                            placeholder="Your email"
                                            className="w-full h-full p-3 text-sm bg-transparent focus:outline-none bg-clip-padding "
                                        />
                                        <button
                                            className="h-full px-4 opacity-50"
                                        >
                                            <EmailIcon />
                                        </button>
                                    </div>
                                </label>
                            </form>
                            <div className="mt-[20px] text-white opacity-50 text-sm">
                                Shopping Categories icons by Jaro Sigrist from Noun Project
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}