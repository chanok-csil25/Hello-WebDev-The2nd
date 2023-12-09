import React from "react";
import { Link } from "react-router-dom";


function Login() {
    return (
    <>
    <div className="flex justify-center items-center h-screen w-screen bg-sky absolute mt-5 z-50">
        <div className=" w-[400px] border-4 border-white  rounded-2xl py-9 px-12">
            <h1 className="text-2xl font-itim">I already have an account</h1>
        
            <div className="mt-3">
                <label htmlFor="username"className="block text-base mb-2 text-xl py-2 font-itim">Username<span className=" text-red ">*</span></label>
                <input type="text"id="username"className="rounded-[20px] w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-sky-800 border-solid border-2 font-itim"/>
            </div>
            <div className="mt-3">
                <label htmlFor="password"className="block text-base mb-2 text-xl py-2 font-itim">Password<span className=" text-red">*</span></label>
                <input type="password"id="password"className="rounded-[20px] w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-sky-800 border-solid border-2 font-itim"/>
            </div>
             <div className="mt-3 mb-8">
                <button type="submit"className=" mt-5 rounded-[20px] bg-black text-white py-1 w-full rounded-[20px] text-sm font-itim hover:bg-white hover:text-black hover:border-2 hover:border-black">Sign in</button>
             </div>
             <h1 className="text-2xl font-itim">I don't have an account</h1>
             <p className=" py-2 font-itim">Enjoy added benefits and a richer experience 
                by creating a personal account</p>
            <div className="mt-1">
                <button type="submit"className=' mt-5 rounded-[20px] bg-black text-white py-1 w-full rounded-[20px] text-sm font-itim hover:bg-white hover:text-black hover:border-2 hover:border-black '>Create my account</button>
             </div>   
        </div>
    </div>
    </>
    )
}

export default Login