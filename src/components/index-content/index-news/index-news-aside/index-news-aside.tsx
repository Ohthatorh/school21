import styles from "./index-news-aside.module.scss";
import { FC } from "react";
import AsideBanner1 from "@/assets/images/aside-banner-1.png";
import AsideBanner2 from "@/assets/images/aside-banner-2.png";
import AsideBanner3 from "@/assets/images/aside-banner-3.png";
import AsideBanner4 from "@/assets/images/aside-banner-4.png";
import { IndexNewsAsideItem } from "./index-news-aside-item/index-news-aside-item";
import { IndexNewsAsideLinks } from "./index-news-aside-links/index-news-aside-links";
import { IndexNewsAsideFeedback } from "./index-news-aside-feedback/index-news-aside-feedback";

interface IIndexNewsAside {}

export const IndexNewsAside: FC<IIndexNewsAside> = () => {
  const banners = [
    {
      id: 1,
      title: "Заголовок",
      link: "#",
      img: AsideBanner1,
    },
    {
      id: 2,
      title: "Заголовок",
      link: "#",
      img: AsideBanner2,
    },
    {
      id: 3,
      title: "Заголовок",
      link: "#",
      img: AsideBanner3,
    },
    {
      id: 4,
      title: "Заголовок",
      link: "#",
      img: AsideBanner4,
    },
  ];
  return (
    <aside className={styles.aside}>
      <ul className={styles.aside__list}>
        {banners.map((banner) => (
          <IndexNewsAsideItem key={banner.id} {...banner} />
        ))}
        <IndexNewsAsideLinks />
        <IndexNewsAsideFeedback />
      </ul>
    </aside>
  );
};
