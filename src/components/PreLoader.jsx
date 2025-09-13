// components/Preloader.jsx
import { useState, useEffect } from "react";

export default function Preloader({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
  async function loadEverything() {
    // Wait for fonts to load
    await document.fonts.ready;

    // Delay half a second before marking ready
    setTimeout(() => {
      setReady(true);
    }, 100);
  }

  loadEverything();
}, []);

  if (!ready) {
    return (
      <div className="loading-screen">
        Loading...
      </div>
    );
  }

  return children; // Render app only when DOM + fonts are ready
}
