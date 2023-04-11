import React from "react";
import { useNavigate } from "react-router";
import newspaper from "../assests/newspaper.png";
import idea from "../assests/idea.png";
const RigntBar = () => {
  const navigate = useNavigate();

  const navigateNews = () => {
  navigate('/news');
  };
  const navigateMemes = () => {
    navigate('/memes');
    };
  return (
    <div className="h-full w-16 mx-2 mr-4  rounded-2xl bg-gray-50/50 backdrop-blur-sm">
      <div className="mt-40 flex flex-col justify-evenly gap-y-40 ">
        <button>
        <img
          activeclassname="active"
          className=" p-2 m-auto hover:bg-blue-500 hover:rounded-full "
          src={newspaper}
          alt=""
          onClick={navigateNews}
        />News
        </button>
        <button>
        <img
          className=" p-2 m-auto hover:rounded-full hover:bg-blue-500 "
          src={idea}
          alt=""
          onClick={navigateMemes}
        />Meme
        </button>
      </div>
    </div>
  );
};
export default RigntBar;
