import 'animate.css';
import { Zoom } from "react-awesome-reveal";

const InstructorCard = ({ item }) => {
    const { _id, photo, name, email, enrolled, } = item
    
    return (
       <Zoom>
            <div className="card animate__pulse card-side bg-base-100 shadow-xl">
            <figure className="w-1/2"><img className="w-full h-96" src={photo} alt="Movie" /></figure>
            <div className=" w-1/2 card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p className="">email: {email}</p>
                <p className="">enrolled: {enrolled}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning">Purchase the class</button>
                </div>
            </div>
        </div>
       </Zoom>
    );
};

export default InstructorCard;