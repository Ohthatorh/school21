import Image, { StaticImageData } from "next/image";
import styles from "./index-news-aside-item.module.scss";
import { FC } from "react";
import Link from "next/link";

interface IIndexNewsAsideItem {
  img: StaticImageData;
  title: string;
  link: string;
}

export const IndexNewsAsideItem: FC<IIndexNewsAsideItem> = (props) => {
  const { img, title, link } = props;
  return (
    <Link href={link} className={styles.link}>
      <Image src={img} alt={title} className={styles.img} />
    </Link>
  );
};
