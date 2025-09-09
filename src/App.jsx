import Bedroom from './scenes/bedroom';
import './App.css';

// App.jsx
import { SceneProvider } from "./contexts/SceneContext";

import ButtonPanel from "./components/ButtonPanel";

function App() {
  return (
    <SceneProvider>
      <Bedroom />
      <ButtonPanel />
    </SceneProvider>
  );
}

export default App;

