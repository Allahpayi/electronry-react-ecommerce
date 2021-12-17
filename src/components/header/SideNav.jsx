import React, { useState } from "react";
import styled from "styled-components";

const SideNavContainer = styled.div``;

const SideNavButton = styled.button`
  position: relative;
  background-color: unset;
  cursor: pointer;
`;
const SideNavIcon = styled.i`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-black);
`;

const CartCount = styled.span`
  display: inline-block;
  position: absolute;
  top: -0.6rem;
  right: -0.6rem;
  width: 1.2rem;
  height: 1.2rem;
  line-height: 1.3rem;
  text-align: center;
  border-radius: 50%;
  color: var(--color-main);
  background-color: var(--color-red);
`;
const SideNavOverlay = styled.div`
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
`;
const SideNavContent = styled.div`
  position: fixed;
  right: 0%;
  top: 0%;
  z-index: 99;
  transform: translateX(25rem);
  height: 100vh;
  width: 25rem;
  padding: 1rem;
  background-color: var(--color-main);
  overflow-y: auto;
  transition: transform 0.3s ease;
`;
const SideNavBody = styled.div`
  &.active {
    & ${SideNavOverlay} {
      opacity: 1;
      user-select: auto;
      visibility: visible;
    }
    & ${SideNavContent} {
      transform: translateX(0rem);
    }
  }
`;
const SideNavContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-main2);
`;
const SideNavTitle = styled.h2``;
const CloseIcon = styled.i`
  width: 1.8rem;
  height: 1.8rem;
  text-align: center;
  line-height: 1.8rem;
  font-size: 1.6rem;
  color: var(--color-black);
`;
const SideNav = ({ children, icon, title, count }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SideNavContainer>
      <SideNavButton onClick={toggle}>
        <SideNavIcon className={icon}></SideNavIcon>
        {count !== undefined ? <CartCount>{count}</CartCount> : ""}
      </SideNavButton>
      <SideNavBody className={isOpen ? "active" : ""}>
        <SideNavOverlay onClick={toggle}></SideNavOverlay>
        <SideNavContent>
          <SideNavContentHeader>
            <SideNavTitle>{title}</SideNavTitle>
            <CloseIcon onClick={toggle} className="fas fa-times"></CloseIcon>
          </SideNavContentHeader>
          {children}
        </SideNavContent>
      </SideNavBody>
    </SideNavContainer>
  );
};

export default SideNav;
