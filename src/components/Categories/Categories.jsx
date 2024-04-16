import styles from "./styles.module.css";
import { forwardRef } from "react";

const Categories = forwardRef(
  ({ categories, selectedCategory, setSelectedCategory }, ref) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? styles.active : styles.item}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              key={category}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
            >
              {category[0].toUpperCase() + category.slice(1)}
            </button>
          );
        })}
      </div>
    );
  },
);

Categories.displayName = "Categories"

export default Categories;
