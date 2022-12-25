import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export const auth = getAuth();

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () =>{
  signInWithPopup(auth, provider).then((result)=>{
  console.log(result);
  })
  .catch((error) =>{
    console.log(error);
  });
};



