import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCarts from "../../../Hooks/useCarts";

const ClassesTr = ({item}) => {
    console.log(item);
    const [carts, refetch] = useCarts();



    const handleDeletedCart = (id) => {

        fetch(`https://summer-camp-server-naimurk.vercel.app/carts/${id}`, {
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
        <tr className="text-black"
       

      >
        <th>
          
          {/* {console.log(item)} */}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={''} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>

          </div>
        </td>
        <td>

         

        </td>
        <td></td>
        <th>
          <button onClick={() => handleDeletedCart()} className="btn btn-ghost bg-warning btn-xs">details</button>
        </th>
        <th>
          <Link
            to={{
              pathname: "/dashBoard/payment",
              state: { item }, 
             
            }}
          >
            <button className="btn">pay</button>
            {/* {console.log(item)} */}
            
          </Link>

        </th>
      </tr>
    );
};

export default ClassesTr;