import Sidebar from "./Sidebar";
import RightBar from "./RightBar";
import "../assests/index.css";
import Navbar2 from "./Navbar2";
import NewsData from "./NewsData";
import { useNavigate } from "react-router";

const News = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
    };
  return (
    <>
      <div className="m-0 p-0 h-screen w-screen">
        <Navbar2 />
        <div className="w-screen flex h-5/6 z-[1] ">
          <Sidebar onClick={handleNavigate} />
          <NewsData/>
          <RightBar />
        </div>
      </div>
    </>
  );
};
export default News;
