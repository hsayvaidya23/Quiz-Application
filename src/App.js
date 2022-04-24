import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import { GameStateContext } from './helpers/Contexts';

//* [ 'menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  return (
    <div className="App">
      <h1>QuizApp</h1>
      <GameStateContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <Menu /> }
      </GameStateContext.Provider>
      
      
    </div> 
  );
}

export default App;
