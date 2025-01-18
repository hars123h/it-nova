"use client";
import Hero from "@/component/Home/Hero";
import BgVideo from "@/component/reuseable/BgVideo";
import LogoScroll from "@/component/reuseable/companyAnimation/LogoScroll";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  return (
    <div className=" relative min-h-[200vh] ">
      <Hero />
      <div className=" mt-[100px] max-w-[1200px] mx-auto ">
      <LogoScroll />
      </div>
    </div>
  );
}
