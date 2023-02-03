import { useState } from "react";
import ReactPaginate from "react-paginate";
import Cards from "./Cards";

const Pagination = ({ data }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;
  const showItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Cards showItems={showItems} />
      <div class="m-5 ">
      <ReactPaginate
        onPageChange={handlePageClick}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        ></ReactPaginate>
        </div>
    </div>
  );
};

export default Pagination;
