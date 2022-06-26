import React from "react";
import { Footer } from "../../components/layers/footer";
import { Header } from "../../components/layers/header/header";
import { Main } from "../../components/layers/main";
import { useCustomer } from "../../contextes/customer-context";
import { useRouter } from 'next/router'
import { PATH_AUTH_PAGE } from "../../config/path-config";



export default function Account() {

    const {auth} = useCustomer()

    const router = useRouter()
    React.useEffect(() => {
        if(!auth)router.push(PATH_AUTH_PAGE)
    }, [auth])
    return (
        <>
            <Header />
            <Main >
                <div className="h-[100vh]">
                    account
                </div>
            </Main >
            <Footer />
        </>
    )
}
