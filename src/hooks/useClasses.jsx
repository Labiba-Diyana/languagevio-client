import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const {data: classes = []} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://languagevio-server-labiba-diyana.vercel.app/classes')
            return res.json()
        }
    })
    return [classes]
};

export default useClasses;