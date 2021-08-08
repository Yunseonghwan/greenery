import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1194px;
`;

export const MainMagzineContainer = styled.div`
  width: 34%;
  /* margin-right: 30px; */
`;

export const MainImage = styled.img`
  /* width: 378px; */
  width: 95%;
  height: 509px;
  margin-bottom: 15px;
`;

export const UserMagzineContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  width: 66%;
`;

export const UserMagzine = styled.div`
  margin-bottom: 23px;
`;

export const UserImage = styled.img`
  /* width: 378px; */
  width: 93%;
  height: 210px;
  margin-bottom: 15px;
`;

export const MagzineTitle = styled.div`
  margin-bottom: 5px;
  span {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const UserName = styled.div`
  span {
    font-size: 18px;
    color: #767676;
  }
`;
