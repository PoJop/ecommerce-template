import React from "react";
import Link from 'next/link'
export const SidebarPagesNav = ({ type = 'bookmark', mainPath, currentPath, list = [] }) => {

    return (
        <>
            <div>
                {type === 'bookmark' && list.map((e, i) =>
                    <SidebarPagesNavBtn
                        key={i}
                        type="bookmark"
                        mainPath={mainPath}
                        title={e.title}
                        currentPath={currentPath}
                        bookmark={e.bookmark}
                        elem={e.elem}
                    />
                )}
                {type === 'path' && list.map((e, i) =>
                    <SidebarPagesNavBtn
                        type="path"
                        key={i}
                        title={e.title}
                        currentPath={currentPath}
                        path={e.path}
                        elem={e.elem}
                    />
                )}
            </div>
        </>
    )
}
const SidebarPagesNavBtn = ({ type, title, bookmark, elem, path, currentPath, mainPath = '' }) => {

    const [link, setLink] = React.useState(null)
    const [currentlink, setCurrentLink] = React.useState(null)

    React.useEffect(() => {
        if (type === 'bookmark') {
            setLink(mainPath + bookmark)
            setCurrentLink(bookmark)
        }
        if (type === 'path') {
            setLink(path)
            setCurrentLink(path)
        }
    }, [bookmark, path])

    return (
        <>
            {link && <Link Link href={link} >
                <a
                    className={`block py-2 px-4 transition-all text-sm lg:text-[16px] w-full text-left ${currentPath === currentlink ? "shadow-[inset_2px_0_0_#1e87f0] text-gray-900 font-bold" : " text-gray-400  hover:shadow-[inset_2px_0_0_#1e87f0] hover:text-gray-600"}`}
                >
                    {title}
                    {elem}
                </a>
            </Link >
            }
        </>
    )
}
