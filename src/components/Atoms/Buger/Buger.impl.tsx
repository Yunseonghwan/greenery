import React, { useState, useEffect } from "react";
import { Nav } from "../Nav";
import { IBuger } from "./Buger.interface";
import { StyledBurger } from "./styles";

export const Buger: React.FC<IBuger.IProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleResize = () => {
    const width = ` ${window.innerWidth}`;
    if (Number(width) >= 957) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

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
