// contexts/InfoBoxContext.jsx
import { createContext, useState } from "react";

export const InfoBoxContext = createContext();

export function InfoBoxProvider({ children }) {
  const [content, setContent] = useState("");  // content to display
  const [visible, setVisible] = useState(false);

  const showInfoBox = (newContent) => {
    setContent(newContent);
    setVisible(true);
  };

  const hideInfoBox = () => {
    setVisible(false);
  };

  return (
    <InfoBoxContext.Provider value={{ content, visible, showInfoBox, hideInfoBox }}>
      {children}
    </InfoBoxContext.Provider>
  );
}
