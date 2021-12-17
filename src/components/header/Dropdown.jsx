import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownMenu = styled.ul`
  position: absolute;
  z-index: 99;
  top: 100%;
  border-bottom-left-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
  padding: 1rem 0;
  background-color: var(--color-main);
  @media (max-width: 762px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 25rem;
    padding: 0;
  }
`;
const DropdownTitle = styled.h2`
  display: none;
  position: relative;
  padding: 0.8rem 0;
  text-align: center;
  background-color: var(--color-main2);
  @media (max-width: 762px) {
    display: block;
  }
`;
const DropdownItem = styled.li`
  padding: 0.3rem 2rem;
  text-transform: capitalize;
  @media (max-width: 762px) {
    width: 100%;
    padding: 1rem 2rem;
    margin-right: 1.8rem;
    font-weight: 900;
    font-size: 0.9rem;
    text-transform: uppercase;
    border-bottom: 1px solid var(--color-main2);
  }
`;
const DropdownLink = styled(Link)`
  position: relative;
  display: inline;
  min-width: 100%;
  white-space: nowrap;
  color: var(--color-black);
  transition: all 0.4s ease;
  @media (min-width: 762px) {
    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      display: block;
      width: 0%;
      height: 1px;
      background-color: var(--link-color);
      transition: all 0.4s ease;
    }
    &:hover {
      color: var(--link-color);
      &::before {
        width: 100%;
      }
    }
  }
`;

const Dropdown = ({ items, categoryName, className }) => {
  return (
    <DropdownMenu className={className}>
      <DropdownTitle>{categoryName}</DropdownTitle>
      {items.map((item, index) => (
        <DropdownItem key={index}>
          <DropdownLink to={item.url}>{item.name}</DropdownLink>
        </DropdownItem>
      ))}
    </DropdownMenu>
  );
};

export default Dropdown;
