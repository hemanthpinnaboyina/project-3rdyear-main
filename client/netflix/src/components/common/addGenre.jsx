import { useState } from "react";
import axios from "axios"

export default function AddGenre() {    
    const [name,setName]=useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8060/api/admin/createGenre`, 
            { 
                name
         },
            {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`, // if your backend requires admin token
                    },
            }
        );
            console.log(response.data);
            console.log(response.data.message);
            alert("Genre Added Successfully")
        } catch (error) {
            console.error(error);
            alert("Genre already exists")
        }
    };
    return (
        <div className=" flex flex-col place-items-center">
            <div className="bg-black w-[37%] flex flex-col items-center justify-center rounded-2xl p-8 mt-20">
                <form onSubmit={handleSubmit} className="flex flex-col w-full items-center justify-center">
                    <h1 className="font-bold text-4xl text-white">Add Genre</h1>
                    <input type="text" name="name" className="bg-gray-800 text-lg w-[75%] text-white p-4 rounded-lg mt-10" placeholder="Genre Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <div className="flex flex-row items-center justify-center w-[100%] p-10">
                        <button className="bg-red-600 cursor-pointer text-white text-xl font-semibold px-5 py-3 rounded-lg" type="submit">Create Genre</button>
                    </div>
                </form>
            </div>
        </div>
    )
}