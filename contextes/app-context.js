import React from 'react'

const AppContext = React.createContext();

export const useApp = () => {
    return React.useContext(AppContext);
}


export const AppProvider = ({ children }) => {

    const [viewport, setViewport] = React.useState({ w: null, h: null })

    React.useEffect(() => {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        let vw = window.innerWidth;
        setViewport({ w: vw, h: vh })
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // We listen to the resize event
        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            let vw = window.innerWidth;
            setViewport({ w: vw, h: vh })
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }, [])

    return (
        <AppContext.Provider
            value={{viewport}}
        >
            {children}
        </AppContext.Provider>
    );
};
export default AppContext;
