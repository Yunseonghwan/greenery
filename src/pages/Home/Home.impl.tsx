import React, { useState } from "react";
import { IHome } from "./Home.interface";
import MainTemplate from "../../components/Templates/MainTemplate";
import { TopBanner } from "../../components/Atoms";
import ContentTemplate from "../../components/Templates/ContentTemplate";
import TopBannerImg from "../../assets/images/topBanner.png";
import {
  Arrow,
  Card,
  CardContainer,
  CardData,
  Content,
  MagzineTitle,
  UserName,
  CardSlider,
  BtnContainer,
  CurrentMagzineTitle,
  CurrentUserName,
} from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: React.FC<IHome.IProps> = () => {
  const bannerData: any = [
    {
      id: 1,
      index: 0,
      image: TopBannerImg,
      title: "title1",
      name: "name1",
    },
    {
      id: 2,
      index: 1,
      image: TopBannerImg,
      title: "title2",
      name: "name2",
    },
    {
      id: 3,
      index: 2,
      image: TopBannerImg,
      title: "title3",
      name: "name3",
    },
    {
      id: 4,
      index: 3,
      image: TopBannerImg,
      title: "title4",
      name: "name4",
    },
  ];
  const [contentData, setContentData] = useState<any>(bannerData);
  const [currentContent, setCurrentContent] = useState<number>(1);

  const NextArrow = ({ onClick }: any) => {
    return (
      <Arrow onClick={onClick}>
        <span>&lt;</span>
      </Arrow>
    );
  };

  const PrevArrow = ({ onClick }: any) => {
    return (
      <Arrow onClick={onClick}>
        <span>&gt;</span>
      </Arrow>
    );
  };

  // 3.
  const [imageIndex, setImageIndex] = useState<number>(0);
  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: 3,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current: any, next: any) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MainTemplate>
      <TopBanner />
      <ContentTemplate
        title="이달의 그리너리 매거진"
        addText="그리너리 매거진 더 보러 가기"
      >
        <CardData>
          {/* <BtnContainer> */}
          {/* <Arrow>
              <span>&lt;</span>
            </Arrow>
            <Arrow>
              <span>&gt;</span>
            </Arrow> */}
          {/* </BtnContainer> */}

          <Slider {...settings}>
            {contentData.map((item: any, index: number) => (
              <>
                <CardContainer key={item.id} id={item.index}>
                  <CardSlider>
                    <Card
                      src={item.image}
                      imageIndex={imageIndex}
                      idx={index}
                    />
                    <MagzineTitle>
                      <span>{item.title}</span>
                    </MagzineTitle>
                    <UserName>
                      <span>{item.name}</span>
                    </UserName>
                  </CardSlider>
                </CardContainer>
              </>
            ))}
          </Slider>
        </CardData>
      </ContentTemplate>
    </MainTemplate>
  );
};

export default Home;
