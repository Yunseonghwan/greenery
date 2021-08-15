import React, { useState } from "react";
import { IRecommend } from "./Recommend.interface";
import TopBannerImg from "../../../assets/Images/topBanner.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1194px;
  @media (max-width: 1250px) {
    flex-wrap: wrap;
  }
`;

const MainMagzineContainer = styled.div`
  margin-right: 30px;
  @media (max-width: 1250px) {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
  }
`;

const MainImage = styled.img`
  width: 378px;
  height: 509px;
  margin-bottom: 15px;
  @media (max-width: 1250px) {
    width: 100%;
  }
  @media (max-width: 880px) {
    height: 300px;
  }
`;

const UserMagzineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 865px) {
    justify-content: center;
  }
`;

const UserMagzine = styled.div`
  margin-bottom: 23px;
`;

const UserImage = styled.img`
  width: 378px;
  height: 210px;
  margin-bottom: 15px;
  @media (max-width: 1250px) {
    width: 100%;
  }
`;

const MagzineTitle = styled.div`
  margin-bottom: 5px;
  span {
    font-size: 24px;
    font-weight: bold;
  }
`;

const UserName = styled.div`
  span {
    font-size: 18px;
    color: #767676;
  }
`;

export const Recommend: React.FC<IRecommend.IProps> = () => {
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
    <Container>
      <MainMagzineContainer>
        <MainImage src={TopBannerImg} />
        <MagzineTitle>
          <span>title</span>
        </MagzineTitle>
        <UserName>
          <span>name</span>
        </UserName>
      </MainMagzineContainer>
      <UserMagzineContainer>
        {contentData.map((item: any) => (
          <UserMagzine>
            <UserImage src={item.image} />
            <MagzineTitle>
              <span>{item.title}</span>
            </MagzineTitle>
            <UserName>
              <span>{item.title}</span>
            </UserName>
          </UserMagzine>
        ))}
      </UserMagzineContainer>
    </Container>
  );
};
