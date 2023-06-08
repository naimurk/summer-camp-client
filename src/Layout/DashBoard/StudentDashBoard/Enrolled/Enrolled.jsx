import useEnrolledClasses from "../../../../Hooks/useEnrolledClasses";


const Enrolled = () => {
    const [enrolled, refetch] = useEnrolledClasses();
    console.log(enrolled);
    return (
        <div className="overflow-x-auto bg-slate-400 p-16 w-1/2 mx-auto">
  <table className="table text-black">
    {/* head */}
    <thead>
      <tr className="text-red-700 text-sm font-bold">
        <th>#</th>
        <th>image</th>
        <th>Name</th>
        <th>instructor name</th>
        <th>price</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {

     enrolled.map((item, index) => <tr
     
     key={item._id}
     >
     <th>
        {index + 1}
     </th>
     <td>
       <div className="flex items-center space-x-3">
         <div className="avatar">
           <div className="mask mask-squircle w-12 h-12">
             <img src={item?.image} alt="Avatar Tailwind CSS Component" />
           </div>
         </div>
         
       </div>
     </td>
     <td>
       {item?.className}
      
     </td>
     <td>{item?.instructor_name}</td>
     <th>
       {item?.price}
     </th>
   </tr> )
    
      }

     






    </tbody>
    
    
    
  </table>
</div>
    );
};

export default Enrolled;