import React, { useState, useEffect, useRef } from "react";
import { throttle } from "lodash";

const ScrollDirectionDetector = () => {
  const [scrollDirection, setScrollDirection] = useState("none");
  const lastScrollTop = useRef(0); // useRef를 사용하여 마지막 스크롤 위치를 추적

  const updateScrollDirection = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop.current) {
      setScrollDirection("down");
      console.log("down");
    } else if (currentScrollTop < lastScrollTop.current) {
      setScrollDirection("up");
      console.log("up");
    }
    lastScrollTop.current = currentScrollTop;
  };

  const throttledUpdateScrollDirection = throttle(updateScrollDirection, 300, {
    leading: true,
    trailing: false,
  });


  useEffect(() => {
    const handleScroll = () => {
      throttledUpdateScrollDirection();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      throttledUpdateScrollDirection.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <p style={{ position: "fixed" }}>Scroll direction: {scrollDirection}</p>
    </div>
  );
};

export default ScrollDirectionDetector;
