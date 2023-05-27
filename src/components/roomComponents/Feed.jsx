import React, { useEffect, useState } from "react";
import Navbar2 from "../Navbar2";
import Sidebar from "../Sidebar";
import RightBar from "../RightBar";
import { ChatContext } from "../../context/ChatContext";
import {
  doc,
  onSnapshot,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import PostCard from "./PostCard";
import addphoto from "../../assests/add-photo.png";
import { arrayUnion } from "firebase/firestore";
const Chat = () => {
  const [img, setImg] = useState(null);
  const [message, setMessage] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const getRooms = async () => {
      const unsub2 = onSnapshot(
        doc(db, "globalChat", "PUME8BrLg3P6YP1ngosz"),
        (doc) => {
          setMessage(doc.data().messages);
          console.log(doc.data().messages[0].text);
        }
      );
      return () => {
        unsub2();
      };
    };
    getRooms();
  }, ["PUME8BrLg3P6YP1ngosz"]);
  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, "avatar" + uuidv4());

      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "globalChat", "PUME8BrLg3P6YP1ngosz"), {
              messages: arrayUnion({
                id: uuidv4(),
                text,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "globalChat", "PUME8BrLg3P6YP1ngosz"), {
        messages: arrayUnion({
          id: uuidv4(),
          text,
          date: Timestamp.now(),
        }),
      });
    }

    setText("");
    setImg(null);
  };
  return (
    <div className="m-0 p-0 h-screen w-screen overflow-scroll">
      <Navbar2 />
      <div className="flex h-5/6 z-[1]">
        <Sidebar />
        <div className="flex-2 w-[70vw] h-full mt-[1rem]  mr-[1vw]">
          <div className="h-12 bg-white flex justify-between p-2 rounded-t-2xl bg-gray-100/50 backdrop-blur-sm ">
            <span className="m-auto font-bold text-xl">
              <h1>Feed</h1>
            </span>
          </div>
          <div className="h-[80vh] overflow-scroll overflow-x-hidden rounded-b-2xl bg-gray-100/50 backdrop-blur-sm z-[-1]">
            <div className="bg-gray-400/40 p-8 m-6 rounded-xl hover:bg-gray-400/60">
              <div className="text-center font-bold text-xl mb-8">
                Create a post
              </div>
              <form onSubmit={(event) => event.preventDefault()}>
                <div className="flex  gap-[15vw]">
                  <div className="w-[20rem]">
                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="file"
                      onChange={(e) => setImg(e.target.files[0])}
                    />
                    <label
                      htmlFor="file"
                      className="flex gap-[1rem] justify-center cursor-pointer font-bold hover:bg-cyan-200 rounded-xl p-4"
                    >
                      <span className="flex gap-2 ">
                        Add a picture
                        <img
                          src={addphoto}
                          className="w-[2rem] h-[2rem]"
                          alt=""
                        />
                      </span>
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="write a caption"
                    className="p-[1rem] rounded-xl w-[20rem]"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button
                    onClick={handleSend}
                    className="w-24 p-2 bg-violet-600 rounded-xl text-white"
                  >
                    POST
                  </button>
                </div>
              </form>
            </div>
            {message.map((m) => (
              <PostCard message={m} key={m.id} />
            ))}
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  );
};
export default Chat;
