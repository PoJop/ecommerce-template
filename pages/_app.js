import '../styles/globals.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from '../contextes/cart-conrext';

function MyApp({ Component, pageProps }) {


  return (
    <>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}

export default MyApp
