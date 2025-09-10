import { useState } from "react";
import axios from "axios"
import Header from "./header";

export default function MainContent() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [role,setRole]=useState('')

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
        <div className="min-h-screen bg-[url(https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg)]">
            <Header />
            <div>
                <form onSubmit={handleSubmit} className="bg-black flex flex-col text-center w-[50%] h-[100%] m-auto p-10 rounded-lg mt-20">
                    <h1 className="font-bold text-4xl text-white">Sign In</h1>
                    <input type="email" name="email" className="bg-gray-800 w-[75%] text-xl text-white p-4 ml-20 rounded-lg mt-10" placeholder="Email" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                        console.log(e.target.value)}}/>
                    <input type="password" name="password" className="bg-gray-800 w-[75%] text-xl text-white p-4 ml-20 rounded-lg mt-10" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="text" name="role" className="bg-gray-800 w-[75%] text-xl text-white p-4 ml-20 rounded-lg mt-10" placeholder="Role" value={role} onChange={(e)=>setRole(e.target.value)}/>

                    <button className="bg-red-600 text-white text-2xl font-semibold p-2 w-[20%] ml-65 rounded-lg mt-10" type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}