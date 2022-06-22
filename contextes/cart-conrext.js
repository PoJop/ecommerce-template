import React from 'react'

const CartContext = React.createContext();

export const useCart = () => {
    return React.useContext(CartContext);
}

export const CartProvider = ({ children }) => {

    const [predview, setPredview] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([
        {
            id: 1,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 100
        },
        {
            id: 2,
            Label: 'Laptop',
            title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            image: {
                url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
            },
            price: 100
        },
    ])

    return (
        <CartContext.Provider
            value={{
                predview,
                setPredview,
                cartItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
export default CartContext;
