import React from "react";
import Link from "next/link";

// asset
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../../../../asset/icon";
import { Logo } from "../../../../asset/logo";

// path
import { PATH_HOME_PAGE } from "../../../../config/path-config";


export const Information = () => {

    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris eros. Nulla quis ante sed tortor efficitur facilisis."

    return (
        <div className="flex-[1_1_25%] flex flex-col gap-4">
            <div>
                <Link href={PATH_HOME_PAGE}>
                    <a><Logo color="#fff" /></a>
                </Link>
            </div>
            <div>
                <p className="text-sm text-white opacity-70">
                    {description}
                </p>
            </div>
            <div>
                <ul className="flex gap-3">
                    {[
                        { elem: <FacebookIcon />, path: '#' },
                        { elem: <TwitterIcon />, path: '#' },
                        { elem: <YoutubeIcon />, path: '#' },
                        { elem: <InstagramIcon />, path: '#' },
                    ].map((e, i) =>
                        <li key={i}>
                            <a href={e.path}
                                className="text-sm opacity-50 hover:opacity-70"
                            >
                                {e.elem}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}