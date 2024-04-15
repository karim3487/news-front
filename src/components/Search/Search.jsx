import styles from "./styles.module.css";

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        value={keywords}
        placeholder="JavaScript"
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  );
};

export default Search;
