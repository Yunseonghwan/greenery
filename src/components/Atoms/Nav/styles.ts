import styled from "styled-components";
import { IStyled } from "./Nav.interface";

export const MenuBox = styled.div<IStyled>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1080px) {
    flex-flow: column nowrap;
    background-color: "black";
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
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 5px;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MenuText = styled.li`
  padding-right: 30px;
  a {
    font-size: 16px;
  }
`;

export const SearchContainer = styled.form`
  @media (max-width: 1080px) {
    input: none {

    }
  }
  input {
    padding-left: 20px;
    width: 280px;
    height: 38px;
    border-radius: 25px;
    border: none;
    background-color: #f1f1f5;
    :focus {
      outline: none;
    }
    @media (max-width: 1220px) {
      width: 150px;
    }
  }
`;

export const SignContainer = styled.div`
  display: flex;
  @media (max-width: 1080px) {
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
`;
