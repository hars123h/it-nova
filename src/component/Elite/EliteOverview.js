"use client";
import React, { useState } from "react";

const EliteOverview = () => {
  const [overViewActive, setOverviewActive] = useState(0);
  return (
    <>
      <div className="w-[1300px] p-[20px] my-0 mx-auto bg-[#f4f8fb] ">
        <h2 className="text-[28px] font-bold mb-[20px] text-left text-[#333] w-full">
          Overview
        </h2>
        <p>
          This Python Course Training will help you understand the high-level,
          general-purpose dynamic programming language of the decade. We have
          covered topics like machine learning, deep learning, Hadoop streaming,
          and MapReduce.
        </p>
        <div className="flex border-b border-[#ddd] mb-[20px] w-full">
          <button
            className={`${
              overViewActive === 0
                ? "text-primary border-b-[5px] border-primary"
                : "text-[#333]"
            } py-[10px] px-5 bg-transparent cursor-pointer text-[16px] transition-all duration-300 ease-in-out `}
            onClick={() => setOverviewActive(0)}
          >
            Why should I learn the Python programming language?
          </button>

          <button
            className={`${
              overViewActive === 1
                ? "text-primary border-b-[5px] border-primary"
                : "text-[#333]"
            } py-[10px] px-5 bg-transparent cursor-pointer text-[16px] transition-all duration-300 ease-in-out `}
            onClick={() => setOverviewActive(1)}
          >
            What are the prerequistes for taking this course?
          </button>

          <button
            className={`${
              overViewActive === 2
                ? "text-primary border-b-[5px] border-primary"
                : "text-[#333]"
            } py-[10px] px-5 bg-transparent cursor-pointer text-[16px] transition-all duration-300 ease-in-out `}
            onClick={() => setOverviewActive(2)}
          >
            Is Java a good language for beginners?
          </button>
        </div>

        <div className="bg-white p-[20px] rounded-[8px] border border-[#ddd]">
          {overViewActive === 0 && (
            <>
              <div id="tab1" className="block min-h-[300px]">
                <p>
                  C++ offers fine control over system resources and memory
                  management, making it ideal for implementing complex data
                  structures and algorithms. A Senior C++ Developer in the
                  United States can earn up to US$115,000 – Indeed
                </p>
                <table className="w-full mt-4">
                  <tbody>
                    <tr>
                      <th className="bg-[#f0f0f0] p-[10px] text-left border border-[#ddd] whitespace-nowrap ">
                        Criteria
                      </th>

                      <th className="bg-[#f0f0f0] p-[10px] text-left border border-[#ddd] whitespace-nowrap ">
                        C++
                      </th>

                      <th className="bg-[#f0f0f0] p-[10px] text-left border border-[#ddd] whitespace-nowrap ">
                        Java
                      </th>
                      <th className="bg-[#f0f0f0] p-[10px] text-left border border-[#ddd] whitespace-nowrap ">
                        Python
                      </th>
                    </tr>
                    <tr>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Ease of Use
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Verbose
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Moderately verbose
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Simpler and dynamically typed
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Scalability
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Platform-dependent
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Highly scalable and platform-independen
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Cross-platform
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Deployment
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Android and web application
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Enterprise-level applications
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Data Science and Machine Learning
                      </td>
                    </tr>

                    <tr>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        Average Salary
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        INR 8,20,368
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        INR 12,56,424
                      </td>
                      <td className="bg-white p-[10px] text-left border border-[#ddd] whitespace-nowrap">
                        INR 15,03,492
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {overViewActive === 1 && (
            <>
              <div className="min-h-[300px]">
                <div className="mb-[10px]  ">
                  <span className="text-[20px] font-bold w-[400px]">
                    Basic Understanding:
                  </span>
                  You should be familiar with the basics of Java, including data
                  types, control structures (like loops and conditionals),
                  object-oriented programming, and basic data structures (like
                  arrays, linked lists, and stacks)
                </div>

                <div className="mb-[10px]  ">
                  <span className="text-[20px] font-bold w-[400px]">
                    Logical Thinking:
                  </span>
                  A strong grasp of logical thinking and problem-solving skills
                  is essential.
                </div>

                <div className="mb-[10px]  ">
                  <span className="text-[20px] font-bold w-[400px]">
                    Basic Mathematics:
                  </span>
                  A basic understanding of mathematics, especially topics like
                  algebra and basic combinatorics, will be helpful as these are
                  often used in algorithms.
                </div>
              </div>
            </>
          )}

          {overViewActive === 2 && (
            <>
              <div
                className="border-[2px] border-[rgb(215,215,215)] p-[14px] rounded-[10px] min-h-[300px]"
                style={{
                  boxShadow: " 0 4px 8px rgba(255, 255, 255, 0.1)",
                }}
              >
                <p className="text-[22px]">
                  Yes, Java is an excellent language for beginners. Its syntax
                  is more structured, which can help you understand the
                  fundamentals of programming. Java’s widespread use in
                  industries also makes it a valuable language to learn.
                </p>

                <div className="flex mt-[14px] items-center">
                  <span className="mr-[10px] text-[25px]">✅</span>
                  <p className="text-xl">Strongly Typed Language:</p>
                </div>

                <div className="flex mt-[14px] items-center">
                  <span className="mr-[10px] text-[25px]">🏢</span>
                  <p className="text-xl">Widely Used in Industry:</p>
                </div>

                <div className="flex mt-[14px] items-center">
                  <span className="mr-[10px] text-[25px]">🌐</span>
                  <p className="text-xl">Large Community and Resources:</p>
                </div>

                <div className="flex mt-[14px] items-center">
                  <span className="mr-[10px] text-[25px]">🧩</span>
                  <p className="text-xl">Object-Oriented Programming:</p>
                </div>

                <div className="flex mt-[14px] items-center">
                  <span className="mr-[10px] text-[25px]">🧰</span>
                  <p className="text-xl">Extensive Libraries and Frameworks:</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EliteOverview;
