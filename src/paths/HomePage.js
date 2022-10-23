import React, { useState, useCallback } from "react";
import Filter from "../components/Filter";
import GameBase from "../components/GameBase";
import ReactPaginate from "react-paginate";

function HomePage({ currentPage, updateCurrentPage }) {
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
    updateCurrentPage(parseInt(pageNum.selected));
    updatePageChange();
  };

  if (currentPage !== pageCountNumb - 1) {
    setPageCountNumb(currentPage + 1);
    updatePageChange();
  }

  return (
    <>
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
          forcePage={currentPage}
          containerClassName="pagination"
          pageLinkClassName="page-number"
          nextLinkClassName="page-number"
          previousLinkClassName="page-number"
          activeLinkClassName="active"
          onClick={() => window.scrollTo({ top: 0, left: 0 })}
        />
      </main>
    </>
  );
}

export default HomePage;
