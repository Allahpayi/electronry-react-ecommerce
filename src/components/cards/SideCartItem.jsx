import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { currencyFormat } from "../../utils/currency-format";
import { removeFromCart } from "../../redux/actions/cartActions";
import { discountPrice } from "../../utils/discount-price";
import IconButton from "../form-elements/IconButton";
import Text from "../tools/Text";
import Group from "../tools/Group";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
`;
const Img = styled.img`
  width: 6rem;
  height: 6rem;
  margin-right: 1rem;
  object-fit: contain;
`;

const Delete = styled(IconButton)`
  &:hover {
    color: var(--color-red);
  }
`;
const SideCartItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, img, sku, price, discountRate } = data.product;
  const removeItemFromCart = (id) => {
    if (window.confirm("Delete the product from the card?")) {
      dispatch(removeFromCart(id));
    }
  };
  return (
    <Item>
      <Img src={img[0]} />
      <Group direction="column">
        <Text weight="500" fontSize="1" lineHeight="1.4">
          <Link to={`/product/${id}`}>{name.slice(0, 30) + "..."}</Link>
        </Text>
        <Text
          margin=".2rem"
          fontSize=".8"
          weight="300"
          color="var(--color-gray)"
        >
          SKU: {sku}
        </Text>
        <Text weight="500" fontSize="1.1">
          {data.quantity} x {currencyFormat(discountPrice(price, discountRate))}
        </Text>
      </Group>
      <Delete
        size="1.1"
        onClick={() => removeItemFromCart(id)}
        className="fa fa-trash-alt"
      ></Delete>
    </Item>
  );
};

export default SideCartItem;
