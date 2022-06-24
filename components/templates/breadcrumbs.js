import Link from "next/link";
import React from "react";
import Skeleton from '@mui/material/Skeleton';
import { useRouter } from "next/router";

export const Breadcrumbs = ({ getLastBreadcrumb, changelastBreadcrumb }) => {

    const [loading, setLoading] = React.useState(true)
    const [breadcrumbs, setBreadcrumbs] = React.useState(null)
    const router = useRouter()

    React.useEffect(() => {
        if (!router.asPath.includes('[') && !breadcrumbs) {
            const indexs = []
            const bc = []
            const rout = "/home" + router.asPath

            for (let i = 0; i < rout.length; i++) {
                // Index selection cycle for the "/" symbol in the url string
                if (rout[i] === '/') indexs.push(i)
            }

            for (let i = 0; i < indexs.length; i++) {
                let path = rout.substring(indexs[0], indexs[i + 1]).replace('/home', '')
                let breadcrumb = rout.substring(indexs[i] + 1, indexs[i + 1]).replace(/[-().^+?#]/g, ' ')

                bc.push({
                    id: `breadcrumbsId_${i}`,
                    index: i,
                    path: path.length <= 0 ? '/' : path,
                    // Remove all "-" characters, and capitalize the first letter of each word
                    breadcrumb: breadcrumb.split(/\s+/).filter(Boolean).map(word =>  word[0].toUpperCase() + word.substring(1)).join(' '),
                })
            }
            if (changelastBreadcrumb) {
                let change = bc[bc.length - 1]
                delete bc[bc.length - 1]
                change = {
                    ...change,
                    breadcrumb: changelastBreadcrumb?.breadcrumb.replace(/-/g, ' ')
                        .split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '),
                }
                bc.push(change)
            }
            setBreadcrumbs(bc.filter(Boolean))
        }

    }, [router])

    React.useEffect(() => {
        if (breadcrumbs) getLastBreadcrumb(breadcrumbs[breadcrumbs.length - 1])
    }, [breadcrumbs])

    React.useEffect(() => {
        setTimeout(() => { setLoading(false) }, 2000)
    }, [])
    return (
        <>
            <div>
                <ul className="flex-wrap justify-center hidden gap-4 sm:flex breadcrumbs">
                    {!breadcrumbs ? <Skeleton variant="text" animation="wave" width="40%" /> :
                        <>
                            {breadcrumbs && breadcrumbs.map((e, i) =>
                                <li
                                    className={`flex gap-4 text-sm ${breadcrumbs.length === i + 1 ? "text-gray-600" : "text-gray-400"}`}
                                    key={i}
                                >
                                    <Link href={e.path}>
                                        <a>{e.breadcrumb}</a>
                                    </Link>
                                </li>
                            )}
                        </>
                    }
                </ul>
                <div className="flex justify-center sm:hidden">
                    {breadcrumbs &&
                        <>
                            <Link href={breadcrumbs[breadcrumbs.length - 2]?.path}>
                                <a className="flex items-center gap-4 text-sm text-gray-400">
                                    <svg className="w-[20px]" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M10.25 6.75L4.75 12l5.5 5.25M19.25 12H5"
                                        ></path>
                                    </svg>
                                    {breadcrumbs[breadcrumbs.length - 2]?.breadcrumb}
                                </a>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </>
    )
}