// contexts/SceneContext.jsx
import { createContext, useState } from "react";

export const IntroContext = createContext();

export const IntroProvider = ({ children }) => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <IntroContext.Provider value={{
      introFinished,
      setIntroFinished
    }}>
      {children}
    </IntroContext.Provider>
  );
};
