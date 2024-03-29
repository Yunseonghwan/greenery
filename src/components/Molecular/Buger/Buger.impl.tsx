import React, { useState, useEffect } from "react";
import { Nav } from "../Nav";
import { IBuger, IBugerStyled } from "./Buger.interface";
import styled from "styled-components";

const StyledBurger = styled.div<IBugerStyled>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 28px;
  right: 40px;
  z-index: 100;
  display: none;
  cursor: pointer;

  @media (max-width: 957px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#4d8b23")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateY(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

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
