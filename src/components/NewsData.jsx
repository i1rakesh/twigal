import React from "react";
import axios from "axios";

const baseURL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2a332fab89c94e6697bd25734b888763&q+india";
const NewsData = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.articles);
    });
  }, []);

  if (!data) return null;
  console.log(data);
  return (
    
    <div className="flex flex-col gap-6 overflow-scroll">
      {
      data.map((value)=>{
      return(
        
        <div className=" flex w-[65vw] rounded-[1.5rem] bg-white shadow-lg p-4">
        <img className= " w-[20vw] rounded-xl"  src={value.urlToImage} alt="Failed to load image" />
        <div className="w-[40vw] p-[1rem]">
        <h1 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">{value.title}</h1>
        <p className="mb-4 text-base text-neutral-600">{value.description}</p>
        <a class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-cyan-500 " href={value.url} >Link</a>
        </div>
        </div>
      )
      })
      }
  </div>
    
  )};
export default NewsData;
