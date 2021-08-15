import styled from "styled-components";
import { IStyled } from "./Nav.interface";

export const MenuBox = styled.div<IStyled>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 957px) {
    flex-flow: column nowrap;
    background-color: rgba(0, 82, 48, 0.5);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 6rem;
    transition: transform 0.3s ease-in-out;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const InputContainer = styled.div`
  display: flex;
  @media (max-width: 957px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 5px;
  @media (max-width: 957px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MenuText = styled.li`
  padding-right: 30px;
  a {
    font-size: 16px;
  }
  @media (max-width: 957px) {
    padding-left: 20px;
    padding-bottom: 30px;
    a {
      color: #444;
      font-size: 18px;
    }
    span {
      color: #444;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

export const SearchImage = styled.img`
  position: relative;
  top: 4px;
  left: 30px;
  width: 18px;
  height: 18px;
  z-index: 20px;
`;

export const SearchContainer = styled.form<IStyled>`
  input {
    padding-left: 40px;
    width: 280px;
    height: 38px;
    border-radius: 25px;
    border: none;
    background-color: #f1f1f5;
    font-size: 16px;
    :focus {
      outline: none;
    }
    @media (max-width: 1235px) {
      width: 150px;
    }
    @media (max-width: 957px) {
      width: 250px;
      margin-bottom: 30px;
  }
`;

export const SignContainer = styled.div`
  display: flex;
  @media (max-width: 957px) {
    flex-direction: column;
  }
`;

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 38px;
  margin-left: 30px;
  background-color: #005230;
  border-radius: 25px;
  a {
    font-size: 18px;
    color: white;
  }
  @media (max-width: 1106px) {
    width: 90px;
    height: 35px;
    margin-left: 20px;
    a {
      font-size: 14px;
    }
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  width: 110px;
  height: 38px;
  border: 1px solid #4d8b23;
  border-radius: 25px;
  a {
    font-size: 18px;
    color: #4d8b23;
  }
  @media (max-width: 1106px) {
    width: 90px;
    height: 35px;
     margin-left: 20px;
    a {
      font-size: 14px;
    }
`;
