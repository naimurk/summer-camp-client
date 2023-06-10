import { useContext, useState } from "react";
import useAllinstructorClasses from "../../../../Hooks/useAllinstructorClasses";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const ManageClasses = () => {
  const { user } = useContext(AuthContext);
  const [allInstructorClasses, refetch] = useAllinstructorClasses();
  const [disabledButtons, setDisabledButtons] = useState([]);
  const token = localStorage.getItem('access-token');
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const { register, handleSubmit, formState: { errors },setValue,reset } = useForm();
  const onSubmit = data => {
    // const feedback =data?.feedback
    // const id = data?.id
   if(data){

    fetch(`http://localhost:5000/feedback/${data?.id}`, {
      method : 'PATCH',
      headers: {
        authorization: `bearer ${token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
      
    })
    .then(res => res.json())
    .then(data => console.log(data))

   }

   else {
    return('no data ')
   }
    
  
  };

  const handleApprove = (id, item) => {
    if (disabledButtons.includes(id)) {
      return;
    }

    setDisabledButtons(prevDisabledButtons => [...prevDisabledButtons, id]);
    fetch(`http://localhost:5000/makeApproved/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: `bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${token}`
            },
            body: JSON.stringify(item)
          })
            .then(res => res.json())
            .then(data => {
              // console.log(data);
              if (data.insertedId) {
                alert('classes on ui');
              }
            });
        }
      });
  };

  const handleDenied = (id) => {
    if (disabledButtons.includes(id)) {
      return;
    }

    setDisabledButtons(prevDisabledButtons => [...prevDisabledButtons, id]);
    fetch(`http://localhost:5000/makeDenied/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: `bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          alert('you have denied the class');
        }
      });
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px'
    },
  };

  const handleModal = (item) => {
    
    setSelectedClass(item);
    setShowModal(true);
    setValue("id", item?._id);
  };
  // console.log(selectedClass);
  const handleCloseModal = () => {
    setSelectedClass(null);
    setShowModal(false);
  };

  return (
    <div className="p-8 w-full">
      <div className="bg-slate-400 p-16 mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-black text-sm">
                <th>#</th>
                <th>image</th>
                <th>Name</th>
                <th>price</th>
                <th>instructor email</th>
                <th>available seats</th>
                <th>status</th>
                <th>approved</th>
                <th>denied</th>
                <th>feedback</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {user && allInstructorClasses?.map((item, index) => (
                <tr className="text-black" key={item._id}>
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
                  <td>{item?.email}</td>
                  <td>{item?.available_seats}</td>
                  <td>{item?.status}</td>
                  <td>
                    <button
                      disabled={disabledButtons.includes(item._id)}
                      onClick={() => handleApprove(item?._id, item)}
                      className="btn btn-sm text-white border-0 bg-green-600 "
                    >
                      Approved
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={disabledButtons.includes(item._id)}
                      onClick={() => handleDenied(item?._id)}
                      className="btn btn-sm text-white border-0 bg-orange-600"
                    >
                      Denied
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleModal(item)}
                      className="btn btn-sm text-white border-0 bg-blue-600"
                    >
                      Feedback
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* modal */}
      {selectedClass && (
        <div className="w-1/2">
          <Modal
            isOpen={showModal}
            onRequestClose={handleCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button className="btn mb-3 btn-warning" onClick={handleCloseModal}>X</button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input value={selectedClass?._id || ''} readOnly className="hidden" {...register("id")} />
              <input type="text" className="input w-full" {...register("feedback", { required: true })} />
              {errors.feedback && <span>This field is required</span>}
              <input className="btn mt-3 btn-sm btn-primary" type="submit" />
            </form>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
