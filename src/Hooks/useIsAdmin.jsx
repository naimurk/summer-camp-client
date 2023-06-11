import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";



const useIsAdmin = () => {
    const {user, loading} = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
   const {data : isAdmin, isLoading, refetch } = useQuery({
     queryKey : ['isAdmin', user?.email],
     queryFn : async ()=> {
        if(!loading && user?.email){
            const response = await fetch(`https://summer-camp-server-naimurk.vercel.app/users/admin/${user?.email}`,{
                headers : {
                    authorization : `bearer ${token}`
                }
            })

            return response.json();
        }
     },
     enabled : !loading && !!user?.email
     
   })


    return [isAdmin, refetch, isLoading]
};

export default useIsAdmin;