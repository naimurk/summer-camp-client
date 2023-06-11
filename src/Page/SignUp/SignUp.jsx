import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAllusers from "../../Hooks/useAllusers";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import sigupjson from '../../../signup.json'
import Lottie from "lottie-react";

const SignUp = () => {
  const [allUser] = useAllusers()
  const { createUser, logOut, UserUpdateProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/login";

  const [showPassword, setShowPassword] = useState(false);




  const onSubmit = (data) => {

    const person = allUser.find(s => s.email === data.email)


    if (data.password !== data.confirmPassword) {
      Swal.fire("Error", "Passwords do not match", "error");
      return;
    }
    console.log(data.email, data.password, data);


    if (person?.email) {
      Swal.fire({
        icon: 'error',
        title: 'Email already exist!',
        text: '',

      })
    }
    else {
      createUser(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);

          // update function call here 
          UserUpdateProfile(data.name, data.photo)
            .then(() => {
              const student = "student"
              const saveUser = { name: data.name, email: data.email, photo: data.photo, role: student }
              fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                  'content-type': "application/json"
                },
                body: JSON.stringify(saveUser)
              })
                .then(res => res.json())
                .then(data => {
                  if (data.insertedId) {
                    reset();
                    // login function call here 
                    logOut()
                      .then(() => { })
                      .catch(error => console.log(error))
                    Swal.fire('Created Account successfully ')
                    navigate(from, { replace: true });

                  }
                })

            })



        })
    }






  };





  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero  min-h-screen bg-base-200">
      <div className="hero-content w-full gap-x-16 flex-col lg:flex-row">
        <div className="text-center w-1/2 ">
          
          <div>
               <Lottie animationData={sigupjson}></Lottie>
          </div>
        </div>
        <div className="card w-1/2 flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl text-center pt-5 font-bold">Sign UP !</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* field 1 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">name is required</span>
              )}
            </div>
            {/* field photo url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="photo url"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-500">photo url is required</span>
              )}
            </div>

            {/* field 2*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">email is required</span>
              )}
            </div>

            {/* field 3 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    maxLength: 6,
                    pattern: {
                      value: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]+$/,
                      // message: "Password must not contain special characters or capital letters",
                    },
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <button
                  type="button"
                  className="btn-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              {errors.password?.type === "maxLength" && (
                <p>password must have less then 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p>Password must not contain special characters or capital letters</p>
              )}
            </div>

            {/* field 4 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                name="confirmPassword"
                placeholder="confirm password"
                className="input input-bordered"
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* field 5 */}
            <div className="form-control mt-6">
              <input className="btn btn-warning" type="submit" value="sign up" />
              <p className='text-yellow-600'>already have an account? <Link to={"/login"}>
                <span className="btn btn-sm">login </span>
              </Link></p>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
