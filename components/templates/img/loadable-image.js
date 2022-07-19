import React from "react"

// custom hooks
import useOnScreen from "../../../hooks/useOnScreen"


export const LoadableImage = (props) => {
    const { src, alt = '', onLoad = () => { }, className, className2 } = props
    const [isLoaded, setIsLoaded] = React.useState(false)
    const imageRef = React.useRef(null)
    const containerRef = React.useRef(null)
    const isVisible = useOnScreen(containerRef);

    React.useEffect(() => {
        console.log(isVisible)
        if (!isVisible ) return //|| isLoaded

        if (imageRef.current) {
            imageRef.current.onload = () => {
                console.log("img onload")
                setIsLoaded(true)
                onLoad()
            }
        }

    }, [isVisible, onLoad, isLoaded, imageRef])

    return (
        <div ref={containerRef} className={`${className} container ${isLoaded ? "" : "containerLoaded"}`}>
            {( isVisible || isLoaded) && (<img ref={imageRef} className={`${className2} `}

                src={src} alt={alt} />)}
        </div>
    )
}
