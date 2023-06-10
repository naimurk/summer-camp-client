import Footer from "../Page/Shared/Footer/Footer";
import Navbar from "../Page/Shared/Navbar/Navbar";
import {Outlet,useLocation} from 'react-router-dom'


const Main = () => {
    return (
        <div>
            <div className=""><Navbar></Navbar></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;