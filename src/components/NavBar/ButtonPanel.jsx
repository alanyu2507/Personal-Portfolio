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
  const {showInfoBox, tabs, setTabs, setTabContents, setTabCameraPositions, setTabCameraRotations} = useContext(InfoBoxContext);

  return (
    <div>
      {introFinished && (
        <div className="button-panel">

          <CustomButton
            onClick={() => {
              setCameraRotation([1.769, 2, 0.76]);
              setCameraPosition([0.128, 2.14, 0.821]);
              setTabCameraRotations([[1.769, 2, 0.76], [1.769, 2, 0.76], [1.769, 2, 0.76]]);
              setTabCameraPositions([[0.128, 2.14, 0.821], [0.128, 2.14, 0.821], [0.128, 2.14, 0.821]]);
              showInfoBox(
                <div class="scrollable">
                  Hi, I'm Alan! I'm a Chinese Canadian who likes to mess around and find out. (Specifically tech) That portrait on the right is me. Feel free to poke around my website to learn more about it or my past projects., 
                </div>);
              setTabs(["Me", "Education", "Skills"]);
              setTabContents([
                <div class="scrollable">
                  Hi, I'm Alan! I'm a Chinese Canadian who likes to mess around and find out. (Specifically tech) That portrait on the right is me. Feel free to poke around my website to learn more about it or my past projects., 
                </div>,
                <div class="scrollable">
                 
                  I'm currently a Freshman at the University of Michigan studying Electrical Engineering. 
                  <p>Relevant courses include EECS280, EECS201 and ENGR100.</p>
                  <p>I've also taken CS106B, Programming Abstractions, at Stanford.</p>
                  
                </div>, 
                <div class="scrollable">
                  <h2 class="header1">
                    Languages:
                  </h2>
                    C++, C#, Python, MATLAB, PyTorch, React.js, Three.js, Java, Javascript, Firebase, WSL2, HTML/CSS
                  <h2 class="header">
                    Design/Engineering:
                  </h2>
                    Fusion 360, Blender, KiCad, Altium Designer, Unity, Unreal Engine 5
                  <h2 class="header">
                    Misc:
                  </h2>
                    Communication, Collaboration, Fullstack Development
                </div>
              ]);
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
              setTabCameraRotations([[-1.195, 1.533, -0.722], [-1.195, 1.533, -0.722], [-1.195, 1.533, -0.722]]);
              setTabCameraPositions([[1.169, 1.104, 4.354], [1.169, 1.104, 4.354], [1.169, 1.104, 4.354]]);
              showInfoBox(
                <div class="scrollable">
                  <h2 class="header1">3D:</h2>
                    The 3D background you see was mostly modeled and completely textured by me in Blender. It's being rendered with WebGL through the Three.js library. Since web rendering is extremely resource heavy and slow, I actually set up all the lighting, bloom, and other effects in Blender and then baked it into an image texture. No actual lighting is being rendered by Three.js making the site pretty optimized.
                  <h2>
                    Web Design:
                  </h2>
                  Everything else was coded using React.js. The 3D background is actually contained inside a React component. This is how information is passed from clicking a button to animating the camera in the 3D space. Animations, buttons, and containers were all coded to be modular and reusable to make expanding my portfolio as easy as possible. Go to the Future tab to learn more about my plans for this website.
                </div>
              );
              setTabs(["Design", "Conception", "Future"]);
              setTabContents([
                <div class="scrollable">
                  <h2 class="header1">3D:</h2>
                    The 3D background you see was mostly modeled and completely textured by me in Blender. It's being rendered with WebGL through the Three.js library. Since web rendering is extremely resource heavy and slow, I actually set up all the lighting, bloom, and other effects in Blender and then baked it into an image texture. No actual lighting is being rendered by Three.js making the site pretty optimized.
                  <h2>
                    Web Design:
                  </h2>
                  Everything else was coded using React.js. The 3D background is actually contained inside a React component. This is how information is passed from clicking a button to animating the camera in the 3D space. Containers, text animations, and buttons were all coded to be modular and reusable to make expanding my portfolio as easy as possible. Go to the Future tab to learn more about my plans for this website.
                </div>, 
                <div class="scrollable">
                  I actually made this website just for my V1 application. When I was prompted to include a portfolio and realized I didn't have one, I knew this was a great oppurtunity to learn and grow. I built this site in one week with no previous React experience and minimal Three.js experience. It's still pretty messy and there's a lot to work on.
                </div>, 
                <div class="scrollable">
                  I plan to 3D model a different room for each of my projects. The project button on the left would switch the scene and basically give a tour of each of those rooms, while also explaining the process behind my projects. There's still some optimization and shader stuff I need to work on in this scene though.
                </div>
              ]);
            }}>
            <AppearingText delay={600}>
              About This Site
            </AppearingText>
          </CustomButton>

          <CustomButton
          onClick={() => {
              setCameraRotation([-1.195, 1.533, -0.722]);
              setCameraPosition([-3.307, 0.762, 0.085]);
              showInfoBox(<div class="scrollable">
                  <h2 class="header1">
                    Volleyball Machine
                  </h2>
                  <h3>
                    Embedded Systems + Motor Control
                  </h3>
                  <p>
                    I created a scrappier version of a volleyball serving machine. I coded my own controls for serve speed and type. I was also in the process of designing a custom PCP to clean up my messy setup.
                  </p>
                  Hardware:
                  <img src="Images/Hardware.jpg"  alt="Hardware" style={{
                      width:"90%"

                    }}/>
                  Electronics:
                  <img src="Images/Electronics.jpg"  alt="Electronics" style={{
                      width:"90%"

                    }}/>
                  Demo:
                  <video width="90%" controls>
                    <source src="Images/Demo.mp4" type="video/mp4"/>
                      Your browser does not support the video tag.
                  </video>


                  <p>I didn't turn the machine to full power because I'm indoors and also the frame isn't properly secured.
                    </p>
                </div>)
              setTabCameraPositions([[0, 2, 1.5], [-2, 1, -0.5], [-0.3, 1.7, 1], [1.3, 0.6, 0.2], [1, 1, 1], [-0.7, 1.8, 1.3]]);
              setTabCameraRotations([[1.7, 1.4, -0.04], [0.7, 1, -1.7], [1.4, 3.1, -0.5], [-2.1, 0.5, 1.5], [0, 0, 0], [-3, 0.7, 2]]);
              setTabs(["1", "2", "3", "4", "5", "6"]);
              setTabContents([
                <div class="scrollable">
                  <h2 class="header1">
                    Volleyball Machine
                  </h2>
                  <h3>
                    Embedded Systems + Motor Control
                  </h3>
                  <p>
                    I created a scrappier version of a volleyball serving machine. I coded my own controls for serve speed and type. I was also in the process of designing a custom PCP to clean up my messy setup.
                  </p>
                  Hardware:
                  <img src="Images/Hardware.jpg"  alt="Hardware" style={{
                      width:"90%"

                    }}/>
                  Electronics:
                  <img src="Images/Electronics.jpg"  alt="Electronics" style={{
                      width:"90%"

                    }}/>
                  Demo:
                  <video width="90%" controls>
                    <source src="Images/Demo.mp4" type="video/mp4"/>
                      Your browser does not support the video tag.
                  </video>


                  <p>I didn't turn the machine to full power because I'm indoors and also the frame isn't properly secured.
                    </p>
                </div>,

                <div class="scrollable">
                  <h2 class="header1">
                    8-Ball Game 
                  </h2>
                  <h3>
                    Physics Engine + Math
                  </h3>
                  <p>
                    I made an 8-Ball on the web from scratch. I coded my own physics handler using vector math and the graphics were rendered with Three.js. I made a video documenting my process:
                  </p>
                  <a href="https://www.youtube.com/watch?v=Dh4ayHzN6qo" target="_blank">
                    <img src="Images/pool.png"  alt="Link" style={{
                      width:"90%"
                    }}/>
                  </a>

                </div>,

                <div class="scrollable">
                  <h2 class="header1">
                    Factorio SpiderBot 
                  </h2>
                  <h3>
                    Robotics
                  </h3>
                  <p>
                    Inspired by the spiderbot from Factorio, I designed my own Spiderbot using Fusion 360 and some servo motors. Everything was custom desinged and build. Unfortunately this was a massive failure because I didn't account that the legs would be too heavy for the hip servo to move.
                  </p>
                  Inspiration:
                  <img src="Images/factorio.png"  alt="Hardware" style={{
                      width:"90%"

                    }}/>
                  3D Printing:
                  <img src="Images/Spidertron.PNG"  alt="Hardware" style={{
                      width:"90%"

                    }}/>
                  Assembeled:
                  <img src="Images/Assembled.jpg"  alt="Hardware" style={{
                      width:"90%"

                    }}/>
                </div>,

                <div class="scrollable">
                  <h2 class="header1">
                    Gundams
                  </h2>
                  <h3>
                    3D Modeling + Animation
                  </h3>
                  <p>
                    Besides building Gundams, I also modeled them in Blender. I then rigged them up for animation on Mixamo to make them do funny dances.
                  </p>
                  Gundam Model:
                  <img src="Images/Gundam.JPG"  alt="Hardware" style={{
                      width:"90%"

                    }}/>
                  Model and Animation:
                  <a href="https://youtu.be/bkWeLyAFQsM" target="_blank">
                    <img src="Images/gthumb.png"  alt="Link" style={{
                      width:"90%"
                    }}/>
                  </a>
                </div>,

                <div class="scrollable">
                  <h2 class="header1">
                    Recreating BG3
                  </h2>
                  <h3>
                    Game Development
                  </h3>
                  <p>
                    Baldur's Gate 3 is my favourite game. The turn based combat was extremely addicting and allowed for infinte possibilities in encounter scenarios, build diversity, and party composition. I wanted to emulate this gameplay while adding in my own spells and skillsets to the gameplay loop.
                  </p>
                  Game Demo:
                  <img src="Images/3.PNG"  alt="Hardware" style={{
                      width:"90%"

                    }}/>
                  Grid syste code snippet:
                  <img src="Images/ue5.PNG"  alt="Hardware" style={{
                      width:"90%"

                    }}/>
                </div>,

                <div class="scrollable">
                  <h2 class="header1">
                    Titanfall 2 Trailer 
                  </h2>
                  <h3>
                    Video Editing
                  </h3>
                  <p>
                    I was really bored one day and I got inspired by all those TikTok edits on my fyp. I tried to make my own edit of Titanfall using a mix of my quickscopes and trailer footage. 
                  </p>
                  <a href="https://youtu.be/ogYclXzn9bc" target="_blank">
                    <img src="Images/titanfall.jpg"  alt="Link" style={{
                      width:"90%"
                    }}/>
                  </a>
                </div>,
              ]);
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
