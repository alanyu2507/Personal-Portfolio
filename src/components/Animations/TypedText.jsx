// components/Animations/TypedText.jsx
import React, { useState, useEffect } from "react";
import "./TypedText.css";

export default function TypedText({ children, speed = 100, delay = 0 }) {
  const text = children;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText(""); // reset if text changes

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
        if (currentIndex >= text.length-1) {
          clearInterval(interval);
        }
      }, speed);

      // Cleanup interval on unmount
      return () => clearInterval(interval);
    }, delay);

    // Cleanup timeout if component unmounts before delay
    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return <span className="typed-text">{displayedText}</span>;
}
