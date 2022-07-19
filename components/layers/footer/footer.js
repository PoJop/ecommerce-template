import React from "react";

// wrappers
import { Container } from "../../wrappers/container";

// elements
import { Contacts } from "./components/contacts";
import { Information } from "./components/information";
import { Navigation } from "./components/navigation";
import { Subscribe } from "./components/subscribe";


export const Footer = () => {

    return (
        <>
            <footer className="px-4 py-10 sm:px-7 lg:px-9 bg-gray-950 ">
                <Container className="flex flex-col gap-10 lg:flex-row">
                    <Information />
                    <Navigation />
                    <Contacts />
                    <Subscribe />
                </Container>
            </footer>
        </>
    )
}