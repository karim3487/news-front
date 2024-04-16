import styles from "./styles.module.css";
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import { useFetch } from "../../helpers/hooks/useFetch.js";
import { getCategories } from "../../api/apiNews.js";
import Slider from "../Slider/Slider.jsx";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
