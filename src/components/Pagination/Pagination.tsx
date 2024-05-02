import styles from "./styles.module.css";
import { IPaginationProps } from "../../interfaces";

const Pagination = ({
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  totalPages,
  currentPage,
}: IPaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        onClick={handlePrevPage}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              className={styles.pageNumber}
              onClick={() => handlePageClick(index + 1)}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
