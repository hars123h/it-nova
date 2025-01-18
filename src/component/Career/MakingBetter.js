import Link from "next/link";
import React from "react";

const MakingBetter = () => {
  return (
    <>
      <div className="px-[140px] mt-[174px] ">
        <div className="w-full rounded-[20px] border border-[#D3D3D3] bg-white relative">
          <p className="text-sm font-bold tracking-[3px] mt-[40px] ml-[40px]">
            MAKING BETTER
          </p>

          <div className="flex justify-between mt-[50px] px-[40px]">
            <h5 className="text-[55px] font-[500] leading-[60px] w-[260px] -tracking-[1px]">
              We are on a Mission
            </h5>
            <p className="text-[16px] w-[400px] mr-[210px] text-paraColor">
              We're on a mission to spread around and help every possible
              individual who needs us. Our vision is to diversify education
              standards and make the youth Job Ready. We know there would come
              challenges but we love them all, they help us improve and grow
              even more.
            </p>
          </div>
          <img src="/image/horizontal_divider.svg" className="mt-[56px]" />

          <div className="flex p-[40px] gap-[96px]">
            <div className="w-[153px]">
              <p className="text-sm font-semibold tracking-[3px] text-paraColor">
                AVAILABLE JOB OPPORTUNITY
              </p>
              <h5 className="text-[55px] font-semibold mt-[30px]">40+</h5>
            </div>

            <div className="w-[153px]">
              <p className="text-sm font-semibold tracking-[3px] text-paraColor">
                RINEX IS IN TWO COUNTRIES
              </p>
              <h5 className="text-[55px] font-semibold mt-[30px]">
                100+
                <sub
                  style={{
                    verticalAlign: "sub",
                    fontSize: "20px",
                    fontWeight: 500,
                  }}
                >
                  Employees
                </sub>
              </h5>
            </div>
          </div>

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
    </>
  );
};

export default MakingBetter;
