import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CustomButton = styled(Link)`
  display: inline-block;
  background-color: ${(props) =>
    props.red ? "var(--color-red)" : "transparent"};
  color: ${(props) => (props.red ? "var(--color-main)" : "var(--color-black)")};
  border: 1px solid
    ${(props) => (props.red ? "var(--color-red)" : "var(--color-black)")};
  padding: 0.7rem 2rem;
  border-radius: 3rem;
`;
const Button = ({ children, href, red }) => {
  return (
    <CustomButton red={red} to={href}>
      {children}
    </CustomButton>
  );
};

export default Button;
