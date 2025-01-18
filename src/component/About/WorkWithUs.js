import Link from "next/link";
import React from "react";

const WorkWithUs = () => {
  return (
    <>
      <div className="px-[140px] mt-[174px]">
        <div className="w-full rounded-[20px] flex border border-[#D3D3D3] bg-white">
          <div className="p-[40px] w-fit">
            <p className="text-sm font-bold tracking-[3px]">WORK WITH US</p>
            <h5 className="text-[55px] font-bold w-[492] leading-[60px] mt-[50px]">
              Driven by Creative Minds
            </h5>
            <p className="text-[16px] w-[400px] text-paraColor mt-[50px]">
              Our commitment and love for service is known to all. Our Alumni
              and people working with us define us with the best compliments.
            </p>
          </div>
          <Link href="/career" className="hidden">
            View all job offers
          </Link>
          <div className="w-full relative flex overflow-hidden">
            <img
              src="/image/creative.png"
              className="w-[328px] h-[92px] absolute top-[10px] left-0"
            />
            <img
              src="/image/workSmart.png"
              className="w-[462px] h-[93px] absolute left-[200px] top-[76px] "
            />
            <img
              src="/image/culture.png"
              className="w-[295px] h-[106px] absolute left-0 top-[125px] "
            />
            <img
              src="/image/flower.svg"
              className="absolute left-[118px] top-[95px] "
            />
            <img
              src="/image/redMoon.svg"
              className="absolute left-[341px] top-[175px]"
            />

            <Link
              href="/career"
              className="text-lg p-5 rounded-[130px] bg-black text-white absolute bottom-[40px] right-[40px]"
              style={{
                boxShadow: " 0px 4px 14px #00000040",
              }}
            >
              View all job offers
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkWithUs;
