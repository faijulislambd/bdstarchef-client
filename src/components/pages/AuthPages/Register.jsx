import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Providers/AuthProvider";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser, setUserNameImage, signUpWithGithub, signUpWithGoogle } =
    useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageURL = form.image.value;
    // Start and end metacharacters
    const emptyFieldRegEx = /^\s*$/g;
    const passLengthRegEx = /[a-zA-Z0-9]{8,}$/;

    if (emptyFieldRegEx.test(name)) {
      toast.error("Name Felid Cannot Be Empty");
      return;
    }
    if (emptyFieldRegEx.test(email)) {
      toast.error("Email Felid Cannot Be Empty");
      return;
    }
    if (emptyFieldRegEx.test(password)) {
      toast.error("Password Felid Cannot Be Empty");
      return;
    }
    if (emptyFieldRegEx.test(imageURL)) {
      toast.error("Image URL Felid Cannot Be Empty");
      return;
    }
    if (password.length < 6) {
      toast.error("Password Must Be Minimum 6 Characters Long");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUserNameImage(name, imageURL)
          .then(console.log("Display Name & Image Set"))
          .catch((error) => console.error(error));
        toast.success(
          `Congratulation ${loggedUser.displayName}! You Have Successfully Registered `
        );
        form.reset();
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Register now!</h1>
        </div>
        <div className="card w-1/3 shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                name="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="px-8 pb-5">
            Already A User?{" "}
            <Link to="/login" className="btn btn-link p-0 h-0">
              Login Now!
            </Link>
          </div>
          <div className="divider">OR</div>
          <div className="flex flex-col gap-5 py-10 px-8">
            <button
              className="btn bg-red-400 hover:bg-red-600 transition text-white border-0 w-100 text-xl"
              onClick={() => signUpWithGoogle(navigate, from)}
            >
              <AiFillGoogleCircle className="me-2" /> Google
            </button>
            <button
              className="btn bg-black text-white border-0 w-100 text-xl"
              onClick={() => signUpWithGithub(navigate, from)}
            >
              <AiFillGithub className="me-2" /> Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
