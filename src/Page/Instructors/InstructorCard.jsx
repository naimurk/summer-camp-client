


const InstructorCard = ({ item }) => {
    const { _id, image, instructor_name, email } = item
    
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/2"><img className="w-full h-96" src={image} alt="Movie" /></figure>
            <div className=" w-1/2 card-body">
                <h2 className="card-title">Name: {instructor_name}</h2>
                <p className="text-slate-50">email: {email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning">Purchase the class</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;