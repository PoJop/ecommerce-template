import React from "react";

export const Container = ({ padding = "default", width = "default", className, children }) => {

    const paddingValues = {
        "default": "px-0 sm:px-7 lg:px-9",
        "none": "px-0 py-0",
    }[padding]

    let paddingStyles = paddingValues ? paddingValues : padding

    const widthValues = {
        "default": "m-auto max-w-[1200px] lg:max-w-[1256px]",
        "none": "w-auto",
    }[width]

    let widthStyles = widthValues ? widthValues : width


    return (
        <div className={`${paddingStyles} ${widthStyles} ${className}`}>
            {children}
        </div>
    )
}