import React from "react";
import { useRouter } from 'next/router'
import { SidebarPagesNav } from "../../templates/sidebar-pages-nav";
import { PATH_ABOUT_PAGE, PATH_BLOG_PAGE, PATH_CONTACTS_PAGE, PATH_DELIVERY_PAGE, PATH_FAQ_PAGE, PATH_NEWS_PAGE } from "../../../config/path-config";

export const RightSideber = () => {
    const [currentPath, setCurrentPath] = React.useState()

    const router = useRouter()

    React.useEffect(() => {
        let route = router.asPath
        setCurrentPath(route)
    }, [router])

    return (
        <>
            <div>
                <SidebarPagesNav
                    currentPath={currentPath}
                    type = 'path'
                    list={[
                        { title: "About", path: PATH_ABOUT_PAGE },
                        { title: "Contacts", path: PATH_CONTACTS_PAGE},
                        { title: "Blog", path: PATH_BLOG_PAGE },
                        { title: "News", path: PATH_NEWS_PAGE },
                        { title: "FAG", path: PATH_FAQ_PAGE },
                        { title: "Delivery", path: PATH_DELIVERY_PAGE},
                    ]}
                />
            </div>
        </>
    )
}