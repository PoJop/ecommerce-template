import React from "react";


export const Section = ({ className, children }) => {

    return (
        <>
            <section className={`${className}`}>
                {children}
            </section>
        </>
    )
}