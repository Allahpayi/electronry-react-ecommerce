import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../config";

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-main);
  @media (max-width: 762px) {
    display: none;
  }
`;
const NavLink = styled(Link)`
  text-transform: uppercase;
  transition: all 0.4s ease;
`;
const NavItem = styled.li`
  position: relative;
  margin-right: 1rem;
  &.active ${NavLink}::after {
    content: "";
    display: block;
    width: 100%;
    height: 0.1rem;
    background-color: var(--color-main);
  }
  &:last-of-type {
    margin-right: 0rem;
  }
`;
const Navbar = () => {
  const location = useLocation();
  return (
    <Nav>
      {navLinks.map((navItem, index) => (
        <NavItem
          className={`${location.pathname === navItem.url ? "active" : ""}`}
          key={index}
        >
          <NavLink to={navItem.url}>{navItem.name}</NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default Navbar;
