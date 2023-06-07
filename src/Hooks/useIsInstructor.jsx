import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const useIsInstructor = () => {
    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
   const {data : isInstructor, isLoading, refetch } = useQuery({
     queryKey : ['isInstructor', user?.email],
     queryFn : async ()=> {
        if(!loading && user?.email){
            const response = await fetch(`http://localhost:5000/users/instructor/${user?.email}`,{
                headers : {
                    authorization : `bearer ${token}`
                }
            })

            return response.json();
        }
     },
     enabled : !loading && !!user?.email
     
   })


    return [isInstructor, refetch, isLoading]
};

export default useIsInstructor;