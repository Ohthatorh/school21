"use client";

import styles from "./index-banners.module.scss";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { IndexBanner } from "./index-banner/index-banner";
import Banner1 from "./banner-1.png";
import Banner2 from "./banner-2.png";
import Banner3 from "./banner-3.png";
import Banner4 from "./banner-4.png";
import Banner5 from "./banner-5.png";
import { Pagination } from "swiper/modules";

interface IIndexBanners {}

export const IndexBanners: FC<IIndexBanners> = () => {
  const banners = [Banner1, Banner2, Banner3, Banner4, Banner5];
  return (
    <section>
      <h2 className="visually-hidden">Баннеры на главной странице</h2>
      <Swiper
        wrapperClass={styles.swiper}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: styles.pagination__bullet,
          bulletActiveClass: styles.pagination__bullet_active,
        }}
        loop
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <IndexBanner img={banner} link="#" name="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
