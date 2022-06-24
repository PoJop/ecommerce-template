import '../styles/globals.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from '../contextes/cart-conrext';
import Head from 'next/head';
import { CatalogProvider } from '../contextes/catalog-context';
import React from 'react';

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, [])
  return (
    <>
      <CatalogProvider>
        <CartProvider>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          </Head>
          <Component {...pageProps} />
        </CartProvider>
      </CatalogProvider>
    </>
  )
}

export default MyApp
