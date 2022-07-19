import React from "react";
import { Benefits } from "../templates/benefits.js";
import { PageTitle } from "../templates/page-title"


export const Main = ({ children, benefits = false, padding = "default", pageTitle = false, pageTitleProps }) => {

    const [headerHeight, setHeaderHeight] = React.useState()

    React.useEffect(() => {
        setHeaderHeight(`${document.querySelector('header').clientHeight}px`)
        window.addEventListener('resize', () => {
            setHeaderHeight(`${document.querySelector('header').clientHeight}px`)
        })
    }, [])

    const paddingValues = {
        "default": { paddingTop: headerHeight },
        "none": { padding: "auto" },
    }[padding]

    let paddingStyles = paddingValues ? paddingValues : { padding: padding }

    return (
        <main className=" w-full bg-[#f8f8f8]">
            <div className="w-full min-custom_100vh ">
                <div style={paddingStyles}>
                    {headerHeight &&
                        <>
                            {pageTitle && <PageTitle {...pageTitleProps} />}
                            {children}
                        </>
                    }
                </div>
            </div>
            {benefits && <Benefits />}
        </main>
    )
}
