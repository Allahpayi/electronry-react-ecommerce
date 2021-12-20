import React from "react";
import styled from "styled-components";
const Button = styled.button`
  position: relative;
  background-color: unset;
  cursor: pointer;
`;
const Icon = styled.i`
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
const CartButton = ({ icon, count, toggleModal }) => {
  return (
    <Button onClick={toggleModal}>
      <Icon className={icon}></Icon>
      {count !== undefined ? <CartCount>{count}</CartCount> : ""}
    </Button>
  );
};

export default CartButton;
