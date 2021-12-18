import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { navLinks } from "../../config";
import Dropdown from "./Dropdown";

const DropdownMenu = styled(Dropdown)`
  transform: translateY(2rem);
  transition: all 0.3s ease;
  opacity: 0;
  user-select: none;
  visibility: hidden;
  @media (max-width: 762px) {
    transform: translateY(0rem);
    transform: translateX(-25rem);
  }
`;
const Nav = styled.ul``;
const NavClose = styled.i`
  display: none;
  @media (max-width: 762px) {
    position: relative;
    left: 90%;
    transform: translate(-90%, 1rem);
    z-index: 99;
    display: block;
    font-size: 2rem;
  }
`;
const MobileOverlay = styled.div`
  @media (max-width: 762px) {
    position: fixed;
    z-index: 98;
    right: 0%;
    top: 0%;
    height: 100%;
    width: 100%;
    background-color: var(--overlay);
    opacity: 0;
    user-select: none;
    visibility: hidden;
    transition: transform 0.3s ease;
  }
`;

const MobileNavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 762px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media (max-width: 762px) {
    position: fixed;
    left: 0%;
    top: 0%;
    z-index: 99;
    transform: translateX(-25rem);
    height: 100%;
    width: 25rem;
    background-color: var(--color-main);
    overflow-y: auto;
    transition: transform 0.3s ease;
  }
`;

const MobileNavbar = styled.div`
  &.active {
    & ${MobileOverlay} {
      opacity: 1;
      user-select: auto;
      visibility: visible;
    }
    & ${MobileNavContent} {
      transform: translateX(0rem);
    }
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
  @media (min-width: 762px) {
    &::after {
      content: "";
      position: absolute;
      bottom: 30%;
      display: block;
      width: 0%;
      height: 1px;
      background-color: var(--color-black);
      transition: all 0.4s ease;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;
const ArrowIcon = styled.i``;

const NavItem = styled.li`
  position: relative;
  padding: 1rem 0;
  margin-right: 1.8rem;
  text-transform: capitalize;
  &:last-of-type {
    margin-right: 0rem;
  }
  @media (max-width: 762px) {
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--border-color);
    width: 100%;
  }

  @media (min-width: 762px) {
    &.active ${NavLink} {
      &::after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--color-black);
        transition: all 0.4s ease;
      }
    }
    &:hover ${ArrowIcon} {
      transform: rotate(180deg);
    }
  }
  & ${ArrowIcon} {
    margin-left: 0.3rem;
    font-size: 0.8rem;
    transition: all 0.4s ease;
  }

  &:hover ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transform: translateX(0rem);
  }
  @media (max-width: 762px) {
    & ${ArrowIcon} {
      font-size: 1.2rem;
      transform: rotate(-90deg);
    }
    &:hover ${DropdownMenu} {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transform: translateX(0rem);
    }
  }
`;
const Navbar = ({ toggle, className }) => {
  const [isOpen, setIsOpen] = toggle;
  const closeNav = () => {
    setIsOpen(false);
  };
  const location = useLocation();
  return (
    <Nav className={className}>
      <MobileNavbar className={isOpen ? "active" : ""}>
        <MobileOverlay onClick={closeNav}></MobileOverlay>
        <MobileNavContent>
          <NavClose onClick={closeNav} className="fas fa-times"></NavClose>
          {navLinks.map((navItem, index) => (
            <NavItem
              className={`${location.pathname === navItem.url ? "active" : ""}`}
              key={index}
            >
              <NavLink to={navItem.children.length > 0 ? "#" : navItem.url}>
                {navItem.name}
                {navItem.icon ? (
                  <ArrowIcon className="far fa-chevron-down"></ArrowIcon>
                ) : (
                  navItem.icon
                )}
              </NavLink>
              {navItem.children.length > 0 ? (
                <DropdownMenu categoryName={navItem.name} />
              ) : (
                ""
              )}
            </NavItem>
          ))}
        </MobileNavContent>
      </MobileNavbar>
    </Nav>
  );
};

export default Navbar;
