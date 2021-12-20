import React from "react";
import styled from "styled-components";
import { currencyFormat } from "../../utils/currency-format";
import Modal from "../Modal";
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
`;
const ItemImg = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: contain;
`;
const ItemGroup = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;

const ItemName = styled.p`
  margin: 0;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--color-black);
`;

const ItemMuted = styled.p`
  margin: 0 0.1rem 0.4rem 0.1rem;
  font-style: italic;
  font-size: 0.8rem;
  font-weight: 200;
  color: var(--color-gray);
  &:not(:last-of-type)::after {
    content: " /";
  }
  &:first-of-type {
    margin-left: 0;
  }
`;
const ItemPrice = styled.p`
  margin-bottom: 0.4rem;
`;

const ItemQuantity = styled.input`
  max-width: 6rem;
  margin-bottom: 0.4rem;
  padding: 0.8rem;
  border-radius: 2rem;
  text-align: center;
  border: 1px solid var(--border-color);
`;

const ItemDelete = styled.i`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-black);
`;

const Cart = () => {
  return (
    <Modal title="My Cart">
      <Item>
        <ItemImg src="/assets/images/products/product-4.jpg" />
        <ItemGroup column>
          <ItemName>Home Tosmois de Cras Hamo Dincidunts</ItemName>
          <ItemGroup>
            <ItemMuted>XS</ItemMuted>
            <ItemMuted>Black</ItemMuted>
          </ItemGroup>
          <ItemPrice>{currencyFormat(140)}</ItemPrice>
          <ItemQuantity type="number" value="1"></ItemQuantity>
        </ItemGroup>
        <ItemDelete className="fa fa-times"></ItemDelete>
      </Item>
      <Item>
        <ItemImg src="/assets/images/products/product-4.jpg" />
        <ItemGroup column>
          <ItemName>Home Tosmois de Cras Hamo Dincidunts</ItemName>
          <ItemGroup>
            <ItemMuted>XS</ItemMuted>
            <ItemMuted>Black</ItemMuted>
          </ItemGroup>
          <ItemPrice>{currencyFormat(140)}</ItemPrice>
          <ItemQuantity type="number" value="1"></ItemQuantity>
        </ItemGroup>
        <ItemDelete className="fas fa-times"></ItemDelete>
      </Item>
    </Modal>
  );
};

export default Cart;
