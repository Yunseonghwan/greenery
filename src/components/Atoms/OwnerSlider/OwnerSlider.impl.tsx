import React, { useState } from "react";
import { IOwnerSlider, IOwnerSliderStyles } from "./OwnerSlider.interface";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid #707070;
  border-radius: 36px;
  cursor: pointer;
  position: absolute;
  top: 40%;
  left: 0px;
  z-index: 100;
`;

const NextArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid #707070;
  border-radius: 36px;
  cursor: pointer;
  position: absolute;
  top: 40%;
  right: 0px;
  z-index: 100;
`;

const CardSlider = styled.div`
  display: flex;
  justify-content: center;
  //   align-items: center;
`;

const CardContainer = styled.div``;

const Card = styled.img<IOwnerSliderStyles>`
  width: ${({ imageIndex, idx }) => (idx === imageIndex ? "378px" : "276px")};
  height: ${({ imageIndex, idx }) => (idx === imageIndex ? "526px" : "384px")};
  transition: 300ms;
  margin-bottom: 20px;
`;

const MagzineTitle = styled.div<IOwnerSliderStyles>`
  margin-bottom: 4px;
  span {
    font-size: ${({ imageIndex, idx }) =>
      idx === imageIndex ? "24px" : "18px"};
    font-weight: bold;
  }
`;

const UserName = styled.div<IOwnerSliderStyles>`
  span {
     font-size: ${({ imageIndex, idx }) =>
       idx === imageIndex ? "18px" : "186px"}
   
    color: #767676;
  }
`;

export const OwnerSlider: React.FC<IOwnerSlider.IProps> = ({ contentData }) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const NextArrow = ({ onClick }: any) => {
    return (
      <NextArrowButton onClick={onClick}>
        <span>&gt;</span>
      </NextArrowButton>
    );
  };

  const PrevArrow = ({ onClick }: any) => {
    return (
      <PrevArrowButton onClick={onClick}>
        <span>&lt;</span>
      </PrevArrowButton>
    );
  };

  // 3.

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
    <Slider {...settings}>
      {contentData.map((item: any, idx: number) => (
        <CardContainer key={item.id}>
          <CardSlider>
            <Card src={item.image} imageIndex={imageIndex} idx={idx} />
            <MagzineTitle imageIndex={imageIndex} idx={idx}>
              <span>{item.title}</span>
            </MagzineTitle>
            <UserName imageIndex={imageIndex} idx={idx}>
              <span>{item.name}</span>
            </UserName>
          </CardSlider>
        </CardContainer>
      ))}
    </Slider>
  );
};
