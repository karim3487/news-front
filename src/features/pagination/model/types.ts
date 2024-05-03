export interface IPaginationProps {
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageClick: (page: number) => void;
  totalPages: number;
  currentPage: number;
}
