import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../config";
import IconButton from "../form-elements/IconButton";
import Logo from "./Logo";
import Group from "../tools/Group";

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
        <Group
          justifyContent="space-between"
          alignItems="center"
          top="0"
          left="0"
          position="absolute"
          width="100%"
          padding=".5rem 1rem 1rem 1rem"
        >
          <Logo />
          <IconButton
            size="1.6"
            onClick={() => setIsOpen(false)}
            className="fa fa-times"
          />
        </Group>
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
