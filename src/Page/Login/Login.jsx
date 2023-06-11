import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAllusers from "../../Hooks/useAllusers";
import Lottie from "lottie-react";
import loginjson from '../../../login.json'

const Login = () => {
  const [allUser] = useAllusers()
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const filter = allUser.find(item => item?.email == data.email)
    if(filter){
      signIn(data.email,data.password)
        .then(result => {
            const user = result.user ;
            console.log(user)
            Swal.fire('login successfully ')
        })
        navigate(from, { replace: true });
    }
    else {
      Swal.fire('you have not account yet')
    }
    // console.log(data);
    
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content justify-center w-full items-center gap-x-14 flex-col lg:flex-row">
        <div className="text-center w-1/2 ">
           <Lottie animationData={loginjson}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl text-center mt-4 font-bold">login!</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                  />
                </button>
              </div>
             
            </div>

            {/* field 4 */}
            <div className="form-control mt-6">
              <input
                className="btn btn-warning"
                type="submit"
                value="login"
              />
              <Link to={"/signUp"}>
                <p className="p-5 btn btn-sm mt-3">signUp</p>
              </Link>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
