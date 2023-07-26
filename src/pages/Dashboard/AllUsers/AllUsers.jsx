import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(
        ['users'],
        async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        })
    console.log(users)
    return (
        <div>
            
        </div>
    );
};

export default AllUsers;