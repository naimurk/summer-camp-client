import { useQuery } from "@tanstack/react-query";


const useAllusers = () => {
    const {data : allUser = [] } = useQuery({
        queryKey : ['allUser'],
        queryFn : async () => {
            const response = await fetch('http://localhost:5000/all-users')
            return response.json()
        }
    })
    return [allUser]
      
};

export default useAllusers;