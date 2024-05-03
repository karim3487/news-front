import styles from "./styles.module.css";
import { formatDate } from "@/shared/utils/formatDate.ts";
import { useTheme } from "@/app/providers/ThemeContext.tsx";
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton.tsx";

const Header = () => {
  const { isDark } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
};

export default Header;
