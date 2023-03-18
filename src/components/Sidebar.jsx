import React from 'react'
import '../assests/index.css'
import Search from "../components/Search"
import Chats from '../components/Chats'
const Sidebar =  () =>{
    return (
        <div className='rounded-xl bg-opacity-30 bg-gray-600 bg-flex-1 ml-2 mt-4 h-full'>
        <Search/>
        <Chats/>
        </div>
        
    )
}

export default Sidebar