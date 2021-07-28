import React, { useState } from "react";
import { Nav } from "../Nav";
import { IBuger } from "./Buger.interface";
import { StyledBurger } from "./styles";

export const Buger: React.FC<IBuger.IProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <StyledBurger open={isOpen} onClick={clickOpen}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Nav open={isOpen} />
    </>
  );
};
