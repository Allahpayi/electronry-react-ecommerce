import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { currencyFormat } from "../../utils/currency-format";
import { Td, Tr } from "../Table";

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const CardImg = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: contain;
`;
const Group = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;

const CardName = styled(Link)`
  margin: 0;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--color-black);
`;

const CardMuted = styled.p`
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
const CardPrice = styled.p`
  margin-bottom: 0.4rem;
`;

const Quantity = styled.input`
  width: 4rem;
  padding: 0.8rem;
  border: 1px solid var(--color-gray);
  text-align: center;
`;

const CardDelete = styled.i`
  position: absolute;
  top: 0;
  left: 18%;
  transform: translateX(-18,0);
  width: 1.8rem;
  height: 1.8rem;
  text-align: center;
  line-height: 1.8rem;
  font-size: 1rem;
  color: var(--color-gray);
  transition: color 0.2s ease;
  &:hover {
    color: var(--color-red);
  }
`;
const CartItem = () => {
  return (
    <Tr>
      <Td>
        <ProductInfo>
          <CardImg src="/assets/images/products/product-4.jpg" />
          <Group column>
            <CardName to="/">Home Tosmois de Cras Hamo Dincidunts</CardName>
            <Group>
              <CardMuted>XS</CardMuted>
              <CardMuted>Black</CardMuted>
            </Group>
          </Group>
          <CardDelete className="fa fa-trash-alt"></CardDelete>
        </ProductInfo>
        
      </Td>
      <Td>
        <CardPrice>{currencyFormat(140)}</CardPrice>
      </Td>
      <Td>
        <Quantity min="1" type="number" defaultValue="1" />
      </Td>
      <Td>
        <CardPrice>{currencyFormat(140)}</CardPrice>
      </Td>
    </Tr>
  );
};

export default CartItem;
