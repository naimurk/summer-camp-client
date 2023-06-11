import { useQuery } from "@tanstack/react-query";


const useAllusers = () => {
    const {data : allUser = [],refetch } = useQuery({
        queryKey : ['allUser'],
        queryFn : async () => {
            const response = await fetch('https://summer-camp-server-naimurk.vercel.app/all-users')
            return response.json()
        }
    })
    return [allUser,refetch]
      
};

export default useAllusers;