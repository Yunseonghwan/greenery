import styled from "styled-components";

export const CardData = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  height: 609px;
  position: relative;
  &:before &:after {
    content: "";
    display: block;
    width: 50%;
    height: 120%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 15%,
      rgba(255, 255, 255, 0.5) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  &:after {
    left: auto;
    right: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 15%,
      rgba(255, 255, 255, 0.5) 100%
    );
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 226px;
  margin: 0 auto;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 264px;
    outline: 5px solid #61dafb;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const CardSlider = styled.div`
  display: flex;
  position: absolute;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  .card {
    flex: 1;
    min-width: 200px;
    opacity: 0.5;
    transform: scale(0.7);
    transition: opacity 300ms linear, border-color 300ms linear,
      background-color 300ms linear,
      transform 300ms cubic-bezier(0.455, 0.04, 0.515, 0.955);
    .details {
      opacity: 0;
      transition: opacity 150ms linear;
    }
  }
`;

export const CardContainer = styled.div`
  margin-right: 15px;
  margin-left: 15px;
`;

export const Card = styled.img`
  width: 276px;
  height: 384px;
  margin-bottom: 20px;
`;

export const MagzineTitle = styled.div`
  margin-bottom: 4px;
  span {
    font-size: 24px;
    line-height: 30px;
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
