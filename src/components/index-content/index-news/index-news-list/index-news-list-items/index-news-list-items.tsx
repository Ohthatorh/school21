"use client";

import styles from "./index-news-list-items.module.scss";
import { FC } from "react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { IndexNewsItem } from "./index-news-item/index-news-item";

interface IIndexNewsListItems {}

export const IndexNewsListItems: FC<IIndexNewsListItems> = () => {
  return (
    <div>
      <Swiper
        wrapperClass={styles.swiper}
        modules={[Pagination, Grid]}
        spaceBetween={20}
        slidesPerView={2}
        grid={{ rows: 3, fill: "row" }}
        pagination={{
          clickable: true,
          bulletClass: styles.pagination__bullet,
          bulletActiveClass: styles.pagination__bullet_active,
        }}
      >
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
        <SwiperSlide>
          <IndexNewsItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
