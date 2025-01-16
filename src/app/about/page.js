import LittleMoreSection from "@/component/About/LittleMoreSection";
import LogoScroll from "@/component/reuseable/companyAnimation/LogoScroll";
import Hero from "@/component/reuseable/Hero";
import React from "react";

const About = () => {
  return (
    <>
      <Hero />
      <div className="px-[140px] overflow-hidden">
        <LogoScroll />
        <LittleMoreSection />
      </div>
    </>
  );
};

export default About;
