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
  MagzineTitle,
  UserName,
} from "./styles";

const Home: React.FC<IHome.IProps> = () => {
  const bannerData: any = [
    {
      id: 1,
      image: TopBannerImg,
      title: "title",
      name: "name",
    },
    {
      id: 2,
      image: TopBannerImg,
      title: "title",
      name: "name",
    },
    {
      id: 3,
      image: TopBannerImg,
      title: "title",
      name: "name",
    },
    {
      id: 4,
      image: TopBannerImg,
    },
  ];
  const [properties, setProperties] = useState<any>(bannerData);
  const [property, setProperty] = useState<any>(bannerData[1]);

  const nextProperty = () => {
    const newIndex = property.index + 1;

    setProperty(properties[newIndex]);
  };

  const prevProperty = () => {
    const newIndex = property.index - 1;
    if (property.index === 0) {
      return 0;
    }
    setProperty(properties[newIndex]);
  };
  return (
    <MainTemplate>
      <TopBanner />
      <ContentTemplate
        title="이달의 그리너리 매거진"
        addText="그리너리 매거진 더 보러 가기"
      >
        <CardData>
          <Arrow>
            <span>&lt;</span>
          </Arrow>
          {properties.map((item: any, index: number) => (
            <CardContainer key={item.id}>
              <Card src={item.image} />
              <MagzineTitle>
                <span>{item.title}</span>
              </MagzineTitle>
              <UserName>
                <span>{item.name}</span>
              </UserName>
            </CardContainer>
          ))}
          <Arrow>
            <span>&gt;</span>
          </Arrow>
        </CardData>
      </ContentTemplate>
    </MainTemplate>
  );
};

export default Home;
