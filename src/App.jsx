import { useState } from "react";
import "./App.css";

function App() {
  const [tiles, setTiles] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  function updateTiles(index) {
    setTiles((prevTiles) => {
      let tiles = [...prevTiles];
      const x = Math.floor(index / 3);
      const y = index % 3;

      tiles[index] = !tiles[index];

      if (coordIsValid(x - 1, y)) {
        let index = coordTo1d(x - 1, y);
        tiles[index] = !tiles[index];
      }

      if (coordIsValid(x + 1, y)) {
        let index = coordTo1d(x + 1, y);
        tiles[index] = !tiles[index];
      }

      if (coordIsValid(x, y - 1)) {
        let index = coordTo1d(x, y - 1);
        tiles[index] = !tiles[index];
      }

      if (coordIsValid(x, y + 1)) {
        let index = coordTo1d(x, y + 1);
        tiles[index] = !tiles[index];
      }

      return tiles;
    });
  }

  function coordTo1d(x, y) {
    return x * 3 + y;
  }

  function coordIsValid(x, y) {
    return x >= 0 && x < 3 && y >= 0 && y < 3;
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
