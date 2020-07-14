import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GameList = (props) => {
  const [game, setgame] = useState("");
  const [league, setleague] = useState("");
  const [time, settime] = useState("");
  const [field, setfield] = useState("");
  const [dontwacth, setdontwatch] = useState("");

  const addGame = (e) => {
    e.preventDefault();
    props.NewGame({ game, league, time, field });
    setgame("");
    setleague("");
    settime("");
    setfield("");
  };

  const remove = (e, i) => {
    e.preventDefault();
    props.delete(i);
  };

  return (
    <div className="container-fluid">
      <div className="jumbotron jumbotron-fluid">
        <div className="container"></div>
      </div>
      <div className="row">
        <div className="col-4">
          <form onSubmit={addGame}>
            <div className="form-group">
              <label for="game">Game</label>
              <input
                type="game"
                className="form-control"
                id="game"
                aria-describedby="game"
                onChange={(e) => setgame(e.target.value)}
                value={game}
              />
            </div>

            <div className="form-group">
              <label for="league">League</label>
              <input
                type="league"
                className="form-control"
                id="league"
                aria-describedby="league"
                onChange={(e) => setleague(e.target.value)}
                value={league}
              />
            </div>

            <div className="form-group">
              <label for="time">time</label>
              <input
                type="time"
                className="form-control"
                id="time"
                aria-describedby="time"
                onChange={(e) => settime(e.target.value)}
                value={time}
              />
            </div>

            <div className="form-group">
              <label for="field">field</label>
              <input
                type="field"
                className="form-control"
                id="field"
                aria-describedby="field"
                onChange={(e) => setfield(e.target.value)}
                value={field}
              />
            </div>

            <button type="submit" className="btn btn-primary" onClick={addGame}>
              add game
            </button>
          </form>
        </div>
      </div>

      {/* <div className="row justify-content-center">
        <div className="row">
          <div className="col-4">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Game</th>
                  <th scope="col">league</th>
                  <th scope="col">time</th>
                  <th scope="col">Field</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GameList;
