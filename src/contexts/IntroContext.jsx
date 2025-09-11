// contexts/SceneContext.jsx
import { createContext, useState } from "react";

export const IntroContext = createContext();

export const IntroProvider = ({ children }) => {
  const [IntroFinished, setIntroFinished] = useState(false);

  return (
    <IntroContext.Provider value={{
      IntroFinished,
      setIntroFinished
    }}>
      {children}
    </IntroContext.Provider>
  );
};
