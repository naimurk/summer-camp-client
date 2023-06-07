import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const {data : instructors = [] } = useQuery({
        queryKey : ['instructors'],
        queryFn : async () => {
            const response = await fetch('http://localhost:5000/instructors')
            return response.json()
        }
    })
    return [instructors]

    
};

export default useInstructor;