import Link from "next/link";
import { IndexNewsTagButton } from "../../../index-news-tag-button/index-news-tag-button";
import styles from "./index-news-item.module.scss";
import { FC } from "react";
import { CalendarDays, Eye } from "lucide-react";

interface IIndexNewsItem {}

export const IndexNewsItem: FC<IIndexNewsItem> = () => {
  return (
    <Link href="#" className={styles.item}>
      <div className={styles.item__tags}>
        <IndexNewsTagButton
          tag={{ name: "Школа", color: "#F8BC04", code: "school" }}
        />
        <IndexNewsTagButton
          tag={{ name: "Родителям", color: "#8B6DD3", code: "roditelyam" }}
        />
      </div>
      <div className={styles.item__text__container}>
        <p className={styles.item__title}>
          Меры социальной поддержки многодетных семей, предусмотренные
          законодательством Костромской области
        </p>
        <p className={styles.item__text}>
          В целях сохранения и защиты традиционных семейных ценностей 2024 год
          объявлен в стране Годом семьи.
        </p>
      </div>
      <div className={styles.item__footer__container}>
        <p className={styles.item__footer__text}>Подробнее</p>
        <div className={styles.item__date__container}>
          <p className={styles.item__date}>
            <CalendarDays color={"#8E8E8E"} /> 01.08.2024, 15:26
          </p>
          <p className={styles.item__views}>
            <Eye color={"#8E8E8E"} /> 20
          </p>
        </div>
      </div>
    </Link>
  );
};
