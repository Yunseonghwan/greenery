import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: green;
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const MainTitle = styled.div`
  padding-right: 50px;
  a {
    color: white;
  }
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuText = styled.li`
  padding-right: 30px;
  a {
    color: white;
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 400px;
    height: 40px;
  }
`;

export const SignContainer = styled.div`
  display: flex;
`;

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  margin-left: 20px;
  background-color: white;
`;

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  width: 100px;
  height: 40px;
  background-color: white;
`;
