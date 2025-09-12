// components/Preloader.jsx
import { useState, useEffect } from "react";

export default function Preloader({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function loadEverything() {
      // Wait for DOM + images + other browser assets
      await new Promise((res) =>
        window.addEventListener("load", res, { once: true })
      );

      // Wait for fonts
      await document.fonts.ready;

      // Once both are done, mark ready
      setReady(true);
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
