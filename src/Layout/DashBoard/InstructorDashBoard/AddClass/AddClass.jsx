import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const AddClass = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem("access-token")


    const onSubmit = data => {
        // console.log(data);
        const { email, className, classImage, available_seats, price, name } = data;
        const classItem = {
            email: email,
            image: classImage,
            classname: className,
            available_seats: available_seats,
            price,
            instructor_name: name,
            status: 'pending',
            feedback: '',
            enrolled: 0
        }
        // console.log(classItem);

        fetch('http://localhost:5000/addClass', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${token}`
            },
            body: JSON.stringify(classItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been pending',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    };



    return (
        <div className="bg-slate-400 w-1/2 mx-auto p-16">
            <form className="" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col gap-9">

                    <div className="flex gap-7 ">
                        {/* <label htmlFor="">clasn</label> */}
                        <input placeholder="Class name" className="px-5 w-full py-2 text-black bg-white border-2 " defaultValue="" {...register("className", { required: true })} />
                        <input placeholder="class image url" className="px-5 w-full py-2 text-black bg-white border-2 " defaultValue="" {...register("classImage", { required: true })} />
                    </div>
                    <div className="flex gap-7">
                        <input placeholder="available seats" className="px-5 w-full py-2 text-black bg-white border-2 " defaultValue="" {...register("available_seats", { required: true })} />
                        <input placeholder="price" className="px-5 w-full py-2 text-black bg-white border-2 " defaultValue="" {...register("price", { required: true })} />
                    </div>
                    <div className="flex gap-7">
                        <input placeholder="email" className="px-5 w-full py-2 text-black bg-white border-2 " readOnly defaultValue={user?.email} {...register("email")} />
                        <input placeholder="name" className="px-5 w-full py-2 text-black bg-white border-2 " readOnly defaultValue={user?.displayName} {...register("name")} />
                    </div>


                </div>

                {/* <input {...register("exampleRequired", { required: true })} /> */}

                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                <input className="btn btn-warning mt-4" value={'add a class'} type="submit" />
            </form>
        </div>
    );
};

export default AddClass;