import styled from "styled-components";

export const CardData = styled.div`
  width: 500px;
  display: flex;
  height: 609px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  span {
    font-size: 22px;
    padding-top: 5px;
    color: #707070;
  }
`;
