import React, { useContext } from "react";
import "../App.css";
import { GameStateContext } from "../helpers/Contexts";

const Menu = () => {
  const { gameState, setGameState } = useContext(GameStateContext);
  return (
    <div className="Menu">
      <label htmlFor="">Enter Your Name: </label>
      <input type="text" placeholder="Ex. John Smith" />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Menu;
