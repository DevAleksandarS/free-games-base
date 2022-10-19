import React from "react";

function Filter() {
  return (
    <aside className="advance-game-search">
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
    </aside>
  );
}

export default Filter;
