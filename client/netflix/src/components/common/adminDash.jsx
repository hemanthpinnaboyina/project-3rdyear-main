import { useNavigate } from "react-router-dom"
export default function AdminDash() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center ml-[35%] mt-[5%] w-[32%] bg-gray-900 p-4">
            <h1 className="text-2xl font-bold text-orange-500 px-2 py-3">Admin Dashboard</h1>
            <div className="flex py-4 gap-14">
                <button className="flex bg-red-600 text-white px-2.5 py-2.5 rounded-lg hover:cursor-pointer">Add Genre</button>
                <button className="flex bg-red-600 text-white px-2.5 py-2.5 rounded-lg hover:cursor-pointer" onClick={() => navigate('/addMovie')}>Add Movie</button>
            </div>
            <div className="flex py-2 gap-8">
                <button className="flex bg-red-600 text-white px-2.5 py-2.5 rounded-lg hover:cursor-pointer">Update Movie</button>
                <button className="flex bg-red-600 text-white px-2.5 py-2.5 rounded-lg hover:cursor-pointer">Delete Movie</button>
            </div>
            <div className="flex py-4 gap-6 ml-6">
                <button className="flex bg-red-600 text-white px-2.5 py-2.5 rounded-lg hover:cursor-pointer">Update Rating</button>
                <button className="flex bg-red-600 text-white px-2.5 py-2.5 rounded-lg hover:cursor-pointer">Change Password</button>
            </div>
        </div>
    )
}