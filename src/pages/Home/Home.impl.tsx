import React from "react";
import { IHome } from "./Home.interface";
import MainTemplate from "../../components/Templates/MainTemplate";

const Home: React.FC<IHome.IProps> = () => {
  return <MainTemplate></MainTemplate>;
};

export default Home;
