import React, { useContext } from "react";
import "../App.css";
import { GameStateContext } from "../helpers/Contexts";

const Menu = () => {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameStateContext);

  return (
    <div className="Menu">
      <label htmlFor="">Enter Your Name: </label>
      <input
        type="text"
        placeholder="Ex. John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
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
