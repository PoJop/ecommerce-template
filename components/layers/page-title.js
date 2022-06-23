import React from "react";
import { Breadcrumbs } from "../templates/breadcrumbs";
import Skeleton from '@mui/material/Skeleton';

export const PageTitle = ({ children, title, breadcrumbs = [] }) => {
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => { setLoading(false) }, 2000)
    }, [])
    return (
        <>
            <div className="py-4 mb-6">
                <Breadcrumbs breadcrumbs={breadcrumbs} />

                <div>
                    <h1 className="flex justify-center text-2xl font-normal text-center text-gray-900 lg:text-4xl ">

                        {loading ? <Skeleton variant="text" animation="wave" width="120px" /> : <>{ title }</>}
                    </h1>
                </div>

                {children}
            </div>
        </>
    )
}