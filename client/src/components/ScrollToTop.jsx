import React, { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-5 bottom-5 bg-white p-2"
        >
          <BiArrowToTop className="text-2xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
