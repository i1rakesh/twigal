import React, { useReducer } from 'react'
import '../assests/index.css'
import video from "../assests/camera.png"
import call from "../assests/call.png"
import more from "../assests/more.png"
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
const Chat = () =>{
    const {data} = useContext(ChatContext)
    return(
        <div className='flex-2 w-full h-full  ml-2 rounded-2xl style="backdrop-filter: blur(20px)  '>
           <div className='h-12 bg-white flex justify-between p-2 rounded-2xl'>
            <span className='mt-2 font-bold'>{data.user?.displayName}</span>
            <div className='flex gap-4'>
                <img className='h-6 mt-2'src={video} alt="" />
                <img className='h-6 mt-2'src={call} alt="" />
                <img className='h-6 mt-2'src={more} alt="" />
            </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}
export default Chat