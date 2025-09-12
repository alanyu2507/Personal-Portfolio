// components/UI/ButtonPanel.jsx
import { useContext } from "react";
import { SceneContext } from "../../contexts/SceneContext.jsx";
import { IntroContext } from "../../contexts/IntroContext.jsx";
import CustomButton from "./Button.jsx";
import "./ButtonPanel.css";
import AppearingText from "../Animations/AppearingText.jsx";

export default function ButtonPanel() {
  const { setCameraPosition, setCameraTarget, setActiveScene } = useContext(SceneContext);
  const { introFinished, setIntroFinished } = useContext(IntroContext);

  return (
    <div>
      {introFinished && (
        <div className="button-panel">

      <CustomButton>
        <AppearingText delay={300}>
          About Me
        </AppearingText>
      </CustomButton>
      <CustomButton>
        <AppearingText delay={600}>
          About This Site
        </AppearingText>
      </CustomButton>
      <CustomButton>
        <AppearingText delay={900}>
          Projects
        </AppearingText>
      </CustomButton>
    </div>
      )}
    </div>
    
  );
}
