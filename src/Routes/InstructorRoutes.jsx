import { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthProvider";
import useInstructor from "../Hooks/useInstructor";


const InstructorRoutes = ({children}) => {

    const {user , loading}=useContext(AuthContext);
    const [isInstructor,isLoading] = useInstructor()


    // const allFromAdmin = useAdmin()
    const location = useLocation()
    //  console.log(allFromAdmin);
    if(loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (isInstructor?.admin && user){
        return children
    }
    return <Navigate to={'/'} state={{from : location}} replace ></Navigate>
};

export default InstructorRoutes;