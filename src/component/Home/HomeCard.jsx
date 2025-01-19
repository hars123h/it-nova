"use client"
import React from "react";

function HomeCard() {
  return (
    
      <div className="  bg-white w-full md:w-[568px] px-[32px] py-[32px] rounded-[20px] shadow-md border border-gray " >
        <p className=" text-[14px] font-[700] text-black leading-[3px] ">PARTNERSHIP</p>
        <h2 className="text-[56px] font-[700] w-[364px] text-black leading-[60px] tracking-[-1px] mt-[30px] ">
          In Partnership with Google for Education
        </h2>
        <p className="partnership-card-para-grey"></p>
        <div
          className="partnership-card-rinex-tag aos-init aos-animate"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <img alt="" src="/image/rinex_card_logo.svg" />
        </div>
        <div className="partnership-card-handshake-tag">
          <img alt="" src="/image/handshake_logo.svg" />
        </div>
        <div
          className=""
          data-aos-duration="1000"
          data-aos="fade-left"
        >
          <img alt=""  src="/image/googleEducationWhite.png" />
        </div>
      </div>
    
  );
}

export default HomeCard;
