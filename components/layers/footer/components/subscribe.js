import React from "react";
import { EmailIcon } from "../../../../asset/icon";


export const Subscribe = () => {

    return (
        <>
            <div className="flex-[1_1_25%]">
                <form>
                    <label>
                        <div className="mb-2 text-sm text-white opacity-50">Subscribe for updates</div>
                        <div className="flex items-center bg-[#393939] rounded-md border border-dull-gray">
                            <input
                                placeholder="Your email"
                                className="w-full h-full p-3 text-sm bg-transparent focus:outline-none bg-clip-padding "
                            />
                            <button
                                className="h-full px-4 opacity-50"
                            >
                                <EmailIcon />
                            </button>
                        </div>
                    </label>
                </form>
                <div className="mt-[20px] text-white opacity-50 text-sm">
                    Shopping Categories icons by Jaro Sigrist from Noun Project
                </div>
            </div>
        </>
    )
}