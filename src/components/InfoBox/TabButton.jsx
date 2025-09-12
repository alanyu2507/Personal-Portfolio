import React from "react";
import "./TabButton.css";

export default function TabButton({ children, onClick }) {
  return (
    <button className="tab-button" onClick={onClick}>
      {children}
    </button>
  );
}
