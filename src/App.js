import { useEffect, useState } from "react";
import "./style/style.css";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f07331321fmshd5412fa13f915dap11e0aajsn701c098c1ef7",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

function App() {
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);

  const bla = () => {
    data.forEach((data, dataID) => {
      if (dataID < 10) setDisplayedData((current) => [...current, data]);
    });
  };

  useEffect(() => {
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="logo">FreeGamesBase</h1>

        <div className="search-field">
          <input className="search-input" placeholder="Game name..."></input>

          <button onClick={() => bla()} className="search-btn">
            Search
          </button>
        </div>
      </nav>

      <div className="main-container">
        <aside className="advance-game-search">
          <button onClick={() => console.log(displayedData)}>Click</button>
          {/* PLATFORMS */}
          <div className="platforms">
            <label htmlFor="platform">Platform</label>
            <div className="line"></div>
            <div className="flex">
              <input type="checkbox" name="PC" id="platform" />
              <p>PC</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Browser" id="platform" />
              <p>Browser</p>
            </div>
          </div>

          {/* SORTED BY */}
          <div className="sorted-by">
            <label htmlFor="sort-by">Sort By</label>
            <div className="line"></div>
            <div className="flex">
              <input type="checkbox" name="Relevance" id="sort-by" />
              <p>Relevance</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Popularity" id="sort-by" />
              <p>Popularity</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="ReleaseDate" id="sort-by" />
              <p>Release Date</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Alphabetical" id="sort-by" />
              <p>Alphabetical</p>
            </div>
          </div>

          {/* GRAPHICS */}
          <div className="graphics">
            <label htmlFor="graphic">Graphics</label>
            <div className="line"></div>
            <div className="flex">
              <input type="checkbox" name="3D" id="graphic" />
              <p>3D</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="2D" id="graphic" />
              <p>2D</p>
            </div>
          </div>

          {/* COMBAT */}
          <div className="combats">
            <label htmlFor="combat">Combat</label>
            <div className="line"></div>
            <div className="flex">
              <input type="checkbox" name="PVE" id="combat" />
              <p>PVE</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="PVP" id="combat" />
              <p>PVP</p>
            </div>
          </div>

          {/* GAMEPLAY */}
          <div className="gameplays">
            <label htmlFor="gameplay">Gameplay</label>
            <div className="line"></div>
            <div className="flex">
              <input type="checkbox" name="Turn-Based" id="gameplay" />
              <p>Turn-Based</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Real-Time" id="gameplay" />
              <p>Real-Time</p>
            </div>
          </div>

          {/* SETTING */}
          <div className="settings">
            <label htmlFor="setting">Setting</label>
            <div className="line"></div>
            <div className="flex">
              <input type="checkbox" name="Anime" id="setting" />
              <p>Anime</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Fantasy" id="setting" />
              <p>Fantasy</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Sci-Fi" id="setting" />
              <p>Sci-Fi</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Military" id="setting" />
              <p>Military</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Horror" id="setting" />
              <p>Horror</p>
            </div>
          </div>

          {/* GENRE */}
          <div className="genre">
            <label htmlFor="sort-by">Genre</label>
            <div className="line"></div>
            <div className="flex">
              <input type="checkbox" name="MMO" id="genre" />
              <p>MMO</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="MMORPG" id="genre" />
              <p>MMORPG</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Shooter" id="genre" />
              <p>Shooter</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Strategy" id="genre" />
              <p>Strategy</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Moba" id="genre" />
              <p>Moba</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="BattleRoyale" id="genre" />
              <p>Battle Royale</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Card" id="genre" />
              <p>Card</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Racing" id="genre" />
              <p>Racing</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Sports" id="genre" />
              <p>Sports</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Social" id="genre" />
              <p>Social</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Fighting" id="genre" />
              <p>Fighting</p>
            </div>
          </div>

          {/* TAGS */}
          <div className="tags">
            <label htmlFor="tag">Tags</label>
            <div className="line"></div>
            <div className="flex">
              <input type="checkbox" name="MMOFPS" id="tag" />
              <p>MMOFPS</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Sandbox" id="tag" />
              <p>Sandbox</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Shooter" id="tag" />
              <p>Shooter</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="OpenWorld" id="tag" />
              <p>Open World</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Survival" id="tag" />
              <p>Survival</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Action RPG" id="tag" />
              <p>Action RPG</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="MMORTS" id="tag" />
              <p>MMORTS</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Pixel" id="tag" />
              <p>Pixel</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Voxel" id="tag" />
              <p>Voxel</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="MMOTPS" id="tag" />
              <p>MMOTPS</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Zombie" id="tag" />
              <p>Zombie</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="FirstPerson" id="tag" />
              <p>First Person</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Top-Down" id="tag" />
              <p>Top-Down</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Tank" id="tag" />
              <p>Tank</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Space" id="tag" />
              <p>Space</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Sailing" id="tag" />
              <p>Sailing</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="SideScroller" id="tag" />
              <p>Side Scroller</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Superhero" id="tag" />
              <p>Superhero</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Permadeath" id="tag" />
              <p>Permadeath</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Action" id="tag" />
              <p>Action</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="MartialArts" id="tag" />
              <p>Martial Arts</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Flight" id="tag" />
              <p>Flight</p>
            </div>

            <div className="flex">
              <input type="checkbox" name="Low-Space" id="tag" />
              <p>Low-Space</p>
            </div>
          </div>
        </aside>

        <main></main>
      </div>
    </div>
  );
}

export default App;
