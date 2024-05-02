import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList.tsx";
import { useFetch } from "../../helpers/hooks/useFetch.ts";
import { getLatestNews } from "../../api/apiNews.ts";
import { NewsApiResponse } from "../../interfaces";

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
