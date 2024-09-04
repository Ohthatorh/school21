import { IndexNewsAside } from "./index-news-aside/index-news-aside";
import { IndexNewsList } from "./index-news-list/index-news-list";
import styles from "./index-news.module.scss";
import { FC } from "react";

interface IIndexNews {}

export const IndexNews: FC<IIndexNews> = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.news__title}>Новости</h2>
        <div className={styles.news__content}>
          <IndexNewsList />
          <IndexNewsAside />
        </div>
      </div>
    </section>
  );
};
