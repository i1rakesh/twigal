import React from "react";
import newspaper from "../assests/newspaper.png";
import idea from "../assests/idea.png";
const RigntBar = () => {
  return (
    <div className="h-full w-16 mx-2 mr-4  rounded-2xl bg-gray-50/50 backdrop-blur-sm">
      <div className="mt-40 flex flex-col justify-evenly gap-y-80 ">
        <img
          className=" p-2 m-auto hover:bg-blue-500 hover:rounded-full "
          src={newspaper}
          alt=""
        />
        <img
          className=" p-2 m-auto hover:rounded-full hover:bg-blue-500 "
          src={idea}
          alt=""
        />
      </div>
    </div>
  );
};
export default RigntBar;
