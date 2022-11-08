import React from "react";
import "./bubble.css";
import "./login.css";
import Logos from "./logo.png";

const Register = () => {
  return (
    <>
      <section className="sticky">
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </section>

      <div className="overlay">
        <div className="overlay__inner">
          <h1 className="overlay__title">
            <img src={Logos} alt="logo" className="logo"></img>
            <br />
            Sign Up
            <br />
          </h1>
          <form action="" method="POST" class="form login">
            <div className="form_field">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </div>

            <div className="form_field">
              <input
                type="email"
                name="email"
                placeholder="email"
                required
              />
            </div>

            <div className="form_field">
              <input
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </div>

            <div className="form_field">
              <button className="sign-in" type="submit">
                Sign up
              </button>
            </div>
          </form>

          <p className="text--center">
            Already have an account<a href="abc">Sign in now</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
