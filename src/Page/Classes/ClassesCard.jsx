

const ClassesCard = ({ item }) => {
    const { _id, image, price, available_seats, classname, instructor_name } = item
    return (
        <div className={`card w-96 bg-base-100 shadow-xl ${available_seats == 0 ? 'bg-red-500' :''}`}>
            <figure><img className="w-full h-1/2" src={image} alt="Shoes" /></figure>
            <div className={`card-body `}>
                <h2 className="card-title">{classname}</h2>
                <p className="font-semibold text-2xl">instructor name : {instructor_name}</p>
                <p className="text-red-400 font-bold">price : ${price}</p>
                <p className="text-warn font-bold">Available seats : ${available_seats}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;