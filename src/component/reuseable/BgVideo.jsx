"use client";
import React from "react";

function BgVideo() {
  return (
    <div className="fixed z-0 h-[120vh] w-full left-0 top-0 ">
      <video muted autoPlay loop className=" object-cover absolute w-full h-full">
        <source src={"/image/herosectionbackground.mp4"} type="video/mp4" />
      </video>
    </div>
  );
}

export default BgVideo;
