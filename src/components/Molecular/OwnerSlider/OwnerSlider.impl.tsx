import React, { useState } from "react";
import { IOwnerSlider, IOwnerSliderStyles } from "./OwnerSlider.interface";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MagzineContainer = styled.div`
  max-width: 1194px;
  height: 609px;
  padding: 0 50px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 40px;
  }
`;

const CardSlider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
`;

const Card = styled.img<IOwnerSliderStyles>`
  width: ${({ imageIndex, idx }) => (idx === imageIndex ? "378px" : "276px")};
  height: ${({ imageIndex, idx }) => (idx === imageIndex ? "526px" : "384px")};
  transition: 500ms;
  margin-bottom: 20px;
  margin-top: ${({ imageIndex, idx }) => idx !== imageIndex && "60px"};
  @media (max-width: 1200px) {
    width: ${({ imageIndex, idx }) => (idx === imageIndex ? "278px" : "176px")};
    height: ${({ imageIndex, idx }) =>
      idx === imageIndex ? "426px" : "284px"};
  }
`;

const TitleContainer = styled.div<IOwnerSliderStyles>`
  width: ${({ imageIndex, idx }) => (idx === imageIndex ? "378px" : "276px")};

  @media (max-width: 1200px) {
    width: ${({ imageIndex, idx }) => (idx === imageIndex ? "278px" : "176px")};
  }
`;

const MagzineTitle = styled.div<IOwnerSliderStyles>`
  word-break: break-all;
  margin-bottom: 4px;
  span {
    font-size: ${({ imageIndex, idx }) =>
      idx === imageIndex ? "24px" : "18px"};
    font-weight: bold;
  }
`;

const UserName = styled.div<IOwnerSliderStyles>`
word-break: break-all;
  span {
     font-size: ${({ imageIndex, idx }) =>
       idx === imageIndex ? "18px" : "186px"}
   
    color: #767676;
  }
`;

export const OwnerSlider: React.FC<IOwnerSlider.IProps> = ({ contentData }) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
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
    <MagzineContainer>
      <Slider {...settings}>
        {contentData.map((item: any, idx: number) => (
          <CardContainer>
            <CardSlider key={item.id}>
              <Card src={item.image} imageIndex={imageIndex} idx={idx} />
              <TitleContainer imageIndex={imageIndex} idx={idx}>
                <MagzineTitle imageIndex={imageIndex} idx={idx}>
                  <span>{item.title}</span>
                </MagzineTitle>
                <UserName imageIndex={imageIndex} idx={idx}>
                  <span>{item.name}</span>
                </UserName>
              </TitleContainer>
            </CardSlider>
          </CardContainer>
        ))}
      </Slider>
    </MagzineContainer>
  );
};
