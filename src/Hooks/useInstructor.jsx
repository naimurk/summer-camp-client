import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const {data : instructors = [],isLoading } = useQuery({
        queryKey : ['instructors'],
        queryFn : async () => {
            const response = await fetch('http://localhost:5000/instructors')
            return response.json()
        }
    })
    return [instructors,isLoading]

    
};

export default useInstructor;