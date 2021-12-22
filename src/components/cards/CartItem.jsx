import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { removeFromCart } from "../../redux/actions/cartActions";
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
  margin-right: 2rem;
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
  text-transform: uppercase;
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
const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    if (window.confirm("Delete the product from the card?")) {
      dispatch(removeFromCart(id));
    }
  };
  return (
    <Tr>
      <Td>
        <ProductInfo>
          <CardImg src={data.product.img[0]} />
          <Group column>
            <CardName to="/">{data.product.name}</CardName>
            <Group>
              <CardMuted>{data.product.sku}</CardMuted>
            </Group>
          </Group>
        </ProductInfo>
      </Td>
      <Td>
        <CardPrice>{currencyFormat(data.product.price)}</CardPrice>
      </Td>
      <Td>
        <Quantity min="1" type="number" defaultValue={data.quantity} />
      </Td>
      <Td>
        <CardPrice>{currencyFormat(data.total)}</CardPrice>
      </Td>
      <Td>
        <CardDelete
          onClick={() => removeItemFromCart(data.product.id)}
          className="fa fa-trash-alt"
        ></CardDelete>
      </Td>
    </Tr>
  );
};

export default CartItem;
