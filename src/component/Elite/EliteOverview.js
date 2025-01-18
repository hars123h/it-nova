"use client"
import React, { useState } from "react";

const EliteOverview = () => {
    const [overViewActive , setOverviewActive] = useState(0);
  return (
    <>
      <div className="w-[1300px] p-[20px] my-0 mx-auto bg-[#f4f8fb] ">
        <h2 className="text-[28px] font-bold mb-[20px] text-left text-[#333] w-full">
          Overview
        </h2>
        <p>
          This Python Course Training will help you understand the high-level,
          general-purpose dynamic programming language of the decade. We have
          covered topics like machine learning, deep learning, Hadoop streaming,
          and MapReduce.
        </p>
        <div className="flex border-b border-[#ddd] mb-[20px] w-full">
            <button className={`${overViewActive  === 0 ? "text-primary border-b-[5px] border-primary": "text-[#333]"} py-[10px] px-5 bg-transparent cursor-pointer text-[16px] transition-all duration-300 ease-in-out `}>
            Why should I learn the Python programming language?
            </button>
        </div>
      </div>
    </>
  );
};

export default EliteOverview;
