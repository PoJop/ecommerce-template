import React from "react";

export const PictureFormats = ({ image }) => {

    
    const pictureType = React.useMemo(() => determineTypePicture(image), [])

    if (!image) {
        console.error("Error: no image in PictureFormats")
        return
    }


    return (
        <>
            <picture className="w-full h-full">
                {pictureType.map((elem, index) =>
                    <source key={index} srcSet={elem.path} type={`type/${elem.type}`} />
                )}
                <img src={image[image.length - 1]} alt="#" />
            </picture>
        </>
    )
}


const determineTypePicture = (image) => {
    const sourceElrments = []

    for (let index = 0; index < image.length; index++) {
        const img = image[index]
        let imageType,
            element,
            firstTypeIndex,
            lastTypeIndex

        firstTypeIndex = img.lastIndexOf('.') + 1
        lastTypeIndex = img.includes('?') ? img.lastIndexOf('?') : img.length

        imageType = img.substring(firstTypeIndex, lastTypeIndex)

        element = { path: img, type: imageType }
        sourceElrments.push(element)
    }

    return sourceElrments
}