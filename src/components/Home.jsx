import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Navbar from "./Navbar";
import RightBar from "./RightBar";
import "../assests/index.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="m-0 p-0 h-screen w-screen flex ">
        <Sidebar />
        <Chat />
        <RightBar />
      </div>
    </>
  );
};
export default Home;
