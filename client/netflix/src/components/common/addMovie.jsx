import { useNavigate } from "react-router-dom"
export default function AddMovie() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center ml-[35%] mt-[5%] w-[32%] bg-gray-900 p-4">
            <h1 className="text-2xl font-bold text-orange-500 px-2 py-3">Add Movie</h1>
        </div>
    )
}