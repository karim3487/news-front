import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo.js";

const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          <p className={styles.extra}>{formatTimeAgo(item.published)}</p>
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
