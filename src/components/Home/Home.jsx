import React, { useEffect, useState } from "react";

import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [res, setRes] = useState([]);
  const [value, setValue] = useState(["0"]);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=${value}`
    );
    const data = await response.json();
    console.log(data);
    setRes(data);
  };

  function handleChanges(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Current Sale</h1>
        <p>
          You can find games that are currently sale on steam. You can find all
          time low of games as well <a>here.</a>
        </p>
      </div>
      <hr />
      <div className="dropdown">
        <select value={value} onChange={handleChanges}>
          <option value={"0"}>All</option>
          <option value={"10"}>$10 or more</option>
          <option value={"20"}>$20 or more</option>
          <option value={"30"}>$30 or more</option>
        </select>
      </div>
      <div className="game-headers">
        <div className="header-left">
          <p>Games</p>
        </div>

        <div className="header-right">
          <p>Price</p>
          <p>Discount</p>
          <p>Rating</p>
        </div>
      </div>
      <div>
        {res.length > 0 ? (
          res.map((game, index) => <GameData key={index} game={game} />)
        ) : (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
}

function GameData({ game }) {
  return (
    <div className="gameData-container">
      <a href={`https://store.steampowered.com/app/${game.steamAppID}`}>
        <div className="gameData">
          <div className="gameData-leftSection">
            <img
              className="gameData-image"
              src={game.thumb}
              alt="{game.internalName}"
            />
            <p className="gameData-title">{game.title}</p>
          </div>
          <div className="gameData-rightSection">
            <p>${game.salePrice}</p>
            <p>{Math.round(game.savings)}%</p>
            <p>{game.steamRatingText}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
