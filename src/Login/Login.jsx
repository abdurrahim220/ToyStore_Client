import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../hooks/useTitle";

const Login = () => {
  const { login, signInWithG } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    useTitle("Login");

    const user = {
      email,
      password,
    };
    // console.log(user);

    login(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const handleGoogleLogIn = () => {
    signInWithG()
      .then((result) => {
        const login = result.user;
        console.log(login);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="w-full py-10  flex">
      <img
        src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt="background"
        className="object-cover object-center rounded-lg w-7/12"
      />
      <div className="bg-white flex flex-col justify-center items-center w-5/12">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  New To ToyStore
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="text-center">
            <button onClick={handleGoogleLogIn} className="btn btn-circle ">
              G
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
