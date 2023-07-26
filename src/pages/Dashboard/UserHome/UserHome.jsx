import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth()
    return (
        <div className="absolute flex items-center h-full text-center">
            <h2 className="text-6xl font-bold uppercase ">{user?.displayName},<br /> Welcome to home</h2>
        </div>
    );
};

export default UserHome;