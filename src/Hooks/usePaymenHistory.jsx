import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const usePaymenHistory = () => {
    const {user} = useContext(AuthContext)
    const {data : paymentHistory = [],isLoading } = useQuery({
        queryKey : ['paymentHistory'],
        queryFn : async () => {
            const response = await fetch(`http://localhost:5000/payment-history/${user?.email}`)
            return response.json()
        }
    })
    return [paymentHistory,isLoading]
};

export default usePaymenHistory;