
const UserProfile = () => {
    return (
        <div className="bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="User" 
                className="w-24 md:w-36 h-24 md:h-36 rounded-full mx-auto"
            />
            <h1 className="text-sm md:text-xl text-blue-800 my-4">John Doe</h1>
            <p className="text-gray-600 text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    )
}
export default UserProfile;