import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { currencyFormat } from "../../utils/currency-format";

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
const Group = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;

const ItemName = styled(Link)`
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

const ItemDelete = styled.i`
  width: 1.8rem;
  height: 1.8rem;
  text-align: center;
  line-height: 1.8rem;
  font-size: 1.2rem;
  color: var(--color-gray);
  transition: color 0.2s ease;
  &:hover {
    color: var(--color-red);
  }
`;
const SideCartItem = () => {
  return (
    <Item>
      <ItemImg src="/assets/images/products/product-4.jpg" />
      <Group column>
        <ItemName>Home Tosmois de Cras Hamo Dincidunts</ItemName>
        <Group>
          <ItemMuted>XS</ItemMuted>
          <ItemMuted>Black</ItemMuted>
        </Group>
        <ItemPrice>{currencyFormat(140)}</ItemPrice>
      </Group>
      <ItemDelete className="fa fa-trash-alt"></ItemDelete>
    </Item>
  );
};

export default SideCartItem;
