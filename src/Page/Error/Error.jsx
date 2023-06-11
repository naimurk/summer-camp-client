import Lottie from "lottie-react"
import error1 from '../../../error.json'
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div className="pb-14 w-full flex justify-center gap-x-4 items-center">
            <div className="w-1/2">
                <Lottie animationData={error1}></Lottie>
            </div>
            <div className="w-1/2">
                <h1 className="mb-5 text-3xl  font-bold"> Error message : <span className="">{error?.message}</span></h1>
                <p className="mb-5 text-3xl"> Error Status :  {status ? status : '404'}</p>
                <Link to={"/"}><button className="btn btn-warning">Go to home</button></Link>
            </div>
        </div>
    );
};

export default Error;