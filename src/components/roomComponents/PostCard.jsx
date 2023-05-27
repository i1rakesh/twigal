import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

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
      
      <div className="bg-gray-400/50 p-2 rounded-2xl flex flex-col  ">
      {message.img && (
          <img className="w-[50vw] h-6/12 rounded-3xl" src={message.img} alt="" />
        )}
        <div className="flex justify-between">
        <p className="rounded-xl bg-slate-50/80  min-w-[30vw]  p-4  rounded-br-xl  my-4 text-black  max-w-[60vw] ">
          {message.text}
          
        </p>
        <p className="text-gray-600">{new Date(message.date?.toDate()).toUTCString()}</p>
        </div>
        {/* <p>{new Date(message.date?.toDate()).toUTCString()}</p> */}
        
        
      </div>
    </div>
  );
};

export default Message;