import styles from "./styles.module.css";
import { formatTimeAgo } from "@/shared/utils/formatTimeAgo.ts";
import Image from "@/shared/ui/Image/Image.tsx";
import { INews } from "@/entities/news";

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
      <Image image={item.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>{formatTimeAgo(item.published)}</p>
    </div>
  );
};

export default NewsBanner;
