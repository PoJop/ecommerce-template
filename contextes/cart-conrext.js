import React from 'react'

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
    creation_date: getDate(),
    first_addition: null,
    last_addition: null,
    last_interaction: null,
}

export const CartProvider = ({ children }) => {

    const [predview, setPredview] = React.useState(false)
    const [cartItems, setCartItems] = React.useState()

    const getStoreCart = () => {
        if (typeof window === 'object')
            return JSON.parse(window.localStorage.getItem("cart"))
    }

    const setStoreCart = (e) => {
        if (typeof window === 'object') {
            window.localStorage.setItem("cart", JSON.stringify(e))
            setCartItems(e.cart_items)
        }
    }
    const createCart = (e) => setStoreCart(e)

    React.useEffect(() => { if (!getStoreCart()) createCart(cart) }, [])
    React.useEffect(() => { 
        let cart = getStoreCart()
        if (cart) setCartItems(cart.cart_items)
     }, [])

    const addItem = (date) => {
        let storeCart = getStoreCart()
        try {
            storeCart.cart_items.push(
                {
                    id: storeCart.cart_items.length + 1,
                    product_id: date.id,
                    date_added: getDate(),
                    Label: date.Label,
                    title: date.title,
                    quantity: date.quantity,
                    image: {
                        url: date.image.url
                    },
                    price: date.price,
                }
            )
            setStoreCart(storeCart)
        } catch (error) {
            console.error(error)
        }
    }
    const deleteItem = () => { }
    const updateItem = () => { }


    return (
        <CartContext.Provider
            value={{
                predview,
                setPredview,
                cartItems,
                addItem
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
export default CartContext;
