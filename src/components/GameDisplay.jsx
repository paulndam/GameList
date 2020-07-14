import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GameDisplay = (props) => {
  const [currentgame, setcurrentgame] = useState("");

  const remove = (e, index) => {
    e.preventDefault();
    props.delete(index);
  };

  return (
    // <div className="row justify-content-center">
    <div className="row">
      <div className="col-5">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Game</th>
              <th scope="col">league</th>
              <th scope="col">time</th>
              <th scope="col">Field</th>
              <th scope="col">Don't watch</th>
            </tr>
          </thead>
          <tbody>
            {props.games.map((game, index) => (
              <tr key={index}>
                <td>{game.game}</td>
                <td>{game.league}</td>
                <td>{game.time}</td>
                <td>{game.field}</td>
                <td>
                  <a
                    href="#"
                    onClick={(e) => remove(e, index)}
                    className="btn btn-danger btn-sm"
                  >
                    delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // </div>
  );
};

export default GameDisplay;
