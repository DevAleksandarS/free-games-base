import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";

function GamePage() {
  const location = useLocation();
  console.log(location);

  const { data, err, loading } = useFetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${location.state.gameID}`
  );

  if (loading) return <h1>Loading...</h1>;
  if (err) console.log(err);

  return (
    <>
      <div className="image-box">
        <img
          alt="game-thumbnail"
          src={data?.thumbnail}
          className="game-image"
        ></img>
      </div>
      <div className="game-info-container">
        <h1>{data?.title}</h1>
        <p className="game-text">Status: {data?.status}</p>
        <p className="game-text">Genre: {data?.genre}</p>
        <p className="game-text">Platform: {data?.platform}</p>
        <p className="game-text">Publisher: {data?.publisher}</p>
        <p className="game-text">Developer: {data?.developer}</p>
        <p className="game-text">Release Date: {data?.release_date}</p>
      </div>
      <div className="game-info-container">
        <h1>Min. Spec.:</h1>
        <p className="game-text">Os: {data.minimum_system_requirements?.os}</p>
        <p className="game-text">
          Processor: {data.minimum_system_requirements?.processor}
        </p>
        <p className="game-text">
          RAM: {data.minimum_system_requirements?.memory}
        </p>
        <p className="game-text">
          Graphics: {data.minimum_system_requirements?.graphics}
        </p>
        <p className="game-text">
          Storage: {data.minimum_system_requirements?.storage}
        </p>
      </div>
      <div className="desc-container">{data?.description}</div>
      <div className="screen-shot-container">
        {data.screenshots?.map((img) => (
          <img
            className="screenshot-image"
            alt="screenshot-image"
            src={img?.image}
          ></img>
        ))}
      </div>
    </>
  );
}

export default GamePage;
