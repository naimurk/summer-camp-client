import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const {data : classes = [] } = useQuery({
        queryKey : ['classes'],
        queryFn : async () => {
            const response = await fetch('http://localhost:5000/classes')
            return response.json()
        }
    })
    return [classes]
      
};

export default useClasses;