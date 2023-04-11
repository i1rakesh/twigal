import React from "react";
import axios from "axios";

  const baseURL = "https://api.imgflip.com/get_memes";
  const NewsData = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setData(response.data.data.memes);
    });
  }, []);

  if (!data) return null;

  return (
    
    <div className="flex flex-col gap-6 overflow-scroll">
    {
    data.map((value)=>{
    return(
      
      <div className=" flex w-[65vw] rounded-[1.5rem] bg-gray-50/50 shadow-lg p-4">
      <img className= " w-[30vw] h-[20vw]  rounded-xl"  src={value.url} alt="Failed to load image" />
      <div className="w-[40vw] p-[1rem]">
      <h1 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">{value.name}</h1>
      </div>
      </div>
    )
    })
    }
</div>
  
)};
export default NewsData;
