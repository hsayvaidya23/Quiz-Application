import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';

//* [ 'menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  return (
    <div className="App">
      <h1>QuizApp</h1>
      {gameState === "menu" && <Menu /> }
      
    </div>
  );
}

export default App;
