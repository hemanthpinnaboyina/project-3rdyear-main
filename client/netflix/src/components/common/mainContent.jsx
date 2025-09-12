import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function setCookie(name,value,days){
  const expire = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expire}; path=/`;
}


export default function MainContent() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [role,setRole]=useState('')
    const [message,setMessage]= useState(null);

    const navigate = useNavigate();

    const [show,setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8060/api/${role}/login`,
                {
                    email,
                    pass:password
                },
            )
            console.log(response.data.token);
            if( response.data.token){
                setCookie("token",response.data.token,1);
                localStorage.setItem("token",response.data.token);
                navigate(`/${role}dash`);
            }
        } catch (error) {
            console.log(error);
            alert("invalid crenditals")
        }
    }
    return (
        <div className="min-h-screenflex flex-col place-items-center">
            <div className="bg-black w-[50%] flex flex-col items-center justify-center rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="flex flex-col w-full items-center justify-center">
                    <h1 className="font-bold text-4xl text-white">Sign In</h1>
                    <input type="email" name="email" className="bg-gray-800 text-lg w-[60%] text-white p-4 rounded-lg mt-10" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <div className="relative flex w-[60%]">
                        <input type={show ? "text":"password"} name="password" className="bg-gray-800 text-lg w-full text-white p-4  rounded-lg mt-10" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <p onClick={handleClick} className="text-white text-xl absolute top-15 right-5 cursor-pointer">{show ? <IoEyeOutline />:<IoEyeOffOutline />}</p>
                    </div>
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