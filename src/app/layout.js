"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import "./loco.css";
import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import BgVideo from "@/component/reuseable/BgVideo";
// gsap.registerPlugin(ScrollTrigger);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  let scroll;
  // useEffect(() => {
  //   if (window.innerWidth > 600) {
  //     window.addEventListener("load", function () {
  //       scroll = new LocomotiveScroll({
  //         el: document.getElementById("main"),
  //         smooth: true,
  //         lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
  //         multiplier: 1.4,
  //         scrollbarContainer: false,
  //         reloadOnContextChange: true,
  //         touchMultiplier: 2,
  //         smartphone: {
  //           smooth: true,
  //         },
  //         tablet: {
  //           smooth: true,
  //         },
  //       });

  //       scroll.on("scroll", ScrollTrigger.update);
  //       ScrollTrigger.scrollerProxy(document.getElementById("main"), {
  //         scrollTop(value) {
  //           return arguments.length
  //             ? scroll.scrollTo(value, 0, 0)
  //             : scroll.scroll.instance.scroll.y;
  //         },
  //         getBoundingClientRect() {
  //           return {
  //             top: 0,
  //             left: 0,
  //             width: window.innerWidth,
  //             height: window.innerHeight,
  //           };
  //         },
  //         // pinType: document.getElementById('main').style.transform ? "transform" : "fixed",
  //       });
  //       ScrollTrigger.addEventListener("refresh", () => scroll.update());
  //       ScrollTrigger.refresh();
  //     });
  //   }
  // });
  return (
    <html lang="en">
      <body
     
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <BgVideo />
        <div id="main">
        {children}
        
      </div>
      </body>
    </html>
  );
}
