import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ISearch, INav } from "./Nav.interface";
import {
  InputContainer,
  Menu,
  MenuBox,
  MenuText,
  SearchContainer,
  SignContainer,
  SignInContainer,
  SignUpContainer,
  TitleContainer,
} from "./styles";

export const Nav: React.FC<INav.IProps> = ({ open }) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearch>();

  const onSubmit = () => {
    console.log(getValues());
  };
  return (
    <MenuBox open={open}>
      <TitleContainer>
        <Menu>
          <MenuText>
            <Link to="/">Magzine</Link>
          </MenuText>
          <MenuText>
            <Link to="/">Community</Link>
          </MenuText>
          <MenuText>
            <Link to="/">Greenville</Link>
          </MenuText>
        </Menu>
      </TitleContainer>
      <InputContainer>
        <SearchContainer onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("text", { required: "Text is required" })}
            type="text"
            placeholder="검색창"
            required
          />
        </SearchContainer>
        {open ? (
          <Menu>
            <MenuText>
              <Link to="/">로그인</Link>
            </MenuText>
            <MenuText>
              <Link to="/">회원가입</Link>
            </MenuText>
          </Menu>
        ) : (
          <SignContainer>
            <SignInContainer>
              <Link to="/">로그인</Link>
            </SignInContainer>
            <SignUpContainer>
              <Link to="/">회원가입</Link>
            </SignUpContainer>
          </SignContainer>
        )}
      </InputContainer>
    </MenuBox>
  );
};
