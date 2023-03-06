import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from './__LoginApi';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate() ;

    const handleLogin = async (event) => {
        event.preventDefault();

        try{
            await axios.post('/login',{email, password});
            setEmail("")
            setPassword("")
            navigate("/")

        }catch(e){
            console.log('ne erreur');
        }
        
    }
    return (
        <section className='py-10 mx-8 text-center'>
            <div className=" mx-auto px-4 max-w-2xl py-10 sm:py-6 border-2 mt-10">
                <h2 className="text-2xl text-orange-600 font-semibold md:text-3xl">Login</h2>
                <p className="mx-auto mt-3 max-w-xl text-[#ACB6AE]">Connect to your account</p>
                <div className="mt-6 grid grid-cols-1 gap-4">
                    <form onSubmit={handleLogin} className='rounded-md w-full border-2 text-left'>
                        <div className="my-4 mx-2"> 
                            <label htmlFor="" className="text-orange-600 font-bold">User</label> 
                            <input type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email" 
                                    placeholder='Login or email'
                                    id="" 
                                    className='rounded-md border w-full p-2 placeholder-[#ACB6BE] focus-visible:shadow-none'
                            />
                            <div className="flex">
                                <span className="text-red-400 text-sm ">Error</span>
                            </div>
                        </div>
                        <div className="my-4 mx-2">
                            <label htmlFor="" className="text-orange-600 font-bold">Password</label> 
                            <input type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                     name="Password" 
                                     placeholder='Password'
                                     id="" 
                                     className='rounded-md border w-full p-2 placeholder-[#ACB6BE]'
                            />
                            <div v-if="authStore.errors.password" className="flex">
                                <span className="text-red-400 text-sm ">Error</span>
                            </div>
                        </div>
                        <div className="text-orange-600 mx-2">
                            <input type="submit" 
                                    value="Connecter" 
                                    className='my-2 text-center border-2 border-orange-600 rounded-md  hover:bg-orange-600 hover:text-black hover:font-bold cursor-pointer px-6 py-2'
                            />
                        </div>

                    </form>
                    <Link to='' className='mb-2 text-left inline-block text-base text-[#adadad] hover:text-primary hover:underline'>
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Login;
