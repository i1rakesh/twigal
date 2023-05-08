import { useRef, useState } from "react";
import { tracks } from "../assests/data/tracks";
import Sidebar from "./Sidebar";
import RightBar from "./RightBar";
import Navbar2 from "./Navbar2";
// import components
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import "../assests/styles/index.css";
import "../assests/styles/customize-progress-bar.css";
const AudioPlayer = () => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <>
      <div className="m-0 p-0 h-screen w-screen">
        <Navbar2 />
        <div className="w-screen flex h-5/6 z-[1] ">
          <Sidebar />
          <div className="audio-player overflow-y-scroll">
            <div className="inner">
              <DisplayTrack
                {...{
                  currentTrack,
                  audioRef,
                  setDuration,
                  progressBarRef,
                  handleNext,
                }}
              />
              <Controls
                {...{
                  audioRef,
                  progressBarRef,
                  duration,
                  setTimeProgress,
                  tracks,
                  trackIndex,
                  setTrackIndex,
                  setCurrentTrack,
                  handleNext,
                }}
              />
              <ProgressBar
                {...{ progressBarRef, audioRef, timeProgress, duration }}
              />
            </div>
            <div className="m-8">
              <h1 className="text-center font-bold">Track List</h1>
              <ul>
                {tracks.map((track, index) => (
                  
                  <li className="mt-8 hover:bg-cyan-100 p-2 rounded-xl" key={index}>
                    <div className="flex justify-between">
                    <img className="w-[10vw] h-[10vw] rounded-lg" src={track.thumbnail} alt={track.title} />
                    <p>{track.title}</p> 
                    <p>Author: {track.author}</p>
                    </div>
                  </li>
                  
                ))}
              </ul>
            </div>
          </div>
          <RightBar />
        </div>
      </div>
    </>
  );
};
export default AudioPlayer;
