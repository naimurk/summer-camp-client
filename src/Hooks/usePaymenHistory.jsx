import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const usePaymenHistory = () => {
    const {user} = useContext(AuthContext)
    const {data : paymentHistory = [],isLoading } = useQuery({
        queryKey : ['paymentHistory'],
        queryFn : async () => {
            const response = await fetch(`https://summer-camp-server-naimurk.vercel.app/payment-history/${user?.email}`)
            return response.json()
        }
    })
    return [paymentHistory,isLoading]
};

export default usePaymenHistory;