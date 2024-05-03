import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/app/appStore.ts";
import { useDebounce } from "@/shared/hooks/useDebounce.ts";
import { useGetNewsQuery } from "@/entities/news/api/api.ts";
import { TOTAL_PAGES } from "@/shared/constants/constants.ts";
import { setFilters } from "@/entities/news/model/newsSlice.ts";
import NewsFilters from "@/pages/main/ui/NewsFilters/NewsFilters.tsx";
import { NewsList } from "@/widgets/news/ui";
import { Pagination } from "@/features/pagination";

const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 }),
      );
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 }),
      );
    }
  };

  const handlePageClick = (page_number: number) => {
    dispatch(setFilters({ key: "page_number", value: page_number }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <Pagination
        top
        bottom
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </Pagination>
    </section>
  );
};

export default NewsByFilters;
