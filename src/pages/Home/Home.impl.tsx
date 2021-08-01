import React, { useState } from "react";
import { IHome } from "./Home.interface";
import MainTemplate from "../../components/Templates/MainTemplate";
import { TopBanner } from "../../components/Atoms";
import ContentTemplate from "../../components/Templates/ContentTemplate";
import TopBannerImg from "../../assets/Images/topBanner.png";
import {
  Arrow,
  Card,
  CardContainer,
  CardData,
  Content,
  MagzineTitle,
  UserName,
} from "./styles";

const Home: React.FC<IHome.IProps> = () => {
  const bannerData: any = [
    {
      id: 1,
      index: 1,
      image: TopBannerImg,
      title: "title",
      name: "name",
    },
    {
      id: 2,
      index: 2,
      image: TopBannerImg,
      title: "title",
      name: "name",
    },
    {
      id: 3,
      index: 3,
      image: TopBannerImg,
      title: "title",
      name: "name",
    },
    {
      id: 4,
      index: 4,
      image: TopBannerImg,
      title: "title",
      name: "name",
    },
  ];
  const [properties, setProperties] = useState<any>(bannerData);
  const [property, setProperty] = useState<any>(bannerData[1]);

  const nextProperty = () => {
    const newIndex = property.index + 1;
    console.log(newIndex);

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
          <Arrow onClick={prevProperty}>
            <span>&lt;</span>
          </Arrow>
          <Content>
            {properties.map((item: any) => (
              <CardContainer key={item.id} id={item.index}>
                <Card src={item.image} />
                <MagzineTitle>
                  <span>{item.title}</span>
                </MagzineTitle>
                <UserName>
                  <span>{item.name}</span>
                </UserName>
              </CardContainer>
            ))}
          </Content>
          <Arrow onClick={nextProperty}>
            <span>&gt;</span>
          </Arrow>
        </CardData>
      </ContentTemplate>
    </MainTemplate>
  );
};

export default Home;
