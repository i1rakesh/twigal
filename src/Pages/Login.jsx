import React,{ useState} from "react";
import "./bubble.css";
import "./login.css";
import Logos from "./logo.png";
import { GoogleButton } from "react-google-button";
import {  Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth , provider} from "../firebase";
import { getAuth, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  

    
      const googleSignIn = () => {
        signInWithPopup(auth, provider)
          .then(() =>{ 
                try {
                  navigate("/");
                } 
              
                catch (err) {
                  console.log(err);
                  setErr(true);
                }
                // console.log(result)
                // console.log(result.user.displayName)
              });
            ;
          }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
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
            Login
            <br />
          </h1>
          <form onSubmit={handleSubmit} className="form login">
            <div className="form_field">
              <input type="email" placeholder="email" required />
            </div>

            <div className="form_field">
              <input
                type="password"
                placeholder="password"
                required
              />
            </div>

            <div className="form_field">
              <button className="sign-in">
                Sign in
              </button>
              {err && <span>Something went wrong</span>}
            </div>
            <div className="google-auth" onClick={googleSignIn}>
                <GoogleButton />
              </div>
          </form>

          <p className="text--center">
            Don't have an account <br /> <Link to="/Register">Sign up now</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;