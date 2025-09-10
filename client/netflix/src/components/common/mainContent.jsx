import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function MainContent() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [role,setRole]=useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8060/api/${role}/login`,
                {
                    email:email,
                    pass:password,
                    role:role
                }
            )
            alert("Login Successful")
            console.log(response.data.token);
            localStorage.setItem("token",response.data.token)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="min-h-screen flex flex-col place-items-center">
            <div className="bg-black w-[50%] flex flex-col items-center justify-center rounded-2xl p-5">
                <form onSubmit={handleSubmit} className="flex flex-col w-full items-center justify-center">
                    <h1 className="font-bold text-4xl text-white">Sign In</h1>
                    <input type="email" name="email" className="bg-gray-800 text-lg w-[60%] text-white p-4 rounded-lg mt-10" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" name="password" className="bg-gray-800 text-lg w-[60%] text-white p-4  rounded-lg mt-10" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="text" name="role" className="bg-gray-800 text-lg w-[60%] text-white p-4  rounded-lg mt-10" placeholder="Role" value={role} onChange={(e)=>setRole(e.target.value)}/>
                    <div className="flex flex-row items-center justify-center w-[100%] p-10">
                        <button className="bg-red-600 cursor-pointer text-white text-xl font-semibold px-5 py-3 rounded-lg" type="submit">Login</button>
                    </div>
                </form>
                <div>
                    <p className="text-white">New to Netflix? 
                        <span>
                            <button className="text-red-500 hover:underline cursor-pointer" onClick={()=> navigate('/signup')}>Sign up</button>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}