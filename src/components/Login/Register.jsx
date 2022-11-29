import React from "react";
import "./bubble.css";
import "./login.css";
import Logos from "./logo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { signInWithGoogle } from "../../context/AuthContext";
import { GoogleButton } from "react-google-button";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
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
          <form onSubmit={handleSubmit} className="form login">
            <div className="form_field">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </div>

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
                Sign up
              </button>
              <div className="google-auth" onClick={signInWithGoogle}>
              <GoogleButton />
            </div>
            
            </div>
          </form>
          
            

          <p className="text--center">
            Already have an account<a href="./login">Sign in now</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
