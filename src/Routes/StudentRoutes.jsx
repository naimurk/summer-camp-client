
import { useContext } from "react";

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthProvider";
import useIsStudent from "../Hooks/useIsStudent";
const StudentRoutes = ({children}) => {
    const {user , loading}=useContext(AuthContext);
    const [isStudent,isLoading] = useIsStudent()
    console.log(isStudent?.admin);


    // const allFromAdmin = useAdmin()
    const location = useLocation()
    //  console.log(allFromAdmin);
    if (isStudent?.admin && user){
        return children
    }
    if( loading ||  isLoading) {
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to={'/'} state={{from : location}} replace ></Navigate>
};

export default StudentRoutes;