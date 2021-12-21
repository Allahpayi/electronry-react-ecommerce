import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../config";

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 762px) {
    display: none;
  }
`;
const NavLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: var(--color-black);
  transition: all 0.4s ease;
`;
const NavItem = styled.li`
  position: relative;
  padding: 1rem 0;
  margin-right: 1rem;
  text-transform: capitalize;
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
