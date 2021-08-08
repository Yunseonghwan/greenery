import React from "react";
import { Link } from "react-router-dom";
import { IContentTemplate } from "./ContentTemplate.interface";
import {
  AddButton,
  Container,
  ContentContainer,
  ContentTitle,
  Magzine,
  Title,
} from "./styles";

const ContentTemplate: React.FC<IContentTemplate.IProps> = ({
  children,
  title,
  addText,
}) => {
  return (
    <Magzine>
      <Container>
        <ContentContainer>
          <ContentTitle>
            <Title>{title}</Title>
          </ContentTitle>
          <AddButton>
            <Link to="/">{addText} &gt;</Link>
          </AddButton>
        </ContentContainer>
      </Container>
      <Container>{children}</Container>
    </Magzine>
  );
};

export default ContentTemplate;
