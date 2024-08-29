import Link from "next/link";
import styles from "./index-banner.module.scss";
import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface IIndexBanner {
  img: StaticImageData;
  link: string;
  name: string;
}

export const IndexBanner: FC<IIndexBanner> = ({ img, link, name }) => {
  return (
    <div className={styles.banner__container}>
      <Link className={styles.banner__link} href={link}>
        <Image
          className={styles.banner__img}
          src={img}
          alt={name}
          title={name}
          width={1440}
          height={640}
        />
      </Link>
    </div>
  );
};
