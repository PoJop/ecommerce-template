import '../styles/globals.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from '../contextes/cart-conrext';
import Head from 'next/head';
import { CatalogProvider } from '../contextes/catalog-context';
import React from 'react';
import { CustomerProvider } from '../contextes/customer-context';
import { AppProvider } from '../contextes/app-context';
import { useStore } from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)


  const [DOMContentLoaded, setDOMContentLoaded] = React.useState(false)

  React.useEffect(() => {
    document.addEventListener("DOMContentLoaded", setDOMContentLoaded(true));
  }, [])
  return (
    <>
      <Provider store={store}>
        <AppProvider>
          <CustomerProvider>
            <CatalogProvider>
              <CartProvider>
                <Head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                </Head>
                {!DOMContentLoaded ?
                  <>Loading...</> :
                  <Component {...pageProps} />
                }
              </CartProvider>
            </CatalogProvider>
          </CustomerProvider>
        </AppProvider>
      </Provider>
    </>
  )
}

export default MyApp
