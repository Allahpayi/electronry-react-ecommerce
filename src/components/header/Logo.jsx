import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const LogoContainer = styled(Link)`
  font-size: 2.6rem;
  font-weight: 500;
  color: var(--color-main);
  text-transform: uppercase;
  & span {
    color: var(--color-red);
    line-height: initial;
  }
`;
const Logo = () => {
  return (
    <LogoContainer to="/">
      E<span>R</span>
    </LogoContainer>
  );
};

export default Logo;
