import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider';


const useEnrolledClasses = () => {
    const {user,loading} = useContext(AuthContext);
    // console.log(user.email);
    const token = localStorage.getItem('access-token')

    const { isLoading, refetch,  data: enrolled = [] } = useQuery({
        queryKey: ['enrolled', user?.email],

        
        queryFn: async ()=> {
            const response = await fetch(`http://localhost:5000/payment?email=${user?.email}`,{
                headers : {
                    authorization : `bearer ${token}`
                }
            })
            return response.json();
        },
        enabled : !loading && !!user?.email
      })
 

   return [enrolled , refetch, isLoading]
};

export default useEnrolledClasses;