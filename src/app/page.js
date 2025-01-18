
import Hero from "@/component/Home/Hero";
import HomeCard from "@/component/Home/HomeCard";
import LogoScroll from "@/component/reuseable/companyAnimation/LogoScroll";

export default function Home() {
  return (
    <div className=" relative min-h-[200vh] ">
      <Hero />
      <div className=" mt-[100px] max-w-[1200px] mx-auto ">
        <LogoScroll />
      </div>
      <div className=" px-[100px] flex items-center justify-between">
        <HomeCard/>
        <HomeCard/>
      </div>
    </div>
  );
}
