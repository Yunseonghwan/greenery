import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ISearch, INav } from "./Nav.interface";
import {
  InputContainer,
  Menu,
  MenuBox,
  MenuText,
  SearchContainer,
  SearchImage,
  SignContainer,
  SignInContainer,
  SignUpContainer,
  TitleContainer,
} from "./styles";
import Search from "../../../assets/Icons/search.png";

export const Nav: React.FC<INav.IProps> = ({ open }) => {
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearch>();

  const SearchVisible = () => {
    setToggleSearch(!toggleSearch);
  };

  const onSubmit = () => {
    console.log(getValues());
  };
  return (
    <MenuBox open={open}>
      <TitleContainer>
        <Menu>
          {open && (
            <>
              <MenuText onClick={SearchVisible}>
                <span>검색하기</span>
              </MenuText>
              {toggleSearch && (
                <SearchContainer
                  toggle={toggleSearch}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <SearchImage src={Search} alt=""></SearchImage>
                  <input
                    {...register("text", { required: "Text is required" })}
                    type="text"
                    placeholder="검색창"
                    required
                  />
                </SearchContainer>
              )}
              <MenuText>
                <Link to="/">로그인</Link>
              </MenuText>
              <MenuText>
                <Link to="/">회원가입</Link>
              </MenuText>
            </>
          )}
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
      {!open && (
        <InputContainer>
          <SearchContainer onSubmit={handleSubmit(onSubmit)}>
            <SearchImage src={Search} alt=""></SearchImage>
            <input
              {...register("text", { required: "Text is required" })}
              type="text"
              placeholder="검색창"
              required
            />
          </SearchContainer>
          <SignContainer>
            <SignInContainer>
              <Link to="/">로그인</Link>
            </SignInContainer>
            <SignUpContainer>
              <Link to="/">회원가입</Link>
            </SignUpContainer>
          </SignContainer>
        </InputContainer>
      )}
    </MenuBox>
  );
};
