import Sidebar from "./Sidebar";
import RightBar from "./RightBar";
import "../assests/index.css";
import Navbar2 from "./Navbar2";
import NewsData from "./NewsData";
const News = () => {
  return (
    <>
      <div className="m-0 p-0 h-screen w-screen">
        <Navbar2 />
        <div className="w-screen flex h-5/6 z-[1] ">
          <Sidebar />
          <NewsData/>
          <RightBar />
        </div>
      </div>
    </>
  );
};
export default News;
