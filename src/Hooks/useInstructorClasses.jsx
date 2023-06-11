import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useInstructorClasses = () => {
    const {user,loading} = useContext(AuthContext);
    // console.log(user.email);
    const token = localStorage.getItem('access-token')

    const { isLoading, refetch,  data: myClasses = [] } = useQuery({
        queryKey: ['myClasses', user?.email],

        
        queryFn: async ()=> {
            const response = await fetch(`https://summer-camp-server-naimurk.vercel.app/myClasses?email=${user?.email}`,{
                headers : {
                    authorization : `bearer ${token}`
                }
            })
            return response.json();
        },
        enabled : !loading && !!user?.email
      })
 

   return [myClasses , refetch, isLoading]


};



export default useInstructorClasses;