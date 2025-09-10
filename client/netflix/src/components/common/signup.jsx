import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

export default function SignUp() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [show,setShow] = useState(false);
    
    const handleClick = () =>{
        setShow(!show)
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8060/api/${role}/register`, 
            {
                name,
                role,
                email,
                pass: password
            });
            console.log(response.data);
            localStorage.setItem(response.data.message)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col place-items-center">
            <div className="bg-black w-[47%] flex flex-col items-center justify-center rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="flex flex-col w-full items-center justify-center">
                    <h1 className="font-bold text-4xl text-white">Register</h1>
                    <input type="text" name="name" className="bg-gray-800 text-lg w-[75%] text-white p-4 rounded-lg mt-10" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" name="role" className="bg-gray-800 text-lg w-[75%] text-white p-4  rounded-lg mt-10" placeholder="Role" value={role} onChange={(e)=>setRole(e.target.value)}/>
                    <input type="email" name="email" className="bg-gray-800 text-lg w-[75%] text-white p-4 rounded-lg mt-10" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <div className="relative flex w-[75%]">
                        <input type={show ? "text":"password"} name="password" className="bg-gray-800 text-lg w-full text-white p-4  rounded-lg mt-10" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <p onClick={handleClick} className="text-white text-xl absolute top-15 right-5 cursor-pointer">{show ? <IoEyeOutline />:<IoEyeOffOutline />}</p>
                    </div>
                    <div className="flex flex-row items-center justify-center w-[100%] p-10">
                        <button className="bg-red-600 cursor-pointer text-white text-xl font-semibold px-5 py-3 rounded-lg" type="submit">Create Account</button>
                    </div>
                </form>
                    <div>
                        <p className="text-white">Already have an Account? 
                            <span>
                                <button className="text-red-500 hover:underline cursor-pointer" onClick={()=> navigate('/')}>Sign In</button>
                            </span>
                        </p>
                    </div>
            </div>
        </div>
    )
}