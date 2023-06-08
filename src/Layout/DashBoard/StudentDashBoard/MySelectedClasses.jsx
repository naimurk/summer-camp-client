import { useContext } from "react";
import useCarts from "../../../Hooks/useCarts";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";


const MySelectedClasses = () => {
  const [carts, refetch] = useCarts();
  console.log(carts);
  const { user } = useContext(AuthContext)


  const handleDeletedCart = (id) => {

    fetch(`http://localhost:5000/carts/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

  }











  return (
    <div className="overflow-x-auto bg-slate-400 mx-auto w-3/4 p-12">
      <h1 className="text-3xl font-bold text-black">Total Classes : {carts?.length}</h1>
      <div className="flex justify-end"><Link to={'/dashBoard/payment'}><button className="btn bg-purple-600">pay</button></Link></div>
      <table className="table shadow-2xl ">
        {/* head */}
        <thead className="text-black text-sm font-bold">
          <tr>
            <th>#</th>
            <th>image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody className="">
          {/* row 1 */}
          {
            user && carts?.map((item, index) => 
            <tr className="text-black"
              key={item._id}

            >
              <th>
                {index + 1}
                {/* {console.log(item)} */}
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

                {item?.classname}

              </td>
              <td>{item?.price}</td>
              <th>
                <button onClick={() => handleDeletedCart(item?._id)} className="btn btn-ghost bg-warning btn-xs">details</button>
              </th>
              <th>
                <Link
                  to={"/dashBoard/payment"}
                  state={item}
                >
                  <button className="btn">pay</button>
                  {/* {console.log(item)} */}
                  
                </Link>
               
              </th>
            </tr>)
          }

        </tbody>


      </table>
    </div>
  );
};

export default MySelectedClasses;