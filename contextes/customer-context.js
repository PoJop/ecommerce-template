import React from 'react'

const CustomerContext = React.createContext();

export const useCustomer = () => {
    return React.useContext(CustomerContext);
}

export const CustomerProvider = ({ children }) => {

    const [auth, setAuth] = React.useState(true)


    return (
        <CustomerContext.Provider
            value={{
                auth,
                setAuth
            }}
        >
            {children}
        </CustomerContext.Provider>
    );
};
export default CustomerContext;
