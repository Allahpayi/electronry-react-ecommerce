import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomButtom = styled(Link)``;

const Text = styled.button`
  display: block;
  background-color: transparent;
  color: var(--color-black);
  transition: all 0.3s ease;
  width: ${(props) => (props.block ? props.block : "100%")};
  border-width: 1px;
  border-style: solid;
  border-color: var(--border-color);

  /* Red Button */
  background-color: ${(props) => props.red && "var(--color-red)"};
  color: ${(props) => props.red && "var(--color-main)"};
  border-color: ${(props) => props.red && "var(--color-red)"};

  /* Primary Button */
  background-color: ${(props) => props.primary && "var(--link-color)"};
  color: ${(props) => props.primary && "var(--color-main)"};
  border-color: ${(props) => props.primary && "var(--link-color)"};
  &:not(:disabled):hover {
    background-color: ${(props) => props.primary && "var(--color-black)"};
    color: ${(props) => props.primary && "var(--color-main)"};
    border-color: ${(props) => props.primary && "var(--color-black)"};
  }

  /* Outline Primary Button */
  color: ${(props) => props.outlinePrimary && "var(--color-black)"};
  border-color: ${(props) => props.outlinePrimary && "var(--color-black)"};
  &:hover {
    background-color: ${(props) => props.outlinePrimary && "var(--link-color)"};
    color: ${(props) => props.outlinePrimary && "var(--color-main)"};
    border-color: ${(props) => props.outlinePrimary && "var(--link-color)"};
  }

  opacity: ${(props) => (props.disabled ? "0.7" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  padding: 0.8rem 2rem;
  margin: ${(props) => (props.margin ? props.margin : "0.5rem 0")};
  border-radius: ${(props) => props.radius && "3rem"};
`;
const Button = ({
  children,
  href,
  disabled,
  red,
  primary,
  outlinePrimary,
  block,
  submit,
  radius,
  onClick,
  margin,
}) => {
  return (
    <CustomButtom to={href}>
      <Text
        disabled={disabled}
        primary={primary}
        outlinePrimary={outlinePrimary}
        red={red}
        block={block}
        type={submit && "submit"}
        radius={radius}
        margin={margin}
        onClick={onClick}
      >
        {children}
      </Text>
    </CustomButtom>
  );
};

export default Button;
