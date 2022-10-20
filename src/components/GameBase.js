import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMainFetch from "../custom-hooks/useMainFetch";

function GameBase({
  handlePageCount,
  pageCountNumb,
  pageChanged,
  updatePageChange,
}) {
  const { data, err, loading, length, reFetch } = useMainFetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games"
  );

  if (loading) return <h1>Loading...</h1>;
  if (err) console.log(err);
  if (length) handlePageCount(length);
  if (pageChanged) {
    reFetch(pageCountNumb * 12 - 12, pageCountNumb * 12);
    updatePageChange();
  }

  return (
    <>
      {data?.map((data) => {
        return (
          <Link
            to={`/game/${data.id}`}
            state={{ gameID: data.id, gameName: data.title }}
          >
            <div key={data.id} className="game-container">
              <img
                alt="game-thumbnail"
                src={data.thumbnail}
                width={`240px`}
              ></img>
              <div className="game-info">
                <p className="game-title">{data.title}</p>
                <p className="game-desc">{data.short_description}</p>
                <div className="flex">
                  <p className="buble">{data.genre}</p>
                  <p className="buble">{data.platform}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default GameBase;
