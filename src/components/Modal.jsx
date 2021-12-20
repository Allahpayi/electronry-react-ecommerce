import { Fragment } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import SideNavButton from "./buttons/SideNavButton";

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalContent = styled.div`
  position: fixed;
  ${(props) => (props.left ? "left" : "right")}:0%;
  top: 0;
  width: 25rem;
  min-height: 100vh;
  background-color: var(--color-main);
  z-index: 30;
  padding: 1rem 1rem;
  margin-bottom: 0.4rem;
  padding-bottom: 0.4rem;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--border-color);
`;
const SideNavTitle = styled.h2`
  color: var(--color-black);
`;
const Backdrop = (props) => {
  return <BackdropContainer></BackdropContainer>;
};
const ModalOverlay = ({ children, left, title }) => {
  return (
    <>
      <ModalContent left={left}>
        <ModalHeader>
          <SideNavTitle>{title}</SideNavTitle>
          <SideNavButton icon="fas fa-times"></SideNavButton>
        </ModalHeader>
        {children}
      </ModalContent>
    </>
  );
};
const sideNav = document.getElementById("side-nav");
const Modal = ({ children, left, title }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, sideNav)}
      {ReactDom.createPortal(
        <ModalOverlay left={left} title={title}>
          {children}
        </ModalOverlay>,
        sideNav
      )}
    </Fragment>
  );
};

export default Modal;
