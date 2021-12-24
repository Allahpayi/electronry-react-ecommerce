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
  background-color: var(--color-main);
  border-bottom: 1px solid var(--border-color);
  padding: 0.2rem 1rem;
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
        <Bars size="2" onClick={openNavbar} className="fas fa-bars" />
        <Logo />
        <Navbar />
        <SideNavbar toggle={[isOpen, setIsOpen]} />
        <Group alignItems="center">
          <Link to="/login">
            <IconButton size="1.6" className="fal fa-user-alt" />
          </Link>
          <Link to="/favorities">
            <IconButton size="1.6" className="fal fa-heart" />
          </Link>
          <SideCart />
        </Group>
      </Group>
    </Container>
  );
};

export default Header;
