// import React from 'react'

import { Link } from "react-router-dom";

const Login = () => {

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };


  return (
      <>
          <div className="login-signup-form animated fadeInDown">
              <div className="form">
                  <h1 className="title">Login Form</h1>
                  <form action="" onSubmit={onSubmit}>
                      <input type="text" placeholder="Email" />
                      <input type="password" placeholder="Password" />
                      <button className="btn btn-block">Login</button>
                      <p className="message">
                          Not Registered?{" "}
                          <Link to="/signup"> Create an account</Link>
                      </p>
                  </form>
              </div>
          </div>
      </>
  );
}

export default Login
