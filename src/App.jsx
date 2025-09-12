import Bedroom from './scenes/bedroom';
import ButtonPanel from "./components/NavBar/ButtonPanel";
import IntroBox from "./components/IntroBox/IntroBox";
import IntroSequence from './components/Animations/IntroSequence';

import './App.css';

// App.jsx
import { SceneProvider } from "./contexts/SceneContext";
import { IntroProvider } from "./contexts/IntroContext";
import Preloader from './components/PreLoader';



function App() {
  return (
    <Preloader>
    <SceneProvider>
      
      <IntroProvider>
        <IntroSequence>
          Welcome
        </IntroSequence>
        <Bedroom>
          
        </Bedroom>
        <ButtonPanel>

        </ButtonPanel>
      </IntroProvider>
      
      
    </SceneProvider>
    </Preloader>
  
  );
}

export default App;

