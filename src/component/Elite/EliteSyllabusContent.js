"use client";
import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FiMinus } from "react-icons/fi";

const EliteSyllabusContent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      question: "JAVA BASICS",
      answer:
        'Setup environment, Basic syntax, and "Hello World!" program, Data types, variables, and constants. Operators and expressions, Control structures: if-else, switch-case. Loops: for, while, do-while. Methods: declaration, denition, calling and recursion. Arrays: single-dimensional and multi-dimensional arrays. References and pointers-like behaviour in Java (references). Dynamic memory allocation with Java (garbage collection). Strings: String class, StringBuilder and StringBuer',
    },
    {
      question: "BIG O NOTATION AND COMPLEXITY ANALYSIS",
      answer:
        "Introduction to Big O notation, Omega (Ω) and Theta (Θ) notations. Time complexity analysis: best case, worst case, and average case. Space complexity analysis. Practical examples of complexity analysis.",
    },
    {
      question: "JAVA OOP CONCEPTS",
      answer:
        "Introduction to OOP, classes, and objects. Constructors and destructors (nalize method). Access speciers: private, public and protected. Member functions and method overloading. Inheritance: single, multilevel, and hierarchical Polymorphism: method overriding, Abstract classes and interfaces. Exception handling: try, catch, throw, throws and nally, Inner classes and anonymous classes.",
    },

    {
      question: "ALGORITHMS",
      answer:
        "Sorting algorithms: Bubble sort, Selection sort, Insertion sort, Merge sort and quick sort, Heap sort and Radix sort. Searching algorithms: Linear search and Binary search, Hashing and Hash tables, Bucket sort and Shell sort",
    },
    {
      question: "PRACTICE PROBLEMS",
      answer:
        "Sorting algorithms, Searching algorithms, Dynamic programming, Greedy algorithm, Graph algorithm.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="flex w-full  flex-col justify-center items-center mb-20">
        <div className="bg-white w-full flex justify-between flex-wrap p-[20px] max-w-[1300px] ">
          <div className="mb-[20px] w-[65%]">
            <h2 className="text-[28px] mb-[20px] font-semibold text-[#333]">
              Data Structures and Algorithms in Java Course Syllabus
            </h2>

            <div className="">
              {faqData.map((faq, index) => (
                <>
                  <div
                    key={index}
                    className="mb-[10px] border border-[#ddd] rounded-[15px] overflow-hidden w-full"
                  >
                    <div
                      className={`w-full text-left ${
                        openIndex == index ? "bg-[#f0f0f0]" : "bg-[#ceebff]"
                      }  text-[#333] cursor-pointer hover:bg-[#f0f0f0] p-[15px] text-[16px] flex justify-between items-center`}
                      onClick={() => toggleFAQ(index)}
                    >
                      JAVA BASICS
                      {openIndex == index ? (
                        <FiMinus className="text-gray" />
                      ) : (
                        <BiSolidDownArrow className="text-gray" />
                      )}
                    </div>
                    <div
                      className={`p-[15px] bg-[#f9f9f9] border-t border-[#ddd] text-sm  ${
                        openIndex === index ? "block" : "hidden"
                      }`}
                    >
                      <p>
                        Setup environment, Basic syntax, and "Hello World!"
                        program, Data types, variables, and constants. Operators
                        and expressions, Control structures: if-else,
                        switch-case. Loops: for, while, do-while. Methods:
                        declaration, denition, calling and recursion. Arrays:
                        single-dimensional and multi-dimensional arrays.
                        References and pointers-like behaviour in Java
                        (references). Dynamic memory allocation with Java
                        (garbage collection). Strings: String class,
                        StringBuilder and StringBuer
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EliteSyllabusContent;
