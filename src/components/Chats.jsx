import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) =>(
    dispatch({type:"CHANGE_USER", payload: u})
  )
  return (
    <div className="mt-2 h-4/5 w-96 overflow-y-scroll mr-1">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)} className="mt-4 p-2 flex space-x-3 cursor-pointer bg-white hover:bg-slate-200 rounded-2xl">
          <img
            className=" mt-1 object-cover rounded-full w-12 h-12"
            src={chat[1].userInfo.photoURL}
            alt=""
          />
          <div className="">
            <span className="text-lg font-semibold">{chat[1].userInfo.displayName}</span>
            <p className="m-0 text-md text-gray-500">{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Chats;
