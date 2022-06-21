import React from 'react'

const CartContext = React.createContext();

export const useCart = () => {
    return React.useContext(CartContext);
}

export const CartProvider = ({ children }) => {

    const [predview, setPredview] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])

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
