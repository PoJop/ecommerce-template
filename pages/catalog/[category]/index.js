import React from "react";
import { useRouter } from "next/router";


export default function Category() {

    const router = useRouter()

    const { category, subcategory } = router.query

    React.useEffect(() => {
        if(!subcategory) router.push('/catalog')
    }, [category, subcategory])

    return (
        <>
        </>
    )
}
