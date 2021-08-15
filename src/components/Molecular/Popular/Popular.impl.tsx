import React, { useState } from "react";
import { IPopular } from "./Popular.interface";
import TopBannerImg from "../../../assets/Images/topBanner.png";

import styled from "styled-components";
import { StoryCard } from "../../Atoms";

export const Popular: React.FC<IPopular.IProps> = () => {
  const bannerData: any = [
    {
      id: 1,
      index: 0,
      image: TopBannerImg,
      title: "title1",
      name: "name1",
      text: "asdasdasdasdus dasdasdasdasdsadasflkjdsglkdsjlgkjsdlgkjsadsadasafjkhfjaksfhkfgbkhdfkudfhsdfasdasdsadasdasdasdasdasdh",
      userName: "hwan",
    },
    {
      id: 2,
      index: 1,
      image: TopBannerImg,
      title: "title2",
      name: "name2",
      text: "asdasdasd",
      userName: "hwan",
    },
    {
      id: 3,
      index: 2,
      image: TopBannerImg,
      title: "title3",
      name: "name3",
      text: "asdasdasd",
      userName: "hwan",
    },
    {
      id: 4,
      index: 3,
      image: TopBannerImg,
      title: "title4",
      name: "name4",
      text: "asdasdasd",
      userName: "hwan",
    },
    {
      id: 5,
      index: 0,
      image: TopBannerImg,
      title: "title1",
      name: "name1",
      text: "asdasdasd",
      userName: "hwan",
    },
    {
      id: 6,
      index: 1,
      image: TopBannerImg,
      title: "title2",
      name: "name2",
      text: "asdasdasd",
      userName: "hwan",
    },
    {
      id: 7,
      index: 2,
      image: TopBannerImg,
      title: "title3",
      name: "name3",
      text: "asdasdasd",
      userName: "hwan",
    },
    {
      id: 8,
      index: 3,
      image: TopBannerImg,
      title: "title4",
      name: "name4",
      text: "asdasdasd",
      userName: "hwan",
    },
  ];
  const [contentData, setContentData] = useState<any>(bannerData);

  return (
    <Container>
      <ContentContainer>
        {contentData.map((item: any) => (
          <StoryCard
            id={item.id}
            image={item.image}
            userName={item.userName}
            text={item.text}
          />
        ))}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1194px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 610px) {
    justify-content: center;
  }
`;
