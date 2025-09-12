import Bedroom from './scenes/bedroom';
import ButtonPanel from "./components/NavBar/ButtonPanel";
import IntroBox from "./components/IntroBox/IntroBox";
import IntroSequence from './components/Animations/IntroSequence';
import InfoBox from './components/InfoBox/InfoBox';


import './App.css';

// App.jsx
import { SceneProvider } from "./contexts/SceneContext";
import { IntroProvider } from "./contexts/IntroContext";
import { InfoBoxProvider } from "./contexts/InfoBoxContext";
import Preloader from './components/PreLoader';



function App() {
  return (
    <Preloader>
      <InfoBoxProvider>
        <SceneProvider>
        <IntroProvider>

            <IntroSequence>
              Welcome
            </IntroSequence>

            <Bedroom>
            </Bedroom>

            <ButtonPanel>
            </ButtonPanel>

            <InfoBox>

            </InfoBox>
            
          </IntroProvider>
        </SceneProvider>
      </InfoBoxProvider>
    </Preloader>
    
  
  );
}

export default App;

