/*
author: tiasha
*/
import { useState } from "react";
import loginPageBg from "../assets/images/loginPageBackground.jpg"
import loginPage from "../assets/images/loginPage2.jpg"
import { KeyIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";


function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const validUser = {
        email: "test@gmail.com",
        password: "123"
    };

    function handleLogin(event) {
        event.preventDefault();
        if (email === validUser.email && password === validUser.password) {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/dashboard");
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
                        <div className="p-10 w-1/2 flex flex-col items-center justify-center space-y-4">
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
                                        className="mt-4 border-b-2 border-gray-300 font-semibold text-base placeholder-gray-300 focus:border-gray-700 focus:outline-none transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div className="relative flex flex-row items-end space-x-2 w-full">
                                    <KeyIcon className="h-6 w-6 text-gray-500" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="mt-4 w-ful border-b-2 border-gray-300 font-semibold text-base placeholder-gray-300 focus:border-gray-700 focus:outline-none transition-all duration-300" 
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute left-48 text-gray-500 hover:text-gray-700"
                                        >
                                        {showPassword ? (
                                            <EyeSlashIcon className="w-6 h-6" />
                                        ) : (
                                            <EyeIcon className="w-6 h-6" />
                                        )}
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center pt-5">
                                <button type="submit" className="w-28 bg-green-500 text-white py-2 px-3 text-sm rounded hover:bg-green-600"> Login </button>
                                    <p className="text-gray-600 pt-5">For New Addmission &nbsp;
                                        <button
                                            className="text-purple-700 underline"
                                            onClick={() => navigate("/admission")}
                                        >
                                            Click Here
                                        </button>
                                    </p>
                                    <p className="flex text-gray-600 pt-3">Forget Password?</p> 
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
            <Footer/>
        </>
    );

      
};



export default Login;

