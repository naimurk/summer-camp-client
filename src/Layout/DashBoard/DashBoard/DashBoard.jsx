import { NavLink, Outlet } from "react-router-dom";
import useIsAdmin from "../../../Hooks/useIsAdmin";
import useIsStudent from "../../../Hooks/useIsStudent";
import useIsInstructor from "../../../Hooks/useIsInstructor";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { AiFillHome } from 'react-icons/ai';

import { MdPayment,MdClass,MdLibraryAddCheck } from 'react-icons/md';
import { FaUserFriends,FaChalkboardTeacher } from 'react-icons/fa';
import { BiAddToQueue} from 'react-icons/bi';

// import { MdPayment } from 'react-icons/md';
import { MdCloudDone,MdOutlineDownloadDone } from 'react-icons/md';
// import { IoCheckmarkDoneSharp } from 'react-icons/io';
// AiFillHome
// BsFillBookmarkFill
// MdPayment
// BiSolidSelectMultiple

// istructor
// BiSolidMessageAdd
// MdLibraryAddCheck

// FaUserFriends
// MdClass


const DashBoard = () => {
    const [isAdmin] = useIsAdmin();
    const [isStudent] = useIsStudent()
    const [isInstructor] = useIsInstructor()
    const {user} = useContext(AuthContext)
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
                <ul className="menu py-12 px-8 w-80  h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}

                    {
                       user && <li><NavLink to={'/dashboard/userHome'}> <AiFillHome></AiFillHome> user home</NavLink></li> 
                    }

                    {
                        isStudent?.admin && 
                        <>
                        <li className="my-3"><NavLink to={'/dashBoard/myCart'}> <MdOutlineDownloadDone></MdOutlineDownloadDone>  My Selected Classes</NavLink></li>
                        <li className="my-3"><NavLink to={'/dashBoard/enrolled'}> <MdCloudDone></MdCloudDone>  My Enrolled Classes</NavLink></li>
                        <li className="my-3"><NavLink to={'/dashBoard/payment-history'}> <MdPayment></MdPayment> Payment History </NavLink></li>
                        </>
                    }
                    {
                        isInstructor?.admin && 
                        <>
                        <li className="my-3"><NavLink to={'/dashBoard/addClass'}> <BiAddToQueue></BiAddToQueue> Add Class</NavLink></li>
                        <li className="my-3"><NavLink to={'/dashBoard/myAddedClass'}> <MdLibraryAddCheck></MdLibraryAddCheck> My Classes</NavLink></li>
                        </>
                    }
                    {
                        isAdmin?.admin && 
                        <>
                        <li className="my-3"><NavLink to={'/dashBoard/manage-classes'}> <MdClass></MdClass> Manage Classes</NavLink></li>
                        <li className="my-3"><NavLink to={'/dashBoard/manage-users'}>  <FaUserFriends></FaUserFriends> Manage User</NavLink></li>
                        </>
                    }
                  
                  <div className="divider "></div>
                  
                  <li className="my-3"><NavLink to={'/'}> <AiFillHome></AiFillHome> Home</NavLink></li>
                  <li className="my-3"><NavLink to={'/classes'}> <MdClass></MdClass> classes</NavLink></li>
                  <li className="my-3"><NavLink to={'/instructors'}> <FaChalkboardTeacher></FaChalkboardTeacher> instructors</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;