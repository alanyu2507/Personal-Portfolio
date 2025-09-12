// components/UI/ButtonPanel.jsx
import { useContext } from "react";
import { SceneContext } from "../../contexts/SceneContext.jsx";
import { IntroContext } from "../../contexts/IntroContext.jsx";
import { InfoBoxContext } from "../../contexts/InfoBoxContext.jsx";
import CustomButton from "./Button.jsx";
import "./ButtonPanel.css";
import AppearingText from "../Animations/AppearingText.jsx";

export default function ButtonPanel() {
  const { setCameraPosition, setCameraRotation, cameraPosition, cameraRotation} = useContext(SceneContext);
  const { introFinished, setIntroFinished } = useContext(IntroContext);
  const {setContent, setVisible, showInfoBox} = useContext(InfoBoxContext);

  return (
    <div>
      {introFinished && (
        <div className="button-panel">

          <CustomButton
            onClick={() => {
              setCameraRotation([1.769, 2, 0.76]);
              setCameraPosition([0.128, 2.14, 0.821]);
              showInfoBox(" Hello, I'm Alan! I'm a Freshman studying Electrical Engineering at the University of Michigan. That portrait on the right is me. Feel free to poke around my website to learn more about it or my past projects.");
            }}
          >
            <AppearingText delay={300}>
              About Me
            </AppearingText>
          </CustomButton>

          <CustomButton
          onClick={() => {
              setCameraRotation([-1.195, 1.533, -0.722]);
              setCameraPosition([1.169, 1.104, 4.354]);
              showInfoBox(" This is my personal portfolio website. It's stil being developed and it is pretty rough. Some of the textures are messed up such as the rugs and the scene is pretty bare bones. There's a bunch that could be improved, but this is mainly a proof of concept. In the future, I plan on adding features where you can navigate between different isometric rooms, each one showcasing a different project I've done in 3D.");
              
            }}>
            <AppearingText delay={600}>
              About This Site
            </AppearingText>
          </CustomButton>

          <CustomButton
          onClick={() => {
              setCameraRotation([-1.195, 1.533, -0.722]);
              setCameraPosition([-3.307, 0.762, 0.085]);
              showInfoBox(" Work in Progress :(")
              
            }}>
            <AppearingText delay={900}>
              Projects
            </AppearingText>
          </CustomButton>

        </div>
      )}
    </div>
  );
}
