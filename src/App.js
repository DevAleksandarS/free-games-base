import React, { useCallback, useState } from "react";
import Filter from "./components/Filter";
import ReactPaginate from "react-paginate";
import "./style/style.css";
import GameBase from "./components/GameBase";

function App() {
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [pageCountNumb, setPageCountNumb] = useState(0);
  const [pageChanged, setPageChanged] = useState(false);

  const handlePageCount = useCallback((numb) => {
    let calc = Math.floor(numb / 12);
    if (numb % 12) calc++;
    setNumberOfPages(calc);
  }, []);

  const updatePageChange = () => {
    setPageChanged(!pageChanged);
  };

  const handlePageChange = (pageNum) => {
    setPageCountNumb(parseInt(pageNum.selected) + 1);
    updatePageChange();
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
        <Filter />

        <main>
          <GameBase
            handlePageCount={handlePageCount}
            pageCountNumb={pageCountNumb}
            pageChanged={pageChanged}
            updatePageChange={updatePageChange}
          />

          <ReactPaginate
            pageCount={numberOfPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            breakLabel="&#x22EF;"
            nextLabel=">>"
            previousLabel="<<"
            onPageChange={handlePageChange}
            containerClassName="pagination"
            pageLinkClassName="page-number"
            nextLinkClassName="page-number"
            previousLinkClassName="page-number"
            activeLinkClassName="active"
            onClick={() => window.scrollTo({ top: 0, left: 0 })}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
