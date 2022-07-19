import React from "react";

// asset
import { EmailIcon, GeolocationIcon, PhoneIcon, WatchIcon } from "../../../../asset/icon";


export const Contacts = () => {

    return (
        <>
            <div className="flex-[1_1_25%]">
                <address>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a
                                className="flex gap-2 text-sm text-white underline opacity-50 underline-offset-4 decoration-dotted hover:opacity-70"
                                href={`tel:${'88007999999'}`}>
                                <PhoneIcon /><span className="oblique">8 800 799 99 99</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex gap-2 text-sm text-white underline opacity-50 underline-offset-4 decoration-dotted hover:opacity-70"
                                href={`#`}>
                                <EmailIcon/><span>example@example.com</span>
                            </a>
                        </li>
                        <li>
                            <div
                                className="flex gap-2 text-sm text-white opacity-50"
                            >
                                <GeolocationIcon /><span>St. Petersburg, Nevsky Prospect 28</span>
                            </div>
                        </li>
                        <li>
                            <div
                                className="flex gap-2 text-sm text-white opacity-50"
                            >
                                <WatchIcon /><span>Daily 10:00–22:00</span>
                            </div>
                        </li>
                    </ul>
                </address>
            </div>
        </>
    )
}