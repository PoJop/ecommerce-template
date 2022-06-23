import React from "react";
import { Breadcrumbs } from "../templates/breadcrumbs";
import Skeleton from '@mui/material/Skeleton';


export const PageTitle = ({ children, title = '' }) => {

    const [lastBreadcrumb, setLastBreadcrumb] = React.useState(null)

    return (
        <>
            <div className="py-4 mb-6">
                <Breadcrumbs getLastBreadcrumb={setLastBreadcrumb} />
                <div>
                    <h1 className="flex justify-center text-2xl font-normal text-center text-gray-900 lg:text-4xl ">

                        {!lastBreadcrumb ? <Skeleton variant="text" animation="wave" width="120px" /> : <>
                            {title.length > 0 ? title : lastBreadcrumb.breadcrumb}
                            {/*
                             If the title parameter was not passed to props,
                             its value is taken from the remaining breadcrumbs element
                            */}
                        </>}

                    </h1>
                </div>
                {children}
            </div>
        </>
    )
}