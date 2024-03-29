import styled from "styled-components";

export const Magzine = styled.div`
  width: 100%;
  padding-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  @media (max-width: 1250px) {
    padding: 0 20px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  max-width: 1194px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 54px;
`;

export const ContentTitle = styled.div``;

export const Title = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  @media (max-width: 1106px) {
    font-size: 28px;
  }
  @media (max-width: 957px) {
    font-size: 18px;
  }
`;

export const AddButton = styled.div`
  a {
    font-size: 18px;
    line-height: 24px;
    text-decoration: underline;
    color: #767676;
    @media (max-width: 1106px) {
      font-size: 12px;
    }
    @media (max-width: 957px) {
      font-size: 10px;
    }
  }
`;
