import React, { useState } from "react";

const Login = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("email is:",email)
        console.log("Password is:",password)

        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form 
                onSubmit={(e) =>{
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center'>

                    <input 
                    value={email}
                    onChange={(e) =>{
                        setEmail(e.target.value)
                    }}
                    required
                        className='text-white outline-none bg-transparent border-2 border-emerald-500 py-3 text-xl px-5 rounded-full placeholder:text-grey-400 w-80 ' 
                        type="email" 
                        placeholder="Enter your email"
                    />
                    
                    <input 
                    value={password}
                    onChange={(e) =>{
                        setPassword(e.target.value)
                    }}
                    required
                         className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl px-5 rounded-full mt-5 placeholder:text-grey-400 w-80' 
                        type="password" 
                        placeholder="Enter password"
                    />

                    <button 
                        className='text-white outline-none  border-2-none bg-emerald-600 py-3 text-xl px-5 rounded-full mt-5 placeholder:text-white w-80' 
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
