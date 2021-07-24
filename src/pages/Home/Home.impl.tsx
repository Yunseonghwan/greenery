import React from "react";
import { Test } from "../../components/Atoms";
import { IHome } from "./Home.interface";
import { Container } from "./styles";

const Home: React.FC<IHome.IProps> = () => {
  return (
    <Container>
      Home <Test />
    </Container>
  );
};

export default Home;
