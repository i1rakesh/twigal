const axios = require('axios')

const baseURL= "https://jsonplaceholder.typicode.com/users"

 axios.get(baseURL)
 .then((result)=>{
    console.log(result.data);
 });

 {rooms.map(room => (
   <div
   key={room.id} id={room.id}
   // onClick={() => handleSelect(chat[1].userInfo)}
   className="mt-4 p-2 flex space-x-3 cursor-pointer bg-gray-50/50 hover:bg-gray-100 rounded-2xl"
 >
   {/* <img
     className=" mt-1 object-cover rounded-full w-12 h-12"
     src={chat[1].userInfo.photoURL}
     alt=""
   /> */}
   <div className="">
     <span className="text-lg font-semibold">
       {room.data.name}
     </span>
     {/* <p className="m-0 text-md text-gray-500 overflow-y-hidden h-5 w-[15vw]">
       {chat[1].lastMessage?.text}
     </p> */}
   </div>
 </div>
 ))}


  //   const getRooms = () => {
  //     const unsubs = onSnapshot(doc(db, "rooms", doc.id), (doc) => {
  //       // setRooms(doc.data());
  //       console.log(doc.data())
  //     });
  //     return () => {
  //       unsubs();
  //     };
  //   };
  //  getRooms();

  setRooms(doc(db, "cities", "new-city-id"));
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc)=>({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    useEffect(() => {
      // Fetch groups from Firestore when the component mounts
      const unsubscribe = onSnapshot(doc(db, "rooms", ), (doc) => { 
           
          console.log(doc.data())
          setGroups(
          // doc.map((doc) =>({
          //   id:doc.id,
          //   data: doc.data(),
          // }))
      )
          console.log(group)
        });
      // Unsubscribe from updates when the component unmounts
      return () => unsubscribe();
     
    }, []);



    const handleSubmit = async (e) => {
      e.preventDefault();
      const displayName = e.target[0].value;
      
      
      try {
        await setDoc(doc(db, "room", currentUser.uid), {
          id: currentUser.uid,
          data: displayName,
        });
      } catch (err) {
        console.log(err);
        setErr(true);
      }
    };