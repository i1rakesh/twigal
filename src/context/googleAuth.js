import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {  useNavigate } from "react-router-dom";
export const auth = getAuth();

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () =>{
  
  signInWithPopup(auth, provider).then((result)=>{
  const navigate = useNavigate();
  console.log(result);
  navigate("/");
  })
  .catch((error) =>{
    console.log(error);
  });
};



