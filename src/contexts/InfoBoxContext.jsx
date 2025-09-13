// contexts/InfoBoxContext.jsx
import { createContext, useState } from "react";

export const InfoBoxContext = createContext();

export function InfoBoxProvider({ children }) {
  const [content, setContent] = useState(null);  // content to display
  const [visible, setVisible] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [tabContents, setTabContents] = useState([]);

  const [tabCameraPositions, setTabCameraPositions] = useState([[]]);
  const [tabCameraRotations, setTabCameraRotations] = useState([[]]);



  const showInfoBox = (newContent) => {
    setContent(newContent);
    setVisible(true);
  };

  const hideInfoBox = () => {
    setVisible(false);
  };

  return (
    <InfoBoxContext.Provider value={{ content, visible, showInfoBox, hideInfoBox, tabs, setTabs, tabContents, setTabContents, tabCameraPositions, setTabCameraPositions, tabCameraRotations, setTabCameraRotations}}>
      {children}
    </InfoBoxContext.Provider>
  );
}
