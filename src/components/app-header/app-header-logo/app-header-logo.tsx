import Image from "next/image";
import styles from "./app-header-logo.module.scss";
import { FC } from "react";
import Logo from "@/assets/images/logo.png.png";
import Link from "next/link";

interface IAppHeaderLogo {}

export const AppHeaderLogo: FC<IAppHeaderLogo> = () => {
  return (
    <div className={styles.logo__container}>
      <Link className={styles.logo__link} href={"/"}>
        <Image
          className={styles.logo}
          src={Logo}
          alt="Логотип Школы №21"
          title="Логотип Школы №21"
          width={100}
          height={116}
        />
      </Link>
    </div>
  );
};
