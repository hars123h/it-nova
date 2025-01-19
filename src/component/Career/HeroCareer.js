import Link from "next/link";
import React from "react";

const HeroCareer = () => {
  return (
    <>
      <div className="pt-[184px]  flex  items-center flex-col relative text-center">
        <img
        data-scroll  data-scroll-speed="4"
          src="/image/about-banner.png"
          className="absolute bottom-[113px] w-[807px] h-[476px]"
          style={{
            transform: "translateY(0px)",
          }}
        />

        <p className="text-center text-black text-sm font-semibold tracking-[3px]">
          CAREER
        </p>
        <h5 className="text-[75px] leading-[82px] w-[700px] mt-[50px]  font-bold text-black -tracking-[1px]">
          Let's make better <br /> together join us
        </h5>

        <p className="mt-[119px] text-[16px] leading-[19px] text-paraColor w-[560px]">
          The word perfection defines everything about It Nova. We tend to provide
          what's best available to our students and help them attain the
          knowledge they always wanted.
        </p>
        <Link
          href="/career"
          className="text-lg p-5 rounded-[130px] bg-black text-white mt-[39px]"
          style={{
            boxShadow: " 0px 4px 14px #00000040",
          }}
        >
          About Us
        </Link>
      </div>
    </>
  );
};

export default HeroCareer;
