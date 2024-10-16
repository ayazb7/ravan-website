import Image from "@/node_modules/next/image";
import React from "react";
import bg from "@/logos/homephoto.png";
import Video from "next-video";
import "@/app/globals.css";
import videoLoop from "@/videos/bg.mp4";
const Landing = () => {
  return (
    <div className="relative felx">
      <Video
        src={videoLoop}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="video"
      ></Video>
      <div className="absolute flex-col items-center justify-center z-10 space-x-8 top-1/4 left-64 w-fit">
        <h1 className="text-white font-black text-5xl text-center mb-28">
          Turning Property Dreams into Reality
        </h1>
        <button className="btn-custom hover:bg-black hover:rounded-lg">
          Commercial
        </button>
        <button className="btn-custom hover:bg-black hover:rounded-lg">
          Resdential
        </button>
        <button className="btn-custom hover:bg-black hover:rounded-lg">
          Off Plan
        </button>
      </div>
    </div>
  );
};

export default Landing;
