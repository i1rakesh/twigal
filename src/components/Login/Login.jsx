import React from "react";
import "./bubble.css";
import "./login.css";
import Logos from "./logo.png";
import { GoogleButton } from "react-google-button";

const Login = () => {
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
            Login
            <br />
          </h1>
          <form action="" method="POST" className="form login">
            <div className="form_field">
              <input type="email" name="email" placeholder="email" required />
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
                Sign in
              </button>
            </div>
            <div className="google-auth">
              <GoogleButton />
            </div>
          </form>

          <p className="text--center">
            Don't have an account <a href="./Register">Sign up now</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
