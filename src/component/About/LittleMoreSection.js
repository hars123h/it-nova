import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const LittleMoreSection = () => {
  return (
    <>
      <div className="px-[140px] mt-[115px]">
        <div className="w-full border border-[#D3D3D3] bg-white rounded-[20px]">
          <p className="text-sm font-bold pt-[40px] tracking-[3px] px-[40px]">
            LITTLE MORE
          </p>
          <div className="mt-[50px] flex justify-between px-[40px]">
            <h4 className="w-[450px] leading-[60px] font-bold text-[55px]">
              Some Words about Rinex
            </h4>

            <p className="w-[400px] text-[16px] text-paraColor">
              Rinex is an online Education platform, providing students with
              pristine study opportunities and a chance to learn and grow.
              Started with a vision to solve problems of students and make them
              job ready or exceptional in their fields. With our extensive
              programs and courses we try to include excellence in our students.
              We get students the best study materials and the best teachers, so
              that you grow three fold.
            </p>
          </div>
          <img src="/image/horizontal_divider.svg" className="mt-[59px]" />

          <div className="flex justify-between px-[50px] pt-[40px]">
            <h5 className="text-[25px] font-bold w-[155px] relative ">
              <span className="flex items-center gap-1">
              Find us on <FaHeart className="text-red-500" /> 
              </span>
              
              social media
            </h5>

            <div>

                <div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LittleMoreSection;
