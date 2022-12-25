import React , { useContext, useState } from 'react'
import attach from '../assests/attach.png'
import image from '../assests/image.png'
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
    arrayUnion,
    doc,
    serverTimestamp,
    Timestamp,
    updateDoc,
  } from "firebase/firestore";
  import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
  import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const Input = () =>{
    const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
        await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
            }),
          });
        }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
    return(
        <div className='h-14 rounded-2xl m-2 p-2 bg-white flex justify-between'>
            <input className='w-full' type="text" name="message" placeholder='Enter your message ' onChange={(e)=>setText(e.target.value)} value={text}/>
            <div className=' flex align-middle gap-2'>
             <img className='h-8 cursor-pointer' src={attach} alt="" />
             <img className='h-8 cursor-pointer' src={attach} alt="" />
             <input type="file" style={{display:"none"}} id="file" onChange={(e)=>setImg(e.target.files[0])}/>
             <label htmlFor="file">
                <img className='h-8 cursor-pointer' src={image} alt="" />
             </label>
             <button onClick={handleSend} className=' px-2 bg-sky-500 rounded-2xl text-white'>SEND</button>
            </div>
        </div>
    )
}
export default Input