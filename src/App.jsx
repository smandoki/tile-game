import { useState } from "react";
import "./App.css";

function App() {
  const [tiles, setTiles] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  function updateTiles(index) {
    let nextTiles = [...tiles];
    const y = Math.floor(index / 3);
    const x = index % 3;

    console.log(x, y);

    nextTiles[index] = !nextTiles[index];
    if (x > 0) nextTiles[index - 1] = !nextTiles[index - 1];
    if (x < 2) nextTiles[index + 1] = !nextTiles[index + 1];
    if (y > 0) nextTiles[index - 3] = !nextTiles[index - 3];
    if (y < 2) nextTiles[index + 3] = !nextTiles[index + 3];

    setTiles(nextTiles);
  }

  return (
    <div className="tile-container">
      {tiles.map((tile, index) => (
        <div
          className={`tile ${tile ? "highlight" : ""}`}
          key={index}
          onClick={() => updateTiles(index)}
        ></div>
      ))}
    </div>
  );
}

export default App;
