import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { useState } from "react";
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
      className={`message owner flex gap-2 ${
        message.senderId === currentUser.uid && "owner"
      }`}
    >
      <div className="flex flex-col mx-4 ">
        <img
          className="w-8 h-8 object-cover rounded-full "
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span className="text-xs py-3"></span>
      </div>
      <div className="messagecontent flex flex-col  ">
        <p className="rounded-l-xl  rounded-br-xl p-4 my-4 bg-transparent text-black  max-w-[60vw] whitespace-pre-line break-words bg-white-100/50 backdrop-blur-sm">
          {message.text}
        </p>
        {message.img && (
          <img className="w-6/12 h-6/12" src={message.img} alt="" />
        )}
      </div>
    </div>
  );
};

export default Message;