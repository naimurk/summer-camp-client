import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
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
    
    console.log(data);
    signIn(data.email,data.password)
        .then(result => {
            const user = result.user ;
            console.log(user)
            Swal.fire('login successfully ')
        })
        navigate(from, { replace: true });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">login!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                    minLength: 8,
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
              {errors.password?.type === "minLength" && (
                <p>password must have at least 8 characters</p>
              )}
            </div>

            {/* field 4 */}
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="sign up"
              />
              <Link to={"/login"}>
                <p>log in</p>
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
