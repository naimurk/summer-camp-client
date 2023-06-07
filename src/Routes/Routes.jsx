import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Classes from "../Page/Classes/Classes";
import Instructors from "../Page/Instructors/Instructors";


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
  ]);