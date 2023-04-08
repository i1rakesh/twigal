import React from 'react'
import '../assests/index.css'
import Search from "../components/Search"
import Chats from '../components/Chats'
const Sidebar =  () =>{
    return (
      <div className="bg-gray-50/50 backdrop-blur-sm w-[28vw] mx-2 h-full rounded-2xl mt-4">
        <Search />
        <Chats />
      </div>
    );
}

export default Sidebar