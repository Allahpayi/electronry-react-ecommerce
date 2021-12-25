import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SideCart from "../components/header/SideCart";
import Navbar from "../components/header/Navbar";
import Logo from "../components/header/Logo";
import SideNavbar from "../components/header/SideNavbar";
import Group from "../components/tools/Group";
import IconButton from "../components/form-elements/IconButton";

const Container = styled.div`
  position: sticky;
  z-index: 99;
  top: 0%;
  padding: 0.2rem 1rem;
  background-color: var(--color-main3);
`;

const Bars = styled(IconButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNavbar = () => {
    setIsOpen(true);
  };
  return (
    <Container>
      <Group alignItems="center" justifyContent="space-between">
        <Bars
          size="2"
          color="var(--color-main)"
          onClick={openNavbar}
          className="fal fa-bars"
        />
        <Logo />
        <Navbar />
        <SideNavbar toggle={[isOpen, setIsOpen]} />
        <Group alignItems="center">
          <Link to="/login">
            <IconButton
              color="var(--color-main)"
              size="1.6"
              className="fal fa-user-alt"
            />
          </Link>
          <Link to="/favorities">
            <IconButton
              color="var(--color-main)"
              size="1.6"
              className="fal fa-heart"
            />
          </Link>
          <SideCart />
        </Group>
      </Group>
    </Container>
  );
};

export default Header;
