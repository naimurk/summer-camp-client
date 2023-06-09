import { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthProvider";

import useIsInstructor from "../Hooks/useIsInstructor";


const InstructorRoutes = ({children}) => {

    const {user , loading}=useContext(AuthContext);
    const [isInstructor,isLoading] = useIsInstructor()

//   console.log(isInstructor?.admin)
    // const allFromAdmin = useAdmin()
    const location = useLocation()
    //  console.log(allFromAdmin);
    if (isInstructor?.admin && user){
        return children
    }
    if(loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }
   
    return <Navigate to={'/'} state={{from : location}} replace ></Navigate>
};

export default InstructorRoutes;