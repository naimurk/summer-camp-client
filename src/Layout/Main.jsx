import Footer from "../Page/Shared/Footer/Footer";
import Navbar from "../Page/Shared/Navbar/Navbar";
import {Outlet,useLocation} from 'react-router-dom'


const Main = () => {
    return (
        <div>
            <div className=""><Navbar></Navbar></div>
            <div className="lg:py-24 py-16"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;