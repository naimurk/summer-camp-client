import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const AddClass = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const {email, className, classImage ,available_seats,price, name} = data; 
        const classItem = {email,classImage, className, available_seats, price, name}
        console.log(classItem);
    };
    const {user} = useContext(AuthContext)
    return (
        <div className="bg-slate-400 w-1/2 mx-auto p-16">
            <form className="" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col gap-9">
 
                <div className="flex gap-7 ">
                    {/* <label htmlFor="">clasn</label> */}
                    <input placeholder="Class name" className="px-5 w-full py-2 text-black bg-white border-2 " defaultValue="" {...register("className",{ required: true })} />
                    <input  placeholder="class image url" className="px-5 w-full py-2 text-black bg-white border-2 " defaultValue="" {...register("classImage",{ required: true })} />
                </div>
                <div className="flex gap-7">
                    <input placeholder="available seats" className="px-5 w-full py-2 text-black bg-white border-2 " defaultValue="" {...register("available_seats",{ required: true })} />
                    <input placeholder="price"  className="px-5 w-full py-2 text-black bg-white border-2 "  defaultValue="" {...register("price",{ required: true })} />
                </div>
                <div className="flex gap-7">
                    <input placeholder="email"  className="px-5 w-full py-2 text-black bg-white border-2 " readOnly defaultValue={user?.email} {...register("email")} />
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