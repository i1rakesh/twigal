import React from "react";
import Navbar2 from ".././Navbar2";
import Sidebar from ".././Sidebar";
import RightBar from ".././RightBar";
import addImage from "../../assests/add-photo.png"
import { db, storage } from "../../../src/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useState, useContext, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState("");
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  useEffect( () => {
    
    const getChats = async() => {
      await delay(1000);
      const unsub =  onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
        console.log(doc.data());
        setLoading(false);
        setData(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  if (loading) {
    return (
      <div className="w-[100%] h-[50%] flex justify-center mt-[30vh]">
        <HashLoader color="#00e0ff" speedMultiplier={3} />
      </div>
    );
  }
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const file = e.target[2].files[0];

    try {
      //Create user
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, "users", currentUser.uid), {
              uid: currentUser.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
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
      <div className="m-0 p-0 h-screen w-screen">
        <Navbar2 />
        <div className="w-screen flex h-5/6 z-[1] ">
          <Sidebar />
          <div className="h-[80vh] w-[70vw] rounded-2xl mt-[1rem] shadow-xl  overflow-x-hidden bg-gray-100/50 backdrop-blur-sm p-4 ">
            <h1 className="text-[2rem] text-center">Account Details</h1>
            <div className="text-2xl shadow-xl flex bg-gray-400/40 p-8 m-6 rounded-xl hover:bg-gray-400/60 justify-between">
              <div>
                <p>UserName: {data.displayName}</p>
                <p>Email: {data.email}</p>
              </div>
              <img
                className="rounded-full w-[8rem] h-[8rem]"
                src={data.photoURL}
                alt=""
              />
            </div>
            <form onSubmit={handleSubmit} className="form login ">
              <h1 className="text-[2rem] text-center">Update Profile Details</h1>
              <div className="justify-centre mb-4">
                <input
                  className=""
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </div>

              <div className="mb-4">
                <input type="email" name="email" placeholder="email" required />
              </div>
              <div className="mb-4 text-center justify-center flex align-middle p-0">
                <input
                  
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                />
                <label
                
                  htmlFor="file"
                  className=" max-w-[25vw] flex gap-[1rem] justify-center cursor-pointer font-bold hover:bg-cyan-200 rounded-2xl "
                >
                  <span>ADD A PROFILE PHOTO</span>
                  <img
                    className="w-[2rem] h-[2rem]"
                     src={addImage}
                    alt=""
                  />
                </label>
              </div>
              <div className=" text-center ">
                <button className="font-bold bg-blue-400/50 max-w-[10vw] rounded-2xl hover:w-[8vw]" disabled={loading}>
                  UPDATE
                </button>
                {loading &&
                  "Uploading and compressing the image please wait..."}
                {err && <span>Something went wrong</span>}
              </div>
            </form>
          </div>
          <RightBar />
        </div>
      </div>
    </>
  );
};
export default Register;
