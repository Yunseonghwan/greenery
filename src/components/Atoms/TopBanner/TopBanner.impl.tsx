import React from "react";
import { ITopBanner } from "./TopBanner.interface";
import TopBannerImg from "../../../assets/Images/topBanner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { TopBannerImage } from "./styles";

export const TopBanner: React.FC<ITopBanner.IProps> = () => {
  const bannerData: any = [
    {
      id: 1,
      image: TopBannerImg,
    },
    {
      id: 2,
      image: TopBannerImg,
    },
    {
      id: 3,
      image: TopBannerImg,
    },
  ];
  return (
    <Swiper
      style={{ width: "100%", paddingTop: "80px" }}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {bannerData.map((item: any) => (
        <SwiperSlide key={item.id}>
          <TopBannerImage src={item.image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
