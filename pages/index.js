import React from "react";
import Head from 'next/head'

import { Container } from "../components/wrappers/container";
import { Footer } from "../components/layers/footer/footer";
import { Header } from "../components/layers/header/header";
import { Main } from "../components/layers/main";
import { SliderWelcome } from "../components/templates/slider-welcome";


export default function Home() {


  return (
    <>
        <Head>
          <title>Home</title>
        </Head>
        <Header />
        <Main>

          <Container padding={"none"} width={"none"}>
            <SliderWelcome />
          </Container>

        </Main >
        <Footer />
    </>
  )
}
