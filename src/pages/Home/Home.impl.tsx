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
  CardSlider,
} from "./styles";

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
  const [properties, setProperties] = useState<any>(bannerData);
  const [property, setProperty] = useState<any>(bannerData[1]);

  const nextProperty = () => {
    const newIndex = property.index + 1;
    if (property.index === properties.length - 1) {
      return false;
    }
    setProperty(properties[newIndex]);
  };

  const prevProperty = () => {
    const newIndex = property.index - 1;
    setProperty(properties[newIndex]);
    if (property.index === 0) {
      return 0;
    }
  };
  return (
    <MainTemplate>
      <TopBanner />
      <ContentTemplate
        title="이달의 그리너리 매거진"
        addText="그리너리 매거진 더 보러 가기"
      >
        <CardData>
          <Content
            style={
              property.index && {
                opacity: 1,
                transform: "scale(1)",
                backgroundColor: "#f3f3f3",
                borderColor: "#f3f3f3",
              }
            }
          >
            <CardSlider
              style={{
                transform: `translateX(-${
                  property.index * (100 / properties.length)
                }%)`,
              }}
            >
              {properties.map((item: any) => (
                <CardContainer
                  key={item.id}
                  id={item.index}
                  style={
                    property.index && {
                      opacity: 1,
                      transform: "scale(1)",
                      backgroundColor: "#f3f3f3",
                      borderColor: "#f3f3f3",
                    }
                  }
                >
                  <Card src={item.image} />
                  <MagzineTitle>
                    <span>{item.title}</span>
                  </MagzineTitle>
                  <UserName>
                    <span>{item.name}</span>
                  </UserName>
                </CardContainer>
              ))}
            </CardSlider>
          </Content>
        </CardData>
      </ContentTemplate>
      <Arrow onClick={nextProperty}>
        <span>&gt;</span>
      </Arrow>
      <Arrow onClick={prevProperty}>
        <span>&lt;</span>
      </Arrow>
    </MainTemplate>
  );
};

export default Home;
