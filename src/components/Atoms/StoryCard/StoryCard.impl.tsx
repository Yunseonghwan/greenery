import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IStoryCard } from "./StoryCard.interface";
import MakerImg from "../../../assets/Images/maker.png";
import FullMakerImg from "../../../assets/Images/fullMaker.png";
import HeartImg from "../../../assets/Images/heart.png";
import { trimText } from "../../../Utils";

import styled from "styled-components";

export const StoryCard: React.FC<IStoryCard.IProps> = ({
  id,
  image,
  userName,
  text,
}) => {
  const [checkMaker, setCheckMaker] = useState<boolean>(false);

  const handleMaker = () => {
    setCheckMaker(!checkMaker);
  };
  return (
    <UserContent key={id}>
      <Link to="/">
        <MainImage src={image} alt="" />
      </Link>
      <UserBox>
        <UserInfo>
          <Profile src={image} alt="" />
          <NickName>{userName}</NickName>
        </UserInfo>
        <ImageContainer>
          <Heart src={HeartImg} />
          {checkMaker ? (
            <Maker src={FullMakerImg} onClick={handleMaker} />
          ) : (
            <Maker src={MakerImg} onClick={handleMaker} />
          )}
        </ImageContainer>
      </UserBox>
      <ContentText>
        <Text>{trimText(text, 100)}</Text>
      </ContentText>
    </UserContent>
  );
};

const UserContent = styled.div`
  margin-bottom: 60px;
  width: 276px;
`;

const MainImage = styled.img`
  width: 276px;
  height: 270px;
`;

const UserBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.img`
  margin-right: 8px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;

const NickName = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
`;

const ImageContainer = styled.div``;

const Heart = styled.img`
  widthL 20px;
  height: 18px;
`;

const Maker = styled.img`
  margin-left: 20px;
  width: 17px;
  height: 20px;
`;

const ContentText = styled.div`
  margin-top: 20px;
  width: 276px;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #767676;
  word-break: break-all;
`;
