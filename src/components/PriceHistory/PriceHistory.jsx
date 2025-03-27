import React, { useContext, useEffect, useState } from "react";

import "./PriceHistory.css";
import { Navbar } from "../Navbar/Navbar";
import { SearchContext } from "../SearchQuery";

export default function PriceHistory() {
  const [priceData, setPriceData] = useState([]);
  const { endpoint } = useContext(SearchContext);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${endpoint}`
    );
    const data = await response.json();
    setPriceData(data);
    console.log(data);
    console.log(endpoint);
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return (
    <div>
      <div>
        <Navbar />;
      </div>
      <div className="priceHistory-container">
        <div className="priceHistory-title">
          <p className="priceHistory-header">All time lows.</p>
          <p>You can search for any game's all time low price here.</p>
        </div>
        <hr />
        <div className="game-headers">
          {priceData.length > 0 ? (
            <>
              <div className="header-left">
                <p>Games</p>
              </div>

              <div className="header-right">
                <p>Price</p>
                <p className="header-rating">Rating</p>
              </div>
            </>
          ) : (
            true
          )}
        </div>
      </div>

      <div>
        {priceData.length > 0 ? (
          priceData.map((game, index) => <PriceData key={index} game={game} />)
        ) : (
          <div>
            <div className="cat-container">
              <div className="waiting-container">
                <img
                  className="cat"
                  src="https://imgflip.com/s/meme/Cute-Cat.jpg"
                />
                <p className="waiting-text">
                  I'm waiting for you to search something
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PriceData({ game }) {
  return (
    <div className="gameData-container">
      <a
        target="_blank"
        href={`https://store.steampowered.com/app/${game.steamAppID}`}
      >
        <div className="gameData">
          <div className="gameData-leftSection">
            <div className="priceData-image">
              <img
                className="gameData-image-div "
                src={game.thumb}
                alt="{game.internalName}"
              />
            </div>
            <p className="gameData-title">{game.external}</p>
          </div>
          <div className="gameData-rightSection">
            <p>${game.cheapest}</p>
            <p>{game.steamAppID ? "Available on steam" : "Not available"}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
