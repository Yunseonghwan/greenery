import React, { useState } from "react";
import { IMagzine } from "./Magzine.interface";
import MainTemplate from "../../components/Templates/MainTemplate";
import { OwnerSlider, Recommend } from "../../components/Molecular";
import ContentTemplate from "../../components/Templates/ContentTemplate";
import TopBannerImg from "../../assets/Images/topBanner.png";
import { MagzineSearch } from "../../components/Molecular/MagzineSearch";

const Magzine: React.FC<IMagzine.IProps> = () => {
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
      <MagzineSearch />
      <ContentTemplate
        title="그리너리 오리지널 컨텐츠"
        addText="그리너리 매거진 더 보러 가기"
      >
        <OwnerSlider contentData={contentData} />
      </ContentTemplate>
      <ContentTemplate
        title="사용자 컨텐츠"
        addText="사용자 매거진 더 보러 가기"
      >
        <Recommend />
      </ContentTemplate>
      <ContentTemplate
        title="새로 등록된 글"
        addText="사용자 매거진 더 보러 가기"
      ></ContentTemplate>
    </MainTemplate>
  );
};

export default Magzine;
