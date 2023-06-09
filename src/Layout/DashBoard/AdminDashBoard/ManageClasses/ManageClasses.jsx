import { useContext, useState } from "react";
import useAllinstructorClasses from "../../../../Hooks/useAllinstructorClasses";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";


const ManageClasses = () => {

  const [allInstructorClasses, refetch] = useAllinstructorClasses()
  console.log(allInstructorClasses);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const token = localStorage.getItem('access-token')

  const handleApprove = (id,item) => {
    
    if (disabledButtons.includes(id)) {
      return;
    }

    setDisabledButtons(prevDisabledButtons => [...prevDisabledButtons, id]);
    fetch(`http://localhost:5000/makeApproved/${id}`, {
      method : 'PATCH',
      headers : {
        authorization : `bearer ${token}`
    }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        refetch();
        fetch('http://localhost:5000/classes',{
          method : 'POST',
          headers : {
            'content-type' : 'application/json',
            authorization : `bearer ${token}`
          },
          body : JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId ) {
            alert('classes on ui')
          }
        })
      }
    })


  }






  const handleDenied = (id) => {
    if (disabledButtons.includes(id)) {
      return;
    }

    setDisabledButtons(prevDisabledButtons => [...prevDisabledButtons, id]);
    fetch(`http://localhost:5000/makeDenied/${id}`, {
      method : 'PATCH',
      headers : {
        authorization : `bearer ${token}`
    }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount>0){
        refetch()
        alert('you have denied the class')
      }
    })


  }


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
                <th>approved</th>
                <th>denied</th>
                <th>feedback</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {
                allInstructorClasses.map((item, index) => <tr
                  className="text-black"
                  key={item._id}
                >
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>

                    </div>
                  </td>
                  <td>{item?.classname}</td>
                  <td>{item?.price}</td>
                  <td>{item?.available_seats}</td>
                  <td>{item?.status}</td>
                  <td><button disabled={disabledButtons.includes(item._id)} onClick={() => handleApprove(item?._id,item)} className="btn btn-sm text-white border-0 bg-green-600 ">Approved</button></td>
                  <td><button disabled = {disabledButtons.includes(item._id)} onClick={() => handleDenied(item?._id)} className="btn btn-sm text-white border-0 bg-orange-600  ">Denied</button></td>
                  <td><button className="btn btn-sm text-white border-0 bg-blue-600 ">Feedback</button></td>
                </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;