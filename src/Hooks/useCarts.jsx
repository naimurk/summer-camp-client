import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useCarts = () => {
    const {user,loading} = useContext(AuthContext);
    // console.log(user.email);
    const token = localStorage.getItem('access-token')

    const { isLoading, refetch,  data: carts = [] } = useQuery({
        queryKey: ['carts', user?.email],

        
        queryFn: async ()=> {
            const response = await fetch(`http://localhost:5000/my-carts?email=${user?.email}`,{
                headers : {
                    authorization : `bearer ${token}`
                }
            })
            return response.json();
        },
        enabled : !loading && !!user?.email
      })
 

   return [carts , refetch, isLoading]
};

export default useCarts;