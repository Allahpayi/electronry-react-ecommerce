import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../config";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  visibility: hidden;
  background-color: var(--overlay);
  z-index: 98;
  transition: all 0.3s ease;
`;

const Menu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  transform: translateX(-20rem);
  user-select: none;
  visibility: hidden;
  padding-top: 5rem;
  background-color: var(--color-main);
  z-index: 100;
  transition: all 0.3s ease;
`;

const SideNav = styled.div`
  @media (min-width: 762px) {
    display: none;
  }
  &.active ${Menu} {
    transform: translateX(0rem);
    user-select: auto;
    visibility: visible;
  }
  &.active ${Backdrop} {
    transform: translateX(0rem);
    user-select: auto;
    visibility: visible;
  }
`;
const MenuHeader = styled.div`
  position: absolute;
  top: 0rem;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  padding-bottom: 0;
`;
const Logo = styled(Link)`
  font-size: 2.6rem;
  font-weight: 500;
  color: var(--color-black);
  text-transform: uppercase;
  & span {
    color: var(--color-red);
    line-height: initial;
  }
`;

const CloseIcon = styled.i`
  font-size: 1.4rem;
`;
const NavLink = styled(Link)`
  display: block;
  padding: 0.6rem 1rem;
  width: 100%;
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: var(--color-black);
  transition: all 0.4s ease;
`;
const NavItem = styled.li`
  border-top: 1px solid var(--border-color);
  text-transform: capitalize;
  &:last-of-type {
    border-bottom: 1px solid var(--border-color);
  }
`;
const SideNavbar = ({ toggle }) => {
  const [isOpen, setIsOpen] = toggle;
  return (
    <SideNav className={`${isOpen ? "active" : ""}`}>
      <Backdrop onClick={() => setIsOpen(false)}></Backdrop>
      <Menu>
        <MenuHeader>
          <Logo to="/">
            E<span>R</span>
          </Logo>
          <CloseIcon onClick={() => setIsOpen(false)} className="fa fa-times" />
        </MenuHeader>
        {navLinks.map((navItem, index) => (
          <NavItem key={index}>
            <NavLink to={navItem.url}>{navItem.name}</NavLink>
          </NavItem>
        ))}
      </Menu>
    </SideNav>
  );
};

export default SideNavbar;
