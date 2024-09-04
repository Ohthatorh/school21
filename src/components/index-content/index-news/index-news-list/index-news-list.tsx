import { IndexNewsListItems } from "./index-news-list-items/index-news-list-items";
import { IndexNewsListTags } from "./index-news-list-tags/index-news-list-tags";
import styles from "./index-news-list.module.scss";
import { FC } from "react";

interface IIndexNewsList {}

export const IndexNewsList: FC<IIndexNewsList> = () => {
  const tags = [
    {
      name: "Все",
      color: "#0060DF",
      code: "all",
    },
    {
      name: "Школа",
      color: "#F8BC04",
      code: "school",
    },
    {
      name: "Родителям",
      color: "#8B6DD3",
      code: "roditelyam",
    },
    {
      name: "Обучающимся",
      color: "#5BD7AE",
      code: "obuchayushimsya",
    },
    {
      name: "Поступающим",
      color: "#567CDA",
      code: "postupayushim",
    },
  ];
  return (
    <div className={styles.news__list}>
      <IndexNewsListTags tags={tags} />
      <IndexNewsListItems />
    </div>
  );
};
