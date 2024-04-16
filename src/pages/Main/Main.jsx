import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import { getCategories, getNews } from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Search from "../../components/Search/Search.jsx";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants.js";
import { useFetch } from "../../helpers/hooks/useFetch.js";
import { useFilters } from "../../helpers/hooks/useFilters.js";

const Main = () => {
  const { filters, changeFilter } = useFilters({
    pageNumber: 1,
    pageSize: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

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
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />

      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />

      <NewsList isLoading={isLoading} news={data?.news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.pageNumber}
      />
    </main>
  );
};

export default Main;
