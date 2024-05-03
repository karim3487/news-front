import styles from "./styles.module.css";
import withSkeleton from "@/shared/hocs/withSkeleton.tsx";
import NewsBanner from "@/entities/news/ui/NewsBanner/NewsBanner.tsx";
import { INews } from "@/entities/news";

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannerListWithSkeleton = withSkeleton<Props>(
  BannersList,
  "banner",
  10,
  "row",
);

export default BannerListWithSkeleton;
