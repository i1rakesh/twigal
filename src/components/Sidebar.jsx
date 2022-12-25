import React from 'react'
import '../assests/index.css'
import Search from "../components/Search"
import Chats from '../components/Chats'
const Sidebar =  () =>{
    return (
    // flex-1
        <div className='ml-2'>Slideabar
        <Search/>
        <Chats/>
        </div>
        
    )
}

export default Sidebar