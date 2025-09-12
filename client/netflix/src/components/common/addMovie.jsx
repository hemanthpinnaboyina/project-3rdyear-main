import { useState,useEffect } from "react";
import axios from "axios"

export default function AddMovie() {    
    const [name,setName]=useState("");
    const [desc,setDesc]=useState("")
    const [year,setYear]=useState("")
    const [url,setUrl]=useState("");
    const [rating,setRating]=useState("")
    const [genreId,setGenreId]=useState("")
    const [genres, setGenres] = useState([]);

     useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get("http://localhost:8060/api/user/viewAllGenres", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setGenres(response.data.data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8060/api/admin/addMovie`, 
            { 
                name,
                desc,
                year: parseInt(year, 10),
                url,
                genreId,
                rating: parseFloat(rating)
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        console.log(response.data);
        alert("Movie Added Successfully")
        setName("");
        setDesc("");
        setYear("");
        setUrl("");
        setRating("");
        setGenreId("");
        } catch (error) {
            console.error(error);
            alert("Failed to add movie")
        }
    };
    return (
        <div className=" flex flex-col place-items-center">
            <div className="bg-black w-[37%] flex flex-col items-center justify-center rounded-2xl p-8 mt-20">
                <form onSubmit={handleSubmit} className="flex flex-col w-full items-center justify-center">
                    <h1 className="font-bold text-4xl text-white">Add Movie</h1>
                    <input type="text" name="name" className="bg-gray-800 text-lg w-[75%] text-white p-4 rounded-lg mt-10" placeholder="Movie Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <textarea name="desc" className="bg-gray-800 text-lg w-[75%] text-white p-4 rounded-lg mt-10" placeholder="Movie Description" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                    <input type="number" name="year" className="bg-gray-800 text-lg w-[75%] text-white p-4 rounded-lg mt-10" placeholder="Release Year" value={year} onChange={(e)=>setYear(e.target.value)}/>
                    <input type="url" name="url" className="bg-gray-800 text-lg w-[75%] text-white p-4 rounded-lg mt-10" placeholder="Movie URL" value={url} onChange={(e)=>setUrl(e.target.value)}/>
                    <input type="number" name="rating" step="0.1" min="0" max="10" className="bg-gray-800 text-lg w-[75%] text-white p-4 rounded-lg mt-10" placeholder="Movie Rating" value={rating} onChange={(e)=>setRating(e.target.value)}/>
                    <select value={genreId} onChange={(e) => setGenreId(e.target.value)} className="bg-gray-800 text-lg w-[75%] text-white p-5 rounded-lg mt-10">
                        <option value="">Select Genre</option>
                        {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                        ))}
                    </select>
                    <div className="flex flex-row items-center justify-center w-[100%] p-10">
                        <button className="bg-red-600 cursor-pointer text-white text-xl font-semibold px-5 py-3 rounded-lg" type="submit">Add Movie</button>
                    </div>
                </form>
            </div>
        </div>
    )
}