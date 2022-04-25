import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import { GameStateContext } from './helpers/Contexts';

//* [ 'menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>QuizApp</h1>
      <GameStateContext.Provider value={{ gameState, setGameState, userName, setUserName, score, setScore }}>
        {gameState === "menu" && <Menu /> }
        {gameState === "playing" && <Quiz />}
      </GameStateContext.Provider>
      
      
    </div> 
  );
}

export default App;
