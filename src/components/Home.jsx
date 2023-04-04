import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import RightBar from "./RightBar";
import "../assests/index.css";
import Navbar2 from "./Navbar2";
const Home = () => {
  return (
    <>
      <div className="m-0 p-0 h-screen  w-screen overflow-hidden">
        <Navbar2 />
        <div className="flex h-4/5">
          <Sidebar />
          <RightBar />
          <Chat />
        </div>
      </div>
    </>
  );
};
export default Home;
