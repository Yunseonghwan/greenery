import styled from "styled-components";
import { IStyles } from "./Home.interface";

export const CardData = styled.div`
  /* display: flex;
  align-items: center; */
  width: 990px;
  height: 601px;
  /* overflow: hidden; */
`;

export const Content = styled.div``;

export const CardSlider = styled.div`
  justify-content: center;
`;

export const CardContainer = styled.div`
  margin: 0 15px;
  transform: scale(0.7);
  transition: transform 300ms;
`;

export const Card = styled.img<IStyles>`
  width: ${({ imageIndex, idx }) => (idx === imageIndex ? "378px" : "276px")};
  height: ${({ imageIndex, idx }) => (idx === imageIndex ? "526px" : "384px")};
  margin-bottom: 20px;
`;

export const CurrentMagzineTitle = styled.div`
  margin-bottom: 4px;
  span {
    font-size: 24px;
    line-height: 30px;
    font-weight: bold;
  }
`;

export const CurrentUserName = styled.div`
  span {
    font-size: 18px;
    line-height: 24px;
    color: #767676;
  }
`;

export const MagzineTitle = styled.div`
  margin-bottom: 4px;
  span {
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
  }
`;

export const UserName = styled.div`
  span {
    font-size: 16px;
    line-height: 22px;
    color: #767676;
  }
`;

export const BtnContainer = styled.div`
  padding: 0;
  font-size: 20px;
  text-align: center;
  color: #b3b3b3;
  width: 45px;
  height: 100%;
  border: 0;
  cursor: pointer;
  background: none;
  outline: none;
  position: absolute;
  z-index: 999;
  transition: all 0.6s ease 0s;
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid #707070;
  border-radius: 36px;
  cursor: pointer;
`;
