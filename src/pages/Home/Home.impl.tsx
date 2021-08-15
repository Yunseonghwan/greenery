import React, { useState } from "react";
import { IHome } from "./Home.interface";
import MainTemplate from "../../components/Templates/MainTemplate";
import {
  OwnerSlider,
  Popular,
  Recommend,
  TopBanner,
} from "../../components/Atoms";
import ContentTemplate from "../../components/Templates/ContentTemplate";
import TopBannerImg from "../../assets/Images/topBanner.png";

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

  return (
    <MainTemplate>
      <TopBanner />
      <ContentTemplate
        title="이달의 그리너리 매거진"
        addText="그리너리 매거진 더 보러 가기"
      >
        <OwnerSlider contentData={contentData} />
      </ContentTemplate>
      <ContentTemplate
        title="오늘의 추천 글"
        addText="사용자 매거진 더 보러 가기"
      >
        <Recommend />
      </ContentTemplate>
      <ContentTemplate
        title="오늘의 인기 커뮤니티 글"
        addText="커뮤니티 글 더 보러 가기"
      >
        <Popular />
      </ContentTemplate>
    </MainTemplate>
  );
};

export default Home;
