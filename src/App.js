import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import GamePage from "./paths/GamePage";
import HomePage from "./paths/HomePage";
import "./style/style.css";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const updateCurrentPage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="logo">FreeGamesBase</h1>

        <div className="search-field">
          <input className="search-input" placeholder="Game name..."></input>

          <button className="search-btn">Search</button>
        </div>
      </nav>

      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                currentPage={currentPage}
                updateCurrentPage={updateCurrentPage}
              />
            }
          />
          <Route path="/game/:id" element={<GamePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
