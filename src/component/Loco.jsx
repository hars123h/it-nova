"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import Aos from "aos";

export default function LocomotiveScrollProvider({ children }) {

  const pathname = usePathname();
  const refScrollContainer = useRef();

  useEffect(()=>{
    // Aos.init({
    //   offset: 200,
    //   duration: 200,
    //   easing: 'ease-in-sine',
    //   delay: 100,
    // });
  },[])
  useEffect(() => {
    let scrollInstance;
  
    async function getLocomotive() {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
  
      scrollInstance = new LocomotiveScroll({
        el: refScrollContainer.current,
        smooth: true,
      });
  
      // Update ScrollTrigger on scroll events
      scrollInstance.on("scroll", ScrollTrigger.update);
  
      // Set up ScrollTrigger proxy
      ScrollTrigger.scrollerProxy(refScrollContainer.current, {
        scrollTop(value) {
          return arguments.length
            ? scrollInstance.scrollTo(value, 0, 0)
            : scrollInstance.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });
  
      ScrollTrigger.addEventListener("refresh", () => scrollInstance.update());
      ScrollTrigger.refresh();
    }
  
    getLocomotive();
  
    return () => {
      if (scrollInstance) {
        scrollInstance.destroy(); // Clean up the instance
        ScrollTrigger.removeEventListener("refresh", () => scrollInstance.update());
      }
    };
  }, [pathname]);
  

  return <div className=" pb-[40px] " ref={refScrollContainer}  data-scroll-container>{children}</div>;
}
