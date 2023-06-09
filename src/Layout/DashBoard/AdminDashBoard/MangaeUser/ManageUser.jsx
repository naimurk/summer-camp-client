import { useState } from "react";
import useAllusers from "../../../../Hooks/useAllusers";
import Swal from 'sweetalert2';

const ManageUser = () => {
  const [allUser, refetch] = useAllusers();
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleMakeAdmin = (id) => {
    if (disabledButtons.includes(id)) {
      return;
    }

    setDisabledButtons(prevDisabledButtons => [...prevDisabledButtons, id]);

    fetch(`http://localhost:5000/makeAdmin/${id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been admin',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  const handleMakeInstructor = (id) => {
    if (disabledButtons.includes(id)) {
      return;
    }

    setDisabledButtons(prevDisabledButtons => [...prevDisabledButtons, id]);

    fetch(`http://localhost:5000/makeInstructor/${id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your have been admin',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  return (
    <div className="bg-slate-400 p-16">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-black text-sm font-bold">
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th>action</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {allUser &&
              allUser?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.role}</td>
                  <td>
                    <button
                      disabled={disabledButtons.includes(item._id)}
                      onClick={() => handleMakeAdmin(item?._id)}
                      className="btn btn-warning btn-sm"
                    >
                      Make Admin
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={disabledButtons.includes(item._id)}
                      onClick={() => handleMakeInstructor(item?._id)}
                      className="btn btn-primary btn-sm"
                    >
                      Make Instructor
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
