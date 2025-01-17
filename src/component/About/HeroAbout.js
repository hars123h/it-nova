import React from "react";

const HeroAbout = () => {
  return (
    <>
      <div className="pt-[184px] pb-[146px] flex justify-center items-center relative">
        <div>
          <p className="text-center text-black text-sm font-semibold tracking-[3px]">
            ABOUT RINEX
          </p>
          <h5 className="text-[75px] leading-[82px] w-[1045px] mt-[50px]  font-bold text-black -tracking-[1px]">
            Where ideas are talked about and growth is focused upon
          </h5>
        </div>
        <img src="/image/about-banner.png" className="absolute top-[20px] h-[527px]" 
        style={{
            transform: "translateY(0px)"
        }}
        />
      </div>
    </>
  );
};

export default HeroAbout;
