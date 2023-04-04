import React from "react";
import { useContext, useState } from "react";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import search from '../assests/search.png'
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}
    setUser(null);
    setUsername("")
  };
  return (
    <div className=" rounded-2xl p border-2 border-black w-11/12 mx-auto mt-2">
      <div className="p-2 flex">
        <input
          placeholder="Search User"
          className="rounded-full w-full h-8 px-1.5  bg-transparent "
          type="text"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <img src={search} alt="" />
      </div>
      {err && <span> User not fund!</span>}
      {user && (
        <div
          className="p-2 flex space-x-3 cursor-pointer bg-white hover:bg-slate-200 rounded-2xl"
          onClick={handleSelect}
        >
          <img
            className="object-cover rounded-full w-10 h-10"
            src={user.photoURL}
            alt=""
          />
          <div className="">
            <span className="text-lg font-semibold">{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Search;
