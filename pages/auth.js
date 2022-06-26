import React from "react"
import { useCustomer } from "../contextes/customer-context"
import { useRouter } from 'next/router'
import { PATH_ACCOUNT_PAGE } from "../config/path-config"
import { Base64 } from 'js-base64';

export default function Auth() {

    const [tab, setTab] = React.useState(2)


    return (
        <>
            <main className="bg-[#f8f8f8] custom_100vh" >
                <div className="flex items-center justify-center h-full min-h-[400px]">
                    <section className="h-max drop-shadow-3xl w-[450px] px-4 py-10">
                        <div className="flex text-xl text-gray-900">
                            <button
                                className={`bg-white transition-all  py-4 flex-[1_1_50%] rounded-tl-md  ${tab !== 1 ? "shadow-[inset_0px_0px_13px_rgba(0,0,0,0.2)] text-gray-400" : ""}`}
                                onClick={() => setTab(1)}
                            >Sign up</button>
                            <button
                                className={`bg-white transition-all py-2 flex-[1_1_50%] rounded-tr-md  ${tab !== 2 ? "shadow-[inset_0px_0px_13px_rgba(0,0,0,0.2)] text-gray-400" : ""}`}
                                onClick={() => setTab(2)}
                            >Sign in</button>
                        </div>
                        <div className="p-8 bg-white rounded-b-md">
                            {tab === 1 && <SignUp />}
                            {tab === 2 && <SignIn />}
                        </div>
                    </section>
                </div>
            </main >
        </>
    )
}

const SignIn = () => {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const router = useRouter()
    const { auth, setAuth } = useCustomer()

    const handlerSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        let response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                login: login,
                password: Base64.encode(password),
            })
        });

        let result = await response.json();
        if (result.auth) setAuth(true)
        setLoading(false)
    }

    React.useEffect(() => {
        if (auth) router.push(PATH_ACCOUNT_PAGE)
    }, [auth])

    return (
        <>
            <form className="flex flex-col gap-4 " >
                <div >
                    <label className="text-lg text-gray-900">
                        Email
                        <input
                            className="rounded-md custom-input"
                            autoComplete="email"
                            value={login}
                            onBlur={(e) => {
                                setLogin(e.target.value)
                            }}
                            onChange={(e) => {
                                setLogin(e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label className="text-lg text-gray-900" >
                        Password
                        <input
                            className="rounded-md custom-input"
                            autoComplete="current-password"
                            value={password}

                            type="password"
                            onBlur={(e) => {
                                setPassword(e.target.value)
                            }}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div className="flex justify-end">
                    <button onClick={(e) => e.preventDefault()}>
                        Forgot your password?
                    </button>
                </div>
                <div className="mt-5">
                    <button
                        onClick={handlerSubmit}
                        className=" w-full min-w-[120px] transition-all text-center  bg-[#1e80e9c5] hover:bg-blue-800 py-3 rounded text-white">
                        {!loading ? "Sign In" : "Loading..."}
                    </button>
                </div>
            </form>
        </>
    )
}
const SignUp = () => {

    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    return (
        <>
            <form className="flex flex-col gap-4 " >
                <div >
                    <label className="text-lg text-gray-900">
                        Username
                        <input
                            className="rounded-md custom-input"
                            value={username}
                            autoComplete="username"
                            onBlur={(e) => {
                                setUsername(e.target.value)
                            }}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div >
                    <label className="text-lg text-gray-900">
                        Email
                        <input
                            className="rounded-md custom-input"
                            value={email}
                            onBlur={(e) => {
                                setEmail(e.target.value)
                            }}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label className="text-lg text-gray-900" >
                        Password
                        <input
                            className="rounded-md custom-input"
                            value={password}
                            onBlur={(e) => {
                                setPassword(e.target.value)
                            }}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div className="mt-5">
                    <button
                        onClick={(e) => e.preventDefault()}
                        className=" w-full min-w-[120px] transition-all text-center  bg-[#1e80e9c5] hover:bg-blue-800 py-3 rounded text-white">
                        Sign up
                    </button>
                </div>
            </form>
        </>
    )
}