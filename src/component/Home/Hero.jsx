import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className=" bg-transparent flex justify-between items-center w-full  pl-[100px]">
      <div className=" z-10  mt-[142px] ">
        <p className=" text-[14px]  font-[700] tracking-[4px] text-black ">
          BECOME A PART OF SKILL HUB
        </p>
        <h1 className=" text-[75px] font-[800] leading-[82px] tracking-[-3px] mt-[50px] text-black w-[710px] ">
          Join the student network of skill India
        </h1>
        <div className=" flex  items-center mt-[58px] w-fit ">
          <Link
            href="/onlineCourse"
            className=" bg-gradient-to-r from-primary text-white font-[600] to-secondary w-[200px] rounded-[132px] flex items-center justify-center gap-4 py-1  "
            //   style="text-decoration: none;"
          >
            Enroll Now
            <img
              className=" animate-arrowAnime "
              src="/image/Homepage/enroll_icon.svg"
              alt=""
            />
          </Link>
          <p className=" tetx-[14px] font-[500] text-gray ml-[31px] ">
            Enrolled by <span className=" text-black ">2L+ Students</span>
          </p>
        </div>
      </div>
      <div className=" relative z-10 ">
        <img
          loading="lazy"
          className="max-w-[647px] h-[553px] "
          src="/image/Homepage/hero_absolute_image.png"
          alt=""
        />
        <img
          loading="lazy"
          className=" absolute h-[445px] w-[448px] left-[-20px] bottom-0 "
          src="/image/Homepage/natasha_image.png"
          alt=""
        />
        <img
          data-scroll
          data-scroll-speed="4"
          loading="lazy"
          className=" absolute left-[20px] bottom-[35px] w-[500px] h-[370px] z-10  "
          src="/image/Homepage/hero_image2.png"
          alt=""
          // style="transform: translateY(0px);"
        />
        <img
          data-scroll
          data-scroll-speed="4"
          loading="lazy"
          className=" absolute z-10 left-[-49px] top-[387px]"
          src="/image/Homepage/enroll_chip.svg"
          alt=""
        />
        <img
          data-scroll
          data-scroll-speed="4"
          loading="lazy"
          className=" absolute z-10 right-[30px] top-[200px]"
          src="/image/Homepage/google_certificate.svg"
          alt=""
        />
        <img
          data-scroll
          data-scroll-speed="4"
          loading="lazy"
          className=" absolute z-10 bottom-[-44px] left-[175px]"
          src="/image/Homepage/google_review_chip.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
