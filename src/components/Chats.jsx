import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import { useNavigate } from "react-router";
const Chats = () => {
  const navigate = useNavigate();
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
  const handleNavigate = () => {
    navigate('/');
    };
  return (
    <div onClick={handleNavigate} className="mt-2 h-4/5 mx-4 overflow-y-scroll w-[25vw]">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
            className="mt-4 p-2 flex space-x-3 cursor-pointer bg-gray-50/50 hover:bg-gray-100 rounded-2xl"
          >
            <img
              className=" mt-1 object-cover rounded-full w-12 h-12"
              src={chat[1].userInfo.photoURL}
              alt=""
            />
            <div className="">
              <span className="text-lg font-semibold">
                {chat[1].userInfo.displayName}
              </span>
              <p className="m-0 text-md text-gray-500 overflow-y-hidden h-5 w-[15vw]">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Chats;
