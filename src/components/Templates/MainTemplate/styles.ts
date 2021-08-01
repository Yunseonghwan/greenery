import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;
  // max-width: 1690px;
  width: 100%;
  height: 80px;
  padding: 0 30px;
  background-color: white;
`;

export const MainTitle = styled.div`
  padding-right: 115px;
  a {
    font-size: 36px;
    font-weight: bold;
  }
  @media (max-width: 1106px) {
    padding-right: 60px;
    a {
      font-size: 28px;
    }
  }
`;
