import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useAllinstructorClasses = () => {
    const {user,loading} = useContext(AuthContext);
    // console.log(user.email);
    const token = localStorage.getItem('access-token')

    const { isLoading, refetch,  data: allInstructorClasses = [] } = useQuery({
        queryKey: ['allInstructorClasses', user?.email],

        
        queryFn: async ()=> {
            const response = await fetch('http://localhost:5000/allClasses',{
                headers : {
                    authorization : `bearer ${token}`
                }
            })
            return response.json();
        },
        enabled : !loading && !!user?.email
      })
 

   return [allInstructorClasses , refetch, isLoading]
};

export default useAllinstructorClasses;