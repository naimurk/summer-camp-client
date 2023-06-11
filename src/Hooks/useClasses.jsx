import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const {data : classes = [],refetch } = useQuery({
        queryKey : ['classes'],
        queryFn : async () => {
            const response = await fetch('https://summer-camp-server-naimurk.vercel.app/classes')
            return response.json()
        }
    })
    return [classes,refetch]
      
};

export default useClasses;