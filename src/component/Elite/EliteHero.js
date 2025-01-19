import React from "react";
import { FaUsers } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { FaCircleCheck } from "react-icons/fa6";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { VscMute } from "react-icons/vsc";

const EliteHero = () => {
  return (
    <>
      <main
        className="mt-[85px] mb-0 mx-auto w-[1300px] p-[20px]"
        style={{
          background: "url('/image/eliteBg.png')",
        }}
      >
        <div className="flex justify-between flex-wrap items-start">
          <div className="flex-1 mr-[20px] w-full">
            <h1 className="text-[32px] mb-[10px]">
              Data Structures and Algorithms Java
            </h1>
            <p className="mb-[10px] text-[16px] text-[#333] flex items-center gap-2">
              <FaUsers className="font-extrabold" />
              <span>214051+ Learners</span>
              <span className="flex items-center gap-1 text-[#f39c12]">
                <TiStarFullOutline />
                <p>4.8 Rating</p>
              </span>
            </p>
            <p className="text-[16px] text-[#333] mb-[10px]">
              <strong>
                Become a Java Certified Professional with our Java Course in
                just 6 months!
              </strong>
            </p>
            <ul className="mb-[20px]">
              <li className="mb-[10px] text-[16px] flex items-center gap-3">
                <FaCircleCheck className="text-[#3498db] " />
                <p>DSA in Java Course Led by Top Industry Experts</p>
              </li>
              <li className="mb-[10px] text-[16px] flex items-center gap-3">
                <FaCircleCheck className="text-[#3498db] " />
                <p>
                  {" "}
                  Learn Data Structures and Algorithms with our Online Java
                  Training
                </p>
              </li>
              <li className="mb-[10px] text-[16px] flex items-center gap-3">
                <FaCircleCheck className="text-[#3498db] " />
                <p>
                  Master DSA by working on Arrays, Linked Lists, Trees, Graphs,
                  Sorting, and Searching Algorithms
                </p>
              </li>
              <li className="mb-[10px] text-[16px] flex items-center gap-3">
                <FaCircleCheck className="text-[#3498db] " />
                <p>
                  Placement Assistance upon Online DSA in Java Course Completion
                </p>
              </li>
            </ul>
            <div className="flex mb-[2px]">
              <button
                className=" mr-[10px] text-white px-[20px] py-[10px] text-[16px] rounded-[200px] font-semibold"
                style={{
                  background:
                    " linear-gradient(90deg, rgba(0, 212, 255, 1) 54%, rgba(171, 250, 253, 1) 100%)",
                }}
              >
                <a href="" className="text-black flex items-center gap-2">
                  Enroll Now
                  <BsArrowRightCircleFill className="text-black text-xl" />
                </a>
              </button>

              <button className=" mr-[10px] text-white px-[20px] py-[10px] text-[16px] rounded-[200px] font-semibold bg-[#ecf0f1]">
                <a href="" className="text-[#333] flex items-center gap-2">
                  <FaDownload className="text-black text-xl" />
                  Download Brochure
                </a>
              </button>
            </div>

            <div className="mt-[30px] mb-[10px] text-[16px] flex items-center gap-1 text-[#333] ">
              <FaBuilding />
              <p>Looking for enterprise training for teams?</p>
              <p className="underline">Get a quote</p>
            </div>
          </div>
          <div className="w-[45%] relative p-[10px] rounded-[6px] bg-white  group ">
            <div className="rounded-[10px] p-[12px]">
              <video
                id="scrollVideo"
                src="/image/javaherosectionvideo.mp4"
                autoPlay
                muted
                loop
                className="w-full h-[400px] object-cover rounded-[20px]"
              ></video>

              <button className="rounded-[50%] text-white cursor-pointer hidden absolute h-[40px] w-[40px] top-[80%] left-[85%] padding-[10px] group-hover:block  bg-[rgba(255,255,255,0.7)] backdrop-blur-[1px]">
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#ecf0f1]  text-white">
                  <VscMute />
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EliteHero;
