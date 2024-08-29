import Image from "next/image";
import styles from "./index-kazn.module.scss";
import { FC } from "react";
import BannerKazn from "@/assets/images/banner-kazn.png";
import Link from "next/link";

interface IIndexKazn {}

export const IndexKazn: FC<IIndexKazn> = () => {
  return (
    <section className={styles.section}>
      <h2 className="visually-hidden">Баннер казначейство</h2>
      <Link
        className={styles.link}
        href={"https://bus.gov.ru/info-card/201993?activeTab=5"}
      >
        <Image
          className={styles.banner}
          src={BannerKazn}
          alt="Баннер казначейство"
          title="Баннер казначейство"
          width={1440}
          height={400}
        />
      </Link>
    </section>
  );
};
