import React from "react";
import "./bubble.css";
import "./login.css";
import Logos from "./logo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../src/firebase";

import { GoogleButton } from "react-google-button";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {  signInWithPopup } from "firebase/auth";
import { provider} from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import addImage from "../assests/add-photo.png"
const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) =>{ 
            try {
              //Update profile
               updateProfile(result.user, {
                displayName: result.user.displayName,
                photoURL: result.user.photoURL,
              });
            
          
               setDoc(doc(db, "users", result.user.uid), {
                uid: result.user.uid,
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
              });
            
              //create empty user chats on firestore
              setDoc(doc(db, "userChats", result.user.uid), {});
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
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            
            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
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
              <input
                required
                style={{ display: "none" }}
                type="file"
                id="file"
              />
              <label htmlFor="file" className="flex gap-[1rem] justify-center cursor-pointer font-bold hover:bg-cyan-200 rounded-xl ">
                <span>ADD A PROFILE PHOTO</span>
                <img className="w-[2rem] h-[2rem]" src={addImage} alt="" />
              </label>
            </div>
            <div className="form_field ">
              <button className="sign-in" disabled={loading}>
                Sign up
              </button>
              {loading && "Uploading and compressing the image please wait..."}
              {err && <span>Something went wrong</span>}
              <div className="google-auth" onClick={googleSignIn}>
                <GoogleButton />
              </div>
            </div>
          </form>

          <p className="text--center">
            Already have an account <br /> <Link to="/Login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
