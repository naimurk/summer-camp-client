import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Classes from "../Page/Classes/Classes";
import Instructors from "../Page/Instructors/Instructors";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layout/DashBoard/DashBoard/DashBoard";
import StudentRoutes from "./StudentRoutes";
import MySelectedClasses from "../Layout/DashBoard/StudentDashBoard/MySelectedClasses";
import Payment from "../Layout/DashBoard/StudentDashBoard/Payment/Payment";
import Enrolled from "../Layout/DashBoard/StudentDashBoard/Enrolled/Enrolled";
import AdminRoutes from "./AdminRoutes";
import ManageUser from "../Layout/DashBoard/AdminDashBoard/MangaeUser/ManageUser";
import InstructorRoutes from "./InstructorRoutes";
import AddClass from "../Layout/DashBoard/InstructorDashBoard/AddClass/AddClass";
import MyAddedClasses from "../Layout/DashBoard/InstructorDashBoard/MyAddedClass/MyAddedClasses";
import ManageClasses from "../Layout/DashBoard/AdminDashBoard/ManageClasses/ManageClasses";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/signUp',
            element : <SignUp></SignUp>
        },
        {
            path : '/classes',
            element : <Classes></Classes>
        },
        {
            path : '/instructors',
            element : <Instructors></Instructors>
        },
      ]
    },
    {
      path: "dashBoard",
      element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children : [
        {
          path : 'myCart',
          element : <StudentRoutes><MySelectedClasses></MySelectedClasses></StudentRoutes>
        },
        {
          path : 'payment',
          element : <StudentRoutes><Payment></Payment></StudentRoutes>
        },
        {
          path : 'enrolled',
          element : <StudentRoutes><Enrolled></Enrolled></StudentRoutes>
        },
        {
          path : 'manage-users',
          element : <AdminRoutes><ManageUser></ManageUser></AdminRoutes>
        },
        {
          path : 'manage-classes',
          element : <AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
        },
        {
          path : 'addClass',
          element : <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
        },
        {
          path : 'myAddedClass',
          element : <InstructorRoutes><MyAddedClasses></MyAddedClasses></InstructorRoutes>
        },
      ]
      
    },
  ]);