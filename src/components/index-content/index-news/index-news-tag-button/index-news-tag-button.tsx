import styles from "./index-news-tag-button.module.scss";
import { FC } from "react";

interface IIndexNewsTagButton {}

export const IndexNewsTagButton: FC<IIndexNewsTagButton> = ({ tag }) => {
  return (
    <button className={styles.button} style={{ backgroundColor: tag.color }}>
      {tag.name}
    </button>
  );
};
