import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SideCart from "../components/header/SideCart";
import Navbar from "../components/header/Navbar";
import SideNavbar from "../components/header/SideNavbar";

const HeaderContainer = styled.div`
  background-color: var(--color-main);
  border-bottom: 1px solid var(--border-color);
`;

const HeaderTop = styled.p`
  padding: 0.6rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-red);
  background-color: var(--color-main2);
  transition: border 0.4s ease;
  & a {
    display: inline;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 1px;
      background-color: var(--color-red);
      transition: all 0.4s ease;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;
const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1rem;
  @media (max-width: 762px) {
    padding: 1rem;
  }
`;
const MenuBars = styled.i`
  margin-right: 1rem;
  font-size: 2rem;
  font-weight: 400;
  color: var(--color-black);
  display: none;
  @media (max-width: 762px) {
    display: block;
  }
`;
const Logo = styled(Link)`
  font-size: 2.6rem;
  font-weight: 500;
  color: var(--color-black);
  text-transform: uppercase;
  & span {
    color: var(--color-red);
  }
  @media (max-width: 762px) {
    display: none;
  }
`;

const HeaderIconGroup = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled(Link)`
  font-size: 1.6rem;
  font-weight: 300;
  margin-right: 1rem;
  color: var(--color-black);
`;
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNavbar = () => {
    setIsOpen(true);
  };
  return (
    <HeaderContainer>
      <HeaderTop>
        Mid-season sale up to 70% off. <Link to="/">Shop now</Link>
      </HeaderTop>
      <HeaderBottom>
        <MenuBars onClick={openNavbar} className="fas fa-bars"></MenuBars>
        <Logo to="/">
          E<span>R</span>
        </Logo>
        <Navbar />
        <SideNavbar toggle={[isOpen, setIsOpen]} />
        <HeaderIconGroup>
          <Icon to="/login" className="fal fa-user-alt"></Icon>
          <Icon to="/favorities" className="far fa-heart"></Icon>
          <SideCart />
        </HeaderIconGroup>
      </HeaderBottom>
    </HeaderContainer>
  );
};

export default Header;
