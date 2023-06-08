import { useContext } from "react";

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthProvider/AuthProvider";
import useIsAdmin from "../Hooks/useIsAdmin";

const AdminRoutes = ({children}) => {
    const {user , loading}=useContext(AuthContext);
    const [isAdmin,isLoading] = useIsAdmin()


    // const allFromAdmin = useAdmin()
    const location = useLocation()
    //  console.log(allFromAdmin);
    if(loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (isAdmin?.admin && user){
        return children
    }
    return <Navigate to={'/'} state={{from : location}} replace ></Navigate>
};

export default AdminRoutes;