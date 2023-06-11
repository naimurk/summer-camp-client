import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSocialLogin = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL  };
      console.log(loggedUser);

      axios.post("https://summer-camp-server-naimurk.vercel.app/users", saveUser, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <div className="text-center  py-5">
      <div className="divider"></div>
      <button onClick={handleSocialLogin} className="btn btn-circle btn-outline">
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
