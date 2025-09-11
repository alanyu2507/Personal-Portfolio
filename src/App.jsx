import Bedroom from './scenes/bedroom';
import ButtonPanel from "./components/NavBar/ButtonPanel";
import IntroBox from "./components/IntroBox/IntroBox";
import IntroSequence from './components/Animations/IntroSequence';
import './App.css';

// App.jsx
import { SceneProvider } from "./contexts/SceneContext";



function App() {
  return (
    <SceneProvider>
      

      <IntroSequence>
        Welcome
      </IntroSequence>

      <ButtonPanel>
        
      </ButtonPanel>
      
    </SceneProvider>
  );
}

export default App;

