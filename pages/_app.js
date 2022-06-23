import '../styles/globals.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from '../contextes/cart-conrext';
import Head from 'next/head';
import { CatalogProvider } from '../contextes/catalog-context';

function MyApp({ Component, pageProps }) {
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
