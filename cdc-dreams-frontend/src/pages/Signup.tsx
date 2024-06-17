//  

import { Link } from "react-router-dom";

const Signup = () => {

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
  };

  return (
      <>
          <div className="login-signup-form animated fadeInDown">
              <div className="form">
                  <h1 className="title">Sign Up Form</h1>
                  <form action="" onSubmit={onSubmit}>
                      <input type="text" placeholder="Full Name" />
                      <input type="text" placeholder="Email" />
                      <input type="password" placeholder="Password" />
                      <input type="password" placeholder="Confirm Password" />
                      <button className="btn btn-block">Register</button>
                      <p className="message">
                          Already Registered?
                          <Link to="/login"> Login</Link>
                      </p>
                  </form>
              </div>
          </div>
      </>
  );
}

export default Signup
