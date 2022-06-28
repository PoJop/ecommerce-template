import React from 'react'
import { cartItemJSON, cartJSON } from '../utils/json-generator';
import { getLocalStorage, setLocalStorage } from '../utils/utils';

const CartContext = React.createContext();

export const useCart = () => {
    return React.useContext(CartContext);
}

const getDate = () => new Date().getTime()
// {
//     id: null,
//     date_added: null,
//     Label: '',
//     title: '',
//     quantity: ,
//     image: {
//         url: ''
//     },
//     price: ,
// }

// {
//     id: ,
//     date_added: ,
//     quantity: ,
// }
// {
//     date:, items: [{
//         id: ,
//         date_added: ,
//         quantity: ,
//     }]
// }
const cart = {
    customer: {
        auth: false,
        customer_id: null,
    },
    cart_items: [],
    cart_history: {
        items: [
        ]
    },
    thrown_basket: {
        show_through: null,
        show: false,
        shows: []
    },
    creation_date: new Date().getTime(),
    first_addition: null,
    last_addition: null,
    last_interaction: null,
}

export const CartProvider = ({ children }) => {

    const [predview, setPredview] = React.useState(false)
    const [cartItems, setCartItems] = React.useState()

    const getStoreCart = () => getLocalStorage("cart")

    const setStoreCart = (data) => {
        setLocalStorage("cart", data)
        setCartItems(data.cart_items)
    }

    const createCart = (e) => setStoreCart(e)

    const deleteStoreCart = () => {
        if (typeof window === 'object') window.localStorage.removeItem("cart")
    }

    React.useEffect(() => {
        let storeCart = getStoreCart()
        if (storeCart) setCartItems(storeCart.cart_items)
        else createCart(cartJSON())
    }, [])

    const addItem = (date) => {
        let storeCart = getStoreCart()
        storeCart.cart_items.push(
            cartItemJSON({
                id: storeCart.cart_items.length + 1,
                route: date.app_product_route,
                product_id: date.id,
                Label: date.Label,
                title: date.title,
                quantity: date.quantity,
                image_url: date.image.url,
                price: date.price
            })
        )
        setStoreCart(storeCart)
    }
    const deleteItem = (product_id) => {
        let storeCart = getStoreCart()
        let deleteItems = storeCart.cart_items.filter(el => el.product_id !== product_id)
        setStoreCart({ ...storeCart, cart_items: deleteItems })
    }

    const updateItem = () => { }
    const changeQuantity = (product_id, quantity) => {
        let storeCart = getStoreCart()
        let changeItem = storeCart.cart_items;
        for (let i = 0; i < changeItem.length; i++) {
            if (changeItem[i].product_id != product_id) continue;

            changeItem[i].quantity = quantity;
        }
        storeCart.cart_items = changeItem
        setStoreCart(storeCart)
    }


    return (
        <CartContext.Provider
            value={{
                predview,
                setPredview,
                cartItems,
                addItem,
                deleteItem,
                changeQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
export default CartContext;
