import React, { useState } from "react";
import styled from "styled-components";

const SideNavContainer = styled.div`
  padding-right: 1rem;
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
  margin-bottom: 0.4rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--border-color);
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
      <SideNavBody className={isOpen ? "active" : ""}>
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
