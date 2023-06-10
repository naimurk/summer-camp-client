import { useContext } from "react";
import useIsAdmin from "../../Hooks/useIsAdmin";
import useIsInstructor from "../../Hooks/useIsInstructor";
import useIsStudent from "../../Hooks/useIsStudent";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import useCarts from "../../Hooks/useCarts";


const ClassesCard = ({ item }) => {
    const [isAdmin ] = useIsAdmin();
    const [isStudent] = useIsStudent();
    const [isInstructor] = useIsInstructor();
    // console.log(isAdmin, isStudent, isInstructor);
    const {user} = useContext(AuthContext)
    const { _id, image, price, available_seats, enrolled, classname, instructor_name } = item
    const navigate = useNavigate()
   const [carts ,refetch] = useCarts()
//    console.log(carts);
    

  const handleAddToCart = (item)=> {
   const { _id, price, available_seats, enrolled,  classname, instructor_name,image} = item
    if(isStudent.admin && user) {
       const oderItem = { ClassId: _id, price, enrolled,   available_seats, classname, instructor_name,image, email: user?.email}
       fetch('http://localhost:5000/carts',
             {
                method : 'POST', 
                headers : {
                   'content-type' : 'application/json' 
                },
                body : JSON.stringify(oderItem)
            }
            
            )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    refetch()
                    Swal.fire({
                        position: 'item added successfully',
                        icon: 'success',
                        title: 'item added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    else {
        Swal.fire('only available logged student')
    }
      
  }


  const loginAlert = () => {


    return Swal.fire({
        title: 'Please Login First',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'login!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })

  }


    return (
        <div className={`card w-96 bg-base-100 shadow-xl ${available_seats == 0 ? 'bg-red-500' :''}`}>
            <figure><img className="w-full h-1/2" src={image} alt="Shoes" /></figure>
            <div className={`card-body `}>
                <h2 className="card-title">{classname}</h2>
                <p className="font-semibold text-2xl">instructor name : {instructor_name}</p>
                <p className="text-red-400 font-bold">price : ${price}</p>
                <p className="text-warn font-bold">Available seats : ${available_seats}</p>
                <div className="card-actions justify-end">
                    <button onClick={user ? ()=>handleAddToCart(item) : loginAlert }  disabled = {isAdmin?.admin || isInstructor?.admin ||  available_seats === 0} className="btn btn-warning">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;