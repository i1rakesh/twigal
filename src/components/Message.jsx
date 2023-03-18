import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message owner flex gap-10 ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="flex flex-col text-gray-400 mx-4">
        <img
        className="w-8 h-8 object-cover rounded-full"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span >just now</span>
      </div>
      <div className="messagecontent max-w-42 flex flex-col gap-6 mb-10">
        <p className="bg-white p-4 rounded-2xl mt-6 max-w-max">{message.text}</p>
        {message.img && <img className="w-6/12 h-6/12 rounded-3xl" src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;