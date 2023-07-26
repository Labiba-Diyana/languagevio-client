import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useSelectedClasses = () => {
    const {user, loading} = useAuth();
    const token = localStorage.getItem('access-token')
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/studentClasses?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        }
    })
    return [selectedClasses, refetch]
};

export default useSelectedClasses;