import React, { useEffect, useRef, useState, useCallback } from "react";
import "./HorizontalSlider.css";

const HorizontalSlider = ({ articleLinks }) => {
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);
  const timeoutRef = useRef(null);

  // Track interaction state: 'idle' (initial), 'untouched' (delayed effect), 'touched' (interacted)
  const [interactionState, setInteractionState] = useState("idle");
  const [isTimerActive, setIsTimerActive] = useState(false);

  // Process article links: ensure they are valid and add 'compressed' prop
  const processedArticleLinks = articleLinks
    .filter(Boolean)
    .map((articleLink, index) =>
      React.isValidElement(articleLink)
        ? React.cloneElement(articleLink, { compressed: true, key: index })
        : null
    )
    .filter(Boolean);

  // Handle scroll interaction
  const handleScroll = useCallback(() => {
    if (wrapperRef.current?.scrollLeft !== 0) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setInteractionState("touched"); // Mark as interacted
    }
  }, []);

  // Observe when the slider enters the viewport and apply "untouched" after 3 seconds
  useEffect(() => {
    if (interactionState !== "idle" || isTimerActive) return;

    const sliderElement = sliderRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTimerActive(true); // Prevent multiple timers
          timeoutRef.current = setTimeout(() => {
            setInteractionState("untouched");
          }, 3000);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sliderElement);
    return () => observer.disconnect();
  }, [interactionState, isTimerActive]);

  // Attach and clean up scroll event listener
  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    wrapperElement?.addEventListener("scroll", handleScroll);
    return () => wrapperElement?.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="horizontal-slider-wrapper" ref={wrapperRef}>
      <div
        ref={sliderRef}
        className={`horizontal-slider ${
          interactionState === "idle" ? "" : interactionState
        }`}
      >
        {processedArticleLinks}
      </div>
    </div>
  );
};

export default HorizontalSlider;
