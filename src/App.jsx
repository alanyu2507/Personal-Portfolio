import Bedroom from './scenes/bedroom';
import ButtonPanel from "./components/NavBar/ButtonPanel";
import IntroBox from "./components/IntroBox/IntroBox";
import './App.css';

// App.jsx
import { SceneProvider } from "./contexts/SceneContext";


function App() {
  return (
    <SceneProvider>
      <ButtonPanel>

      </ButtonPanel>
      <IntroBox>
        Welcome
      </IntroBox>
      <Bedroom>
        
      </Bedroom>
    </SceneProvider>
  );
}

export default App;

