import styles from "./index-achievement.module.scss";
import { FC } from "react";

interface IIndexAchievement {
  title: string;
  text: string;
}

export const IndexAchievement: FC<IIndexAchievement> = ({ title, text }) => {
  return (
    <div className={styles.achievement}>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
