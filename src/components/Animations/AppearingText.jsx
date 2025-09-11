import React, { useEffect, useState } from "react";
import "./AppearingText.css";

export default function AppearingText({ children, delay = 0 }) {
  const text = children;
  const [visibleLetters, setVisibleLetters] = useState(
    Array(text.length).fill(false)
  );

  useEffect(() => {
    const remainingIndices = Array.from({ length: text.length }, (_, i) => i);

    function revealNextLetter() {
      if (remainingIndices.length === 0) return;

      // Pick a random index to reveal
      const randomIndex = Math.floor(Math.random() * remainingIndices.length);
      const letterIndex = remainingIndices.splice(randomIndex, 1)[0];

      setVisibleLetters((prev) => {
        const newState = [...prev];
        newState[letterIndex] = true;
        return newState;
      });

      // Schedule next letter
      setTimeout(revealNextLetter, Math.random() * 200 + 50); // random delay 50-250ms
    }

    const delayTimeout = setTimeout(() => {
      revealNextLetter();
    }, delay);

    // Clean up timeout if component unmounts
    return () => clearTimeout(delayTimeout);
  }, [text, delay]);

  return (
    <span className="appearing-text">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`letter ${visibleLetters[i] ? "visible" : ""}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
