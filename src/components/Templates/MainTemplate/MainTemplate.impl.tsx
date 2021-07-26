import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IMainTemplate, ISearch } from "./MainTemplate.interface";
import {
  Container,
  HeaderContainer,
  InputContainer,
  MainTitle,
  Menu,
  MenuText,
  SearchContainer,
  SignContainer,
  SignInContainer,
  SignUpContainer,
  TitleContainer,
} from "./styles";

const MainTemplate: React.FC<IMainTemplate.IProps> = ({ children }) => {
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
    <Container>
      <HeaderContainer>
        <TitleContainer>
          <MainTitle>
            <Link to="/">Greenary</Link>
          </MainTitle>
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
          <SignContainer>
            <SignInContainer>
              <Link to="/">로그인</Link>
            </SignInContainer>
            <SignUpContainer>
              <Link to="/">회원가입</Link>
            </SignUpContainer>
          </SignContainer>
        </InputContainer>
      </HeaderContainer>
      {children}
    </Container>
  );
};

export default MainTemplate;
