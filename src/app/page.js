"use client";
import Hero from "@/component/Home/Hero";
import HomeCard from "@/component/Home/HomeCard";
import LogoScroll from "@/component/reuseable/companyAnimation/LogoScroll";
import { BsLightningCharge, BsThreeDots } from "react-icons/bs";
import { FaArrowRight, FaFireAlt } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { GiMechanicalArm } from "react-icons/gi";
import SmallCard from "@/component/Home/SmallCard";
import SmallCard2 from "@/component/Home/SmallCard2";
import Experts from "@/component/Home/Experts";

export default function Home() {
  const filters = [
    {
      title: "Trending",
      icon: <FaFireAlt />,
    },
    {
      title: "All",
      icon: "",
    },
    {
      title: "Computer Science",
      icon: <MdOutlineComputer />,
    },
    {
      title: "Electrical",
      icon: <BsLightningCharge />,
    },
    {
      title: "Mechanical",
      icon: <GiMechanicalArm />,
    },
    {
      title: "Other",
      icon: <BsThreeDots />,
    },
  ];
  return (
    <div className=" relative min-h-[200vh] ">
      <Hero />
      <div className=" mt-[110px] max-w-[1400px] mx-auto ">
        <LogoScroll />
      </div>
      <div className=" px-4 md:px-[100px] gap-[50px]  min-[1024px]:flex-row flex-col  mt-[120px] flex items-center justify-between">
        <HomeCard />
        <HomeCard />
      </div>
      <div className=" md:px-[100px] px-4 mx-auto mt-[120px]">
        <div className="online-course-head-container">
          <p className="text-[14px] font-[700] text-black tracking-[3px] ">
            COURSE
          </p>
          <h3 className=" text-[55px] w-[470px] tracking-[-2px] mt-[50px] font-[700] leading-[60px] ">
            Our Online Training Programs
          </h3>
          <p className=" md:text-[16px] text-[12px] md:mt-[47px] mt-[37px] font-[400] ">
            All courses has certified Certificate partners.
          </p>
        </div>
        <div className=" flex items-center gap-4 mt-[80px]">
          {filters?.map((item, index) => (
            <button
              key={`filter-${index}`}
              id="btnTrending"
              className={`bg-white/70 flex items-center gap-1 px-[20px] md:text-[20px] py-[15px] text-[16px] shadow-lg rounded-[130px]`}
            >
              {" "}
              {item.icon} <span>{item.title}</span>{" "}
            </button>
          ))}
        </div>
        <p className=" md:text-[14px] font-[700] tracking-[3px] md:mt-[64px] mt-[51px]  ">
          5 TRENDING COURSES FOUND
        </p>
        <div className=" mt-[100px]  flex flex-wrap justify-start gap-8 ">
          {[0, 1, 2, 3, 4].map((item, index) => (
            <SmallCard index={index} key={`smallCard-${index}`} />
          ))}
        </div>
      </div>
      <div className="  px-[100px] mt-[100px] overflow-hidden  flex flex-wrap justify-start gap-8 ">
        <Experts />
      </div>
      <div className=" md:px-[100px] px-4 mx-auto mt-[120px]">
        <div className="online-course-head-container">
          <p className="text-[14px] font-[700] text-black tracking-[3px] ">
            COURSE
          </p>
          <h3 className=" text-[55px] w-[470px] tracking-[-2px] mt-[50px] font-[700] leading-[60px] ">
            Explore our Free programs
          </h3>
          <div className=" flex items-center justify-between">
            <p className=" md:text-[16px] text-[12px] md:mt-[47px] mt-[37px] font-[400] ">
              All courses has certified Certificate partners.
            </p>
            <a
              id="btnViewMore"
              className="  px-4 py-2 w-[140px] flex items-center gap-1 cursor-pointer bg-white rounded-[20px] shadow-md  "
            >
              View more <FaArrowRight className=" rotate-[-45deg] " />
            </a>
          </div>
        </div>
    
      </div>
      <div className=" mt-[100px] px-[100px] mb-[100px]  flex flex-wrap justify-start gap-8 ">
          {[0, 1, 2].map((item, index) => (
            <SmallCard2 index={index} key={`smallCard-${index}`} />
          ))}
        </div>
    </div>
  );
}
