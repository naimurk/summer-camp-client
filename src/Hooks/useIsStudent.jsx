import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const useIsStudent = () => {
    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
   const {data : isStudent, isLoading, refetch } = useQuery({
     queryKey : ['isStudent', user?.email],
     queryFn : async ()=> {
        if(!loading && user?.email){
            const response = await fetch(`https://summer-camp-server-naimurk.vercel.app/users/student/${user?.email}`,{
                headers : {
                    authorization : `bearer ${token}`
                }
            })

            return response.json();
        }
     },
     enabled : !loading && !!user?.email
     
   })


    return [isStudent, refetch, isLoading]
};

export default useIsStudent;