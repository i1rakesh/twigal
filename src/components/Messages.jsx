import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from './Message'

const Messages = () =>{
    const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages)
    return(
        <div className='h-4/5 overflow-scroll overflow-x-hidden'>
           {messages.map((m)=>(
            <Message Message={m} key={m.id}/>
           ))} 
        </div>
    );
};
export default Messages 