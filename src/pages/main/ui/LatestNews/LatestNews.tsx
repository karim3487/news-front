import { useGetLatestNewsQuery } from "@/entities/news/api/api.ts";
import BannersList from "@/widgets/news/ui/BannersList/BannersList.tsx";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
