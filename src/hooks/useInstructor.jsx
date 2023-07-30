import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const {data: instructors = []} = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await fetch('https://languagevio-server-labiba-diyana.vercel.app/instructors')
            return res.json()
        }
    })
    return [instructors]
};

export default useInstructor;