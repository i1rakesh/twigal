import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import RightBar from "./RightBar";
import "../assests/index.css";
import Navbar2 from "./Navbar2";
const Home = () => {
  return (
    <>
      <div className="m-0 p-0 h-screen w-screen overflow-scroll">
        <Navbar2 />
        <div className="flex h-5/6 z-[1]">
          <Sidebar />
          <Chat />
          <RightBar />
        </div>
      </div>
    </>
  );
};
export default Home;
