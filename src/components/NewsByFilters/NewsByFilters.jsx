import styles from "./styles.module.css";
import Pagination from "../Pagination/Pagination.jsx";
import { TOTAL_PAGES } from "../../constants/constants.js";
import NewsList from "../NewsList/NewsList.jsx";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
  const handleNextPage = () => {
    if (filters.pageNumber < TOTAL_PAGES) {
      changeFilter("pageNumber", filters.pageNumber + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.pageNumber > 1) {
      changeFilter("pageNumber", filters.pageNumber - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("pageNumber", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />
    </section>
  );
};

export default NewsByFilters;
