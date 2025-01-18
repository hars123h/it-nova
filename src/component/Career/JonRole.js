import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import JonRoleCard from "./JonRoleCard";

const JonRole = () => {
  return (
    <>
      <div className="px-[140px] mt-[131px]">
        <p className="text-sm font-bold tracking-[3px]">JOB ROLES</p>
        <h5 className="text-[55px] font-bold w-[295px] mt-[50px] leading-[60px] -tracking-[1px]">
          Latest jobs for you
        </h5>

        <div className="mt-[72px] flex gap-[24px] flex-wrap">
          <JonRoleCard
          para1="ROLE1"
          heading1="Inside sales Strategist"
          location="LOCATION"
          locationName="Bengaluru · Mangaluru"
          />
          <JonRoleCard
           para1="ROLE2"
           heading1="Talent Acquisition"
           location="LOCATION"
           locationName="Bengaluru · Mangaluru"
          />
          <JonRoleCard
           para1="ROLE3"
           heading1="Corporate Relations"
           location="LOCATION"
           locationName="Bengaluru · Mangaluru"
          />
          <JonRoleCard
           para1="ROLE4"
           heading1="Operation Specialist"
           location="LOCATION"
           locationName="Bengaluru · Mangaluru"
          />
          <JonRoleCard
           para1="LET US KNOW"
           heading1="Didn't find your role?"
           location="LOCATION"
           locationName="Bengaluru · Mangaluru"
          />

        </div>
      </div>
    </>
  );
};

export default JonRole;
