import React from 'react'
import { useRouter } from 'next/router'
import { PATH_HOME_PAGE } from '../config/path-config';
import { getLocalStorage, setLocalStorage } from '../utils/utils';

const CustomerContext = React.createContext();

export const useCustomer = () => {
    return React.useContext(CustomerContext);
}

export const CustomerProvider = ({ children }) => {

    const [auth, setAuth] = React.useState(false)
    const route = useRouter()

    const [favorites, setFavorites] = React.useState([])

    const logOut = () => {
        setAuth(false)
        route.push(PATH_HOME_PAGE)
    }
    // React.useEffect(() => {
    //     const a = getLocalStorage('auth')
    //     if (!a) {
    //         setLocalStorage('auth', auth)
    //     } else {
    //         setLocalStorage('auth', auth)
    //     }
    // }, [])
    return (
        <CustomerContext.Provider
            value={{
                auth,
                setAuth,
                logOut
            }}
        >
            {children}
        </CustomerContext.Provider>
    );
};
export default CustomerContext;
