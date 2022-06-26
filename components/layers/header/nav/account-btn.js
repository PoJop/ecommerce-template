import React from "react";
import { useCustomer } from "../../../../contextes/customer-context";
import { useRouter } from 'next/router'
import { PATH_AUTH_PAGE } from "../../../../config/path-config";
import { CustomerIcon } from "../../../../asset/icon";

export const AccountBtn = () => {
    const { auth } = useCustomer()
    const router = useRouter()

    const handlerChange = () => {
        if(!auth) router.push(PATH_AUTH_PAGE)
    }

    return (
        <>
            <button
                className="flex flex-col items-center"
                onClick={handlerChange}
            >
                <CustomerIcon color={"#666"} />
            </button>
        </>
    )
}