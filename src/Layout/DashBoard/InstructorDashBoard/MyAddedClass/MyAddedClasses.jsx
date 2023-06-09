import useInstructorClasses from "../../../../Hooks/useInstructorClasses";


const MyAddedClasses = () => {
    const [myClasses,refetch] = useInstructorClasses();
    console.log(myClasses);
    return (
        <div className="p-8 w-full">
            <div className="bg-slate-400 p-16   mx-auto">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-black text-sm">
        <th>#</th>
        <th>image</th>
        <th>Name</th>
        <th>price</th>
        <th>available seats</th>
        <th>status</th>
        <th>enrolled</th>
        <th>feedback</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        myClasses.map((item, index)=> <tr
        className="text-black"
        key={item._id}
        >
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src= {item?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>{item?.classname}</td>
        <td>{item?.price}</td>
        <td>{item?.available_seats}</td>
        <td>{item?.status}</td>
        <td>{item?.enrolled}</td>
        <td>{item?.feedback ? item?.feedback: 'no feedback yet'}</td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default MyAddedClasses;