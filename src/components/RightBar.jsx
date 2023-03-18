import React from 'react'
import newspaper from "../assests/newspaper.png"
import idea from "../assests/idea.png"
const RigntBar = () => {
    return(
        <div className='w-20 h-full rounded-2xl bg-white m-2 pl-2'>
            
            <img className='mt-80 p-2  hover:bg-blue-500 hover:rounded-full ' src={newspaper} alt="" />
            <img className='mt-8 p-2 rounded-full hover:bg-blue-500 ' src={idea} alt="" />
            </div>
        
    )
}
export default RigntBar