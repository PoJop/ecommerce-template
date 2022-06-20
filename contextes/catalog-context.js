import React from 'react'

const CatalogContext = React.createContext();

export const useCatalog = () => {
    return React.useContext(CatalogContext);
}

export const CatalogProvider = ({ children }) => {

    const [productDisplayFormat, setProductDisplayFormat] = React.useState("grid")

    return (
        <CatalogContext.Provider
            value={{
                productDisplayFormat,
                setProductDisplayFormat
            }}
        >
            {children}
        </CatalogContext.Provider>
    );
};
export default CatalogContext;
