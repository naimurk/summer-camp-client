import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const {data : instructors = [],isLoading } = useQuery({
        queryKey : ['instructors'],
        queryFn : async () => {
            const response = await fetch('https://summer-camp-server-naimurk.vercel.app/instructors')
            return response.json()
        }
    })
    return [instructors,isLoading]

    
};

export default useInstructor;