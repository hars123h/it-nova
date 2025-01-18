import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const JonRoleCard = ({ para1, heading1, location, locationName }) => {
  return (
    <>
      <Link
        href="/job/Inside-sales-strategist"
        className="w-[304px] border border-[#D3D3D3] p-[30px] rounded-[20px] bg-white "
      >
        <p className="text-sm font-bold ">{para1}</p>
        <h5 className="text-[35px] font-[500] leading-[38px] mt-[36px]">
          {heading1}
        </h5>
        <p className="text-sm font-semibold mt-[40px] text-paraColor">
          {location}
        </p>
        <h5 className="text-[16px] font-[500] mt-[14px]">{locationName}</h5>
        <img src="/image/hor_devider.svg" className="mt-[30px] w-full" />
        <p className="text-[20px] font-semibold mt-[32px] flex items-center gap-2">
          Apply <GoArrowUpRight />
        </p>
      </Link>
    </>
  );
};

export default JonRoleCard;
