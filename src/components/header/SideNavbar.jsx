import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../config";

const Menu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 22rem;
  height: 100%;
  transform: translateX(-20rem);
  user-select: none;
  visibility: hidden;
  background-color: var(--color-main);
  z-index: 100;
  transition: all 0.3s ease;
`;

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

const SideNav = styled.div`
  @media (min-width: 762px) {
    display: none;
  }
  @media (max-width: 762px) {
    position: absolute;
  }
  &.active ${Menu} {
    transform: translateX(0rem);
    user-select: auto;
    visibility: visible;
  }
  &.active ${Backdrop} {
    user-select: auto;
    visibility: visible;
  }
`;
const NavLink = styled(Link)`
  display: block;
  padding: 0.6rem 1rem;
  text-transform: uppercase;
  transition: all 0.4s ease;
`;
const NavItem = styled.li`
  padding: 0.2rem 0;
  font-weight: 500;
  border-top: 1px solid var(--border-color);
  &.active ${NavLink} {
    color: var(--color-red);
  }
  &:last-of-type {
    border-bottom: 1px solid var(--border-color);
  }
`;
const SideNavbar = ({ toggle }) => {
  const [isOpen, setIsOpen] = toggle;
  const location = useLocation();
  return (
    <SideNav className={`${isOpen ? "active" : ""}`}>
      <Backdrop onClick={() => setIsOpen(false)} />
      <Menu>
        {navLinks.map((navItem, index) => (
          <NavItem
            className={`${location.pathname === navItem.url ? "active" : ""}`}
            key={index}
          >
            <NavLink to={navItem.url}>{navItem.name}</NavLink>
          </NavItem>
        ))}
      </Menu>
    </SideNav>
  );
};

export default SideNavbar;
