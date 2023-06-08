import { NavLink, Outlet } from "react-router-dom";
import useIsAdmin from "../../../Hooks/useIsAdmin";
import useIsStudent from "../../../Hooks/useIsStudent";
import useIsInstructor from "../../../Hooks/useIsInstructor";


const DashBoard = () => {
    const [isAdmin] = useIsAdmin();
    const [isStudent] = useIsStudent()
    const [isInstructor] = useIsInstructor()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 mt-24 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isStudent?.admin && 
                        <>
                        <li className="my-3"><NavLink to={'/dashBoard/myCart'}>My Selected Classes</NavLink></li>
                        <li className="my-3"><NavLink>My Enrolled Classes</NavLink></li>
                        </>
                    }
                    {
                        isInstructor?.admin && 
                        <>
                        <li className="my-3"><NavLink>Add Class</NavLink></li>
                        <li className="my-3"><NavLink>My Classes</NavLink></li>
                        </>
                    }
                    {
                        isAdmin?.admin && 
                        <>
                        <li className="my-3"><NavLink>Manage Classes</NavLink></li>
                        <li className="my-3"><NavLink>Manage User</NavLink></li>
                        </>
                    }
                  
                  <div className="divider "></div>
                  
                  <li className="my-3"><NavLink to={'/home'}>Home</NavLink></li>
                  <li className="my-3"><NavLink to={'/classes'}>classes</NavLink></li>
                  <li className="my-3"><NavLink to={'/instructors'}>instructors</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;