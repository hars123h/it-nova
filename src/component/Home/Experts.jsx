import React from "react";

const CareerCard = () => {
  return (
    <>
      <div className=" mt-[20px] flex justify-between relative overflow-hidden">
        <div className="border flex border-[#D3D3D3] justify-between md:gap-[100px] rounded-[20px] w-full py-10 bg-white relative overflow-hidden">
          <div className="  w-[240px] rounded-bl-[20px] h-[85px] absolute right-[-10px] top-0 bg-[#D3D3D3]/[0.2] z-10 border border-gray/10   "></div>
          <div className="  w-[100px] rounded-[20px] h-[85px] absolute right-[-30px] top-[50%] bg-[#D3D3D3]/[0.2] z-10 border border-gray/10   "></div>
          <div className="  w-[350px] rounded-[20px] h-[85px] absolute right-[-5px] bottom-[-20px] bg-[#D3D3D3]/[0.2] z-10 border border-gray/10   "></div>
          <div className=" w-[50%] px-[50px] ">
            <p className="text-sm font-semibold tracking-[3px]">EXPERTS</p>
            <h5 className="text-[35px] font-bold leading-[38px] mt-[30px]">
              Industry Professionals From
            </h5>

            <p className="text-[15px] mt-[30px]  text-paraColor ">
              Get better knowledge from our best industry experts from the best
              of the companies.
            </p>
          </div>

          <div className=" w-[70%]   ">
            <div className="flex justify-end mt-[80px]  pr-12 gap-[10px] mb-10 ">
              <img
                src="/image/company/dubai.svg"
                className="min-w-[242px] h-[85px] "
                alt=""
              />
              <img
                src="/image/company/morgan.svg"
                className="min-w-[242px] h-[85px]"
                alt=""
              />
            </div>
            <div className="flex  justify-end pr-24  gap-[10px] mb-10 ">
              <img
                src="/image/company/microsoft.svg"
                className="min-w-[242px] h-[85px] "
                alt=""
              />
              <img
                src="/image/company/mistral.svg"
                className="min-w-[242px] h-[85px]"
                alt=""
              />
            </div>
            <div className="flex justify-end mr-[-20px] gap-[10px] mb-[67px] ">
              <img
                src="/image/company/bosch.svg"
                className="min-w-[242px] h-[85px] "
                alt=""
              />
              <img
                src="/image/company/state.svg"
                className="min-w-[242px] h-[85px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerCard;
