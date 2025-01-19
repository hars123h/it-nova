"use client";
import React from "react";
import { MdOutlineHandshake } from "react-icons/md";
function HomeCard() {
  return (
    <div className=" relative  bg-white w-full md:w-[568px] px-[32px] py-[32px] rounded-[20px] shadow-md border border-gray ">
      <p className=" text-[14px] font-[700] text-black leading-[3px] ">
        PARTNERSHIP
      </p>
      <h2 className="text-[56px] font-[700] w-[384px] text-black leading-[60px] tracking-[-1px] mt-[30px] ">
        In Partnership with Google for Education
      </h2>
      <p className="partnership-card-para-grey"></p>
      <div className=" flex justify-start items-center w-full mt-[100px] ">
        <div className=" relative flex justify-start items-center w-[240px] border border-gray/30 h-[80px] rounded-lg ">
          <img
            alt=""
            src="/image/IT-removebg-preview.png"
            className=" w-full h-full"
          />
        </div>
      </div>
      <div className=" h-[70px] absolute top-[65%] bg-gray/10 rounded-tl-[15px] rounded-bl-[15px] w-[160px] right-0 "></div>
      <div className=" w-full flex justify-center items-center ">
        <div className=" relative flex justify-start items-center border border-gray/30 px-2 py-2 rounded-lg">
          <MdOutlineHandshake size={30} />
        </div>
      </div>
      <div className=" h-[70px] absolute top-[85%] bg-gray/10 rounded-tr-[15px] rounded-br-[15px] w-[140px] left-0 "></div>
      <div className=" flex mb-6 w-full justify-end items-center">
        <div className="  relative flex justify-start items-center w-[240px] border border-gray/30 h-[80px] rounded-lg ">
          <img alt="" src="/image/googleEducationWhite.png" />
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
