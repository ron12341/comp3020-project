import React, { useRef, useEffect, useState } from "react";
import TechnologySection from "./components/TechnologySection";
import DesignPage from "./DesignPage";
import "./HomePage.css"; // Add styles here
import NavBar from "./components/NavBar";
import TestimonialSection from "./components/TestimonialSection";
import { useLocation } from "react-router-dom";

const HomePage: React.FC = () => {
  const [isSnapEnabled, setIsSnapEnabled] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // Ref to the scroll container

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Get the element by ID from the hash
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollY = scrollContainerRef.current.scrollTop; // Get scroll position of the container
      const containerHeight = scrollContainerRef.current.scrollHeight;
      const containerClientHeight = scrollContainerRef.current.clientHeight;

      // Log scroll position for debugging
      console.log("scrollY:", scrollY);
      console.log("containerHeight:", containerHeight);
      console.log("containerClientHeight:", containerClientHeight);

      // Disable snap when at the top or bottom of the container
      if (scrollY === 0 || scrollY + containerClientHeight >= containerHeight) {
        setIsSnapEnabled(false);
      } else {
        setIsSnapEnabled(true);
      }
    }
  };

  useEffect(() => {
    // Attach the scroll event listener to the scroll container
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className={`homepage ${isSnapEnabled ? "snap-enabled" : "snap-disabled"}`}
    >
      {/* NavBar at the top */}
      <div className="navbar-container">
        <NavBar />
      </div>

      {/* Main scrollable container */}
      <div ref={scrollContainerRef} className="scroll-container">
        <div className="section design-page">
          <DesignPage />
        </div>
        <div className="section technology-section" id="technology">
          <TechnologySection />
        </div>

        <div className="section testimonial-section" id="testimonials">
          <TestimonialSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
