import Link from "next/link";
import styles from "./index-news-list-tags.module.scss";
import { FC } from "react";
import { ArrowRight } from "lucide-react";
import { IndexNewsTagButton } from "../../index-news-tag-button/index-news-tag-button";

interface IIndexNewsListTags {}

export const IndexNewsListTags: FC<IIndexNewsListTags> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      <ul className={styles.tags__list}>
        {tags.map((tag, index) => (
          <li className={styles.tags__item} key={index}>
            <IndexNewsTagButton tag={tag} />
          </li>
        ))}
      </ul>
      <Link href="#" className={styles.tags__link}>
        Все новости <ArrowRight size={20} />
      </Link>
    </div>
  );
};
