/*
author: tiasha
*/
import { useState, useEffect } from "react";
import loginPageBg from "../assets/images/loginPageBackground.jpg"
import loginPage from "../assets/images/loginPage2.jpg"
import { KeyIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";



function Login(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validEmail = "test@gmail.com";
    const validPassword = "123";

    function handleLogin() {
        if (email === validEmail && password === validPassword) {
            props.onLogin(email);
        } else {
            alert("Invalid username or password!");
        }
    }

    return(
        <>
            <div style={{ backgroundImage: `url(${loginPageBg})` }} className="h-screen bg-cover bg-center flex justify-center items-center">
                {/*Outer container*/}
                <div className="bg-white shadow-lg flex w-2/4">
                    <div className="flex flex-row">
                        {/*Left container*/}
                        <div className="p-10 w-1/2 space-y-4">
                            <h2 className="text-3xl font-semibold text-gray-700">Login</h2>
                            {/*Login form*/}
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="flex flex-row items-end space-x-2">
                                    <EnvelopeIcon className="h-6 w-6 text-gray-500" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="mt-4 border-b-2 border-gray-400 font-semibold text-base placeholder-gray-300"
                                        required
                                    />
                                </div>
                                <div className="flex flex-row items-end space-x-2">
                                    <KeyIcon className="h-6 w-6 text-gray-500" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="mt-4 border-b-2 border-gray-400 font-semibold text-base placeholder-gray-300" 
                                        required
                                    />
                                </div>
                                <p className="text-gray-600">Forget Password?</p>
                                <div className="flex flex-col items-center space-y-3">
                                    <button type="submit" className="w-28 bg-green-500 text-white py-2 px-3 text-sm rounded hover:bg-green-600"> Login </button>
                                    <p className="text-gray-600">For New Addmission Click Here</p> 
                                </div>
                            </form>
                        </div>
                        {/*Right container*/}
                        <div className="w-1/2">
                            <img src={loginPage} alt="Login" className="w-full h-full object-cover rounded-r-lg" />
                        </div>    
                    </div>
                </div>
            </div>
        </>
    );

      
};



export default Login;

