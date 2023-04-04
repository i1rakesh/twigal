import React, { useReducer } from "react";
import "../assests/index.css";
import video from "../assests/camera.png";
import call from "../assests/call.png";
import more from "../assests/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="flex-2 w-[70vw] h-full  mr-[1vw] ">
      <div className="h-12 bg-white flex justify-between p-2 rounded-t-2xl bg-gray-100/50 backdrop-blur-sm ">
        <span className="m-auto font-bold">{data.user?.displayName}</span>
        <div className="flex mt-2 gap-4">
          <img className="h-6 " src={video} alt="" />
          <img className="h-6 " src={call} alt="" />
          <img className="h-6 " src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
export default Chat;
