import React from 'react'
import '../assests/index.css'
import Search from "../components/Search"
import Chats from '../components/Chats'
const Sidebar =  () =>{
    return (
      <div className=" bg-gray-100/50 backdrop-blur-sm w-23vw mx-2 mt-5rem h-99vh rounded-2xl">
        <Search />
        <Chats />
      </div>
    );
}

export default Sidebar