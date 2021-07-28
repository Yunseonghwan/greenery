import React from "react";
import { Link } from "react-router-dom";
import { IMainTemplate } from "./MainTemplate.interface";
import { Container, HeaderContainer, MainTitle } from "./styles";
import { Buger, Nav } from "../../Atoms";

const MainTemplate: React.FC<IMainTemplate.IProps> = ({ children }) => {
  return (
    <Container>
      <HeaderContainer>
        <MainTitle>
          <Link to="/">Greenary</Link>
        </MainTitle>
        <Buger />
      </HeaderContainer>
      {children}
    </Container>
  );
};

export default MainTemplate;
