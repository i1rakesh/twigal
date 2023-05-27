import React from "react";
import axios from "axios";

  const baseURL = "https://newsdata.io/api/1/news?apikey=pub_202515120a1c12e9d6904d1075877418c32c6&country=in&language=en&category=entertainment,politics,sports,technology";
  const NewsData = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setData(response.data.results);
    });
  }, []);
  
  if (!data) return null;

  return (
    
    <div className="flex flex-col gap-6 overflow-scroll">
    {
    data.map((value)=>{
    return(
      
      <div className=" flex w-[65vw] rounded-[1.5rem] mt-[1rem] bg-gray-50/50 shadow-lg p-4">
      <img className= " w-[20vw] h-[15vw]  rounded-xl"  src={value.image_url} alt="Failed to load image" />
      <div className="w-[40vw] p-[1rem]">
      <h1 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">{value.title}</h1>
      <p className="h-[20vh] mb-4 text-base text-neutral-600 overflow-hidden">{value.description}</p>
      <a class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-cyan-500 text-white " href={value.link} >Link</a>
      </div>
      </div>
    )
    })
    }
</div>
  
)};
export default NewsData;
