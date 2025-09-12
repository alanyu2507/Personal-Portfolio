// components/Animations/TypedText.jsx
import React, { useState, useEffect, use } from "react";
import "./TypedText.css";

export default function TypedText({ children, speed = 100, delay = 0 }) {
  const text = children;
  const [displayedText, setDisplayedText] = useState("");
  let currentIndex = 0;
  const [wait, setWait] = useState(true);

  useEffect(() => {
  const timer1 = setTimeout(() => setWait(false), 100);

  return () => {
    clearTimeout(timer1);
  };
}, []);

  useEffect(() => {
    
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

  if (wait) {
    return null;
  }
  
  return <span className="typed-text">{displayedText}</span>;
}
