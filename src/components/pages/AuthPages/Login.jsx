import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Providers/AuthProvider";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { toast } from "react-hot-toast";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signInUser, signUpWithGithub, signUpWithGoogle } =
    useContext(UserContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage(null);
    setSuccessMessage(null);
    signInUser(email, password)
      .then((userCredential) => {
        setSuccessMessage(`Welcome Back ${userCredential.user.displayName}`);
        toast.success(successMessage);
        navigate(from);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error(errorMessage);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogIn}>
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
              <label className="label">
                <Link to="" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="px-8 pb-5">
            New User?{" "}
            <Link to="/register" className="btn btn-link p-0 h-0">
              Register Now!
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

export default Login;
