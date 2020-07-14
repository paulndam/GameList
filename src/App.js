import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GameList from "./components/GameList.jsx";
import GameDisplay from "./components/GameDisplay.jsx";

function App() {
  const [currentgame, setcurrentgame] = useState([]);

  const onGoingGame = (newGame) => {
    setcurrentgame([...currentgame, newGame]);
  };

  const deletegame = (index) => {
    let x = [...currentgame];
    x.splice(index, 1);
    setcurrentgame(x);
  };
  return (
    <div className="App">
      <GameList NewGame={onGoingGame} />
      <GameDisplay games={currentgame} delete={deletegame} />
    </div>
  );
}

export default App;
