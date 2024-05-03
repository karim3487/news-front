import styles from "./styles.module.css";
import { useTheme } from "@/app/providers/ThemeContext.tsx";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme();

  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
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
